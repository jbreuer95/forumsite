<?php

namespace Forum\Http\Controllers;

use Illuminate\Http\Request;
use Mail;

class PublicController extends Controller {


	public function index()
	{
		return view('pages.public.index');
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

    public function news()
    {
        return view('pages.public.news');
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


}
