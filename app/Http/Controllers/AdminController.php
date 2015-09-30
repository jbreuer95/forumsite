<?php

namespace Forum\Http\Controllers;

use Auth;
use Forum\Http\Requests;

class AdminController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(){
        return view('pages.admin.index')->with('name', Auth::user()->name);
    }
}
