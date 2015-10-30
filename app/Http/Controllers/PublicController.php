<?php

namespace Forum\Http\Controllers;

use Carbon\Carbon;
use Forum\News;
use Illuminate\Http\Request;
use Mail;
use Response;
use Storage;
use Validator;

class PublicController extends Controller {


	public function index()
	{
		return view('pages.public.index',compact('news'));
	}

    public function news($page)
    {
        Carbon::setLocale('nl');
        $posts = News::all()->count();
        $pages = 0;
        $news = News::all();
        if($posts != 0){
            $pages = ceil($posts / 5);
            if($page > $pages){
                return redirect('nieuws/pagina-1');
            }
            $news = News::latest()->skip(($page - 1) * 5)->take(5)->get();
        }
        return view('pages.public.news')->with(['news' => $news,'page' => $page, 'pages' => $pages]);
    }

    public function article($slug)
    {
        Carbon::setLocale('nl');
        $article = News::where('slug',$slug)->first();
        return view('pages.public.article')->with('article',$article);
    }
    public function denaam()
    {
        return view('pages.public.denaam');
    }

    public function menv()
    {
        return view('pages.public.menv');
    }

    public function commissies()
    {
        return view('pages.public.commissies');
    }

    public function statuten()
    {
        return view('pages.public.statuten');
    }

    public function hetbestuur()
    {
        return view('pages.public.hetbestuur');
    }

    public function disputen(){
        return view('pages.public.disputen.disputen');
    }

    public function oforkortat(){
        return view('pages.public.disputen.oforkortat');
    }

    public function inculminesolae(){
        return view('pages.public.disputen.in-culmine-solae');
    }

    public function congarbo(){
        return view('pages.public.disputen.con-garbo');
    }

    public function pulmentum(){
        return view('pages.public.disputen.pulmentum');
    }

    public function mistura(){
        return view('pages.public.disputen.mistura');
    }

    public function contact(){
        return view('pages.public.contact');
    }

    public function sponsoren(){
        return view('pages.public.sponsoren');
    }

    public function fotos(){
        return view('pages.public.fotos');
    }

    public function videos(){
        return view('pages.public.videos');
    }

    public function wintersport2013(){
        return view('pages.public.fotos.wintersport2013');
    }

    public function wintersport2014(){
        return view('pages.public.fotos.wintersport2014');
    }

    public function introductiekamp2013(){
        return view('pages.public.fotos.introductiekamp2013');
    }

    public function contactverstuurd(){
        return view('pages.public.verstuurd');
    }

    public function inschrijven(){
        return view('pages.public.inschrijven2');
    }

    public function agenda(){

        $events = \Cal::google()->events(/*$params = ['timeMin' => Carbon::now()->toRfc3339String()]*/$params = ['orderBy' => 'startTime','singleEvents' => 'true']);
        return view('pages.public.agenda',compact('events'));
    }

    public function sendmail(Request $request){
        $this->validate($request, [
            'email' => 'required|email',
            'name' => 'required',
            'message' => 'required',
            'g-recaptcha-response' => 'required|recaptcha',
        ]);

        Mail::raw($request->message, function ($message) use($request) {
            $message->from($request->email, $request->name);
            $message->sender($request->email, $request->name);
            $message->replyTo($request->email, $request->name);
            $message->to('secretaris@svforum.nl');
            $message->subject('Contact Formulier');
        });

        return redirect('/contact/verstuurd');
    }

    public function upload(Request $request)
    {

        $file = $request->file('file');

        $v = Validator::make(
            $request->all(),
            ['file' => 'required|mimes:jpeg,jpg,png|max:10000']
        );

        if($v->fails()) {
            return Response::json(['error' => $v->errors()]);
        }

        //Use some method to generate your filename here. Here we are just using the ID of the image
        $filename = 'forum'.uniqid('', true).'.'.$file->getClientOriginalExtension();

        //Push file to S3
        \Tinify\setKey(\Config::get('services.tinify.key'));
        $image = \Tinify\fromBuffer(file_get_contents($file))->resize(array('method' => 'fit', 'width' => 1920,'height' => 1080))->toBuffer();
        $move = Storage::disk('s3')->put('fotos/nieuws/' . $filename, $image);
        Storage::disk('s3')->setVisibility('fotos/nieuws/' . $filename, 'public');

        if($move){
            return Response::json(['filelink'=>'http://d1qut4a1r795dy.cloudfront.net/fotos/nieuws/'. $filename]);
        }else{
            return Response::json(['error'=>true]);
        }
    }

}
