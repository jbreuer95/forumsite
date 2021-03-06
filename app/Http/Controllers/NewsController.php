<?php

namespace Svforum\Http\Controllers;

use Svforum\Http\Requests;
use Svforum\Http\Requests\NewsRequest;
use Svforum\News;
use Illuminate\Http\Response;

class NewsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $news = News::latest()->get();
        return view('pages.admin.news.index', compact('news'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        return view('pages.admin.news.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param NewsRequest $request
     * @return Response
     */
    public function store(NewsRequest $request)
    {
        News::create($request->all());
        \Flash::success('Nieuwsartikel gepubliceerd');
        return redirect('admin/news');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        $news = News::findOrFail($id);
        return view('pages.admin.news.edit')->with('news',$news);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param NewsRequest $request
     * @param  int $id
     * @return Response
     */
    public function update(NewsRequest $request, $id)
    {
        $news = News::findOrFail($id);
        $news->update($request->all());
        \Flash::success('Nieuwsartikel aangepast');
        return redirect('admin/news');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        $news = News::findOrFail($id);
        $news->delete();
        \Flash::success('Nieuwsartikel verwijderd');
        return redirect('admin/news');
    }
}
