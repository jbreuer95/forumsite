<?php

namespace Svforum\Http\Controllers;

use Auth;
use Illuminate\Http\Request;
use Response;
use Storage;
use Validator;

class AdminController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(){
        return view('pages.admin.index')->with('name', Auth::user()->name);
    }

    public function upload(Request $request)
    {

        $file = $request->file('file');
        \Log::info($file);

        $v = Validator::make(
            $request->all(),
            ['file' => 'required|mimes:jpeg,jpg,png|max:10000|image_size:>=600,>=315']
        );

        if($v->fails()) {
            return Response::json(['error' => $v->errors()]);
        }

        //Use some method to generate your filename here. Here we are just using the ID of the image
        $filename = 'forum'.uniqid('', true).'.'.$file->getClientOriginalExtension();

        //Push file to S3
        \Tinify\setKey(\Config::get('services.tinify.key'));
        $image = \Tinify\fromBuffer(file_get_contents($file))->resize(array('method' => 'cover','width' => 600,'height' => 315))->toBuffer();
        $imagethumb = \Tinify\fromBuffer(file_get_contents($file))->resize(array('method' => 'cover','width' => 75,'height' => 75))->toBuffer();
        $move = Storage::disk('s3')->put('fotos/nieuws/' . $filename, $image);
        $movethumb = Storage::disk('s3')->put('fotos/nieuws/thumbnails/' . $filename, $imagethumb);
        Storage::disk('s3')->setVisibility('fotos/nieuws/'.$filename, 'public');
        Storage::disk('s3')->setVisibility('fotos/nieuws/thumbnails/'.$filename, 'public');

        if($move && $movethumb){
            return Response::json(['file'=> ['filelink' => [$filename]]]);
        }else{
            return Response::json(['error'=>true]);
        }
    }
}
