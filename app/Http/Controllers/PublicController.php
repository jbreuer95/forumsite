<?php

namespace Forum\Http\Controllers;

class PublicController extends Controller {

	public function __construct()
    {
		$this->middleware('guest');
	}

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

}
