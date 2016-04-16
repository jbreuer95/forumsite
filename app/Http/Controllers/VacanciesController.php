<?php

namespace Svforum\Http\Controllers;

use Svforum\Http\Requests;
use Svforum\Http\Requests\VacanciesRequest;
use Svforum\Vacancy;

class VacanciesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $vacancies = Vacancy::all();
        return view('pages.admin.vacancies.index', compact('vacancies'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('pages.admin.vacancies.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param VacanciesRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(VacanciesRequest $request)
    {
        Vacancy::create($request->all());
        \Flash::success('Vacature gepubliceerd');
        return redirect('admin/vacancies');
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $vacancy = Vacancy::findOrFail($id);
        return view('pages.public.vacature', compact('vacancy'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $vacancy = Vacancy::findOrFail($id);
        return view('pages.admin.vacancies.edit', compact('vacancy'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param VacanciesRequest $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(VacanciesRequest $request, $id)
    {
        $vacancy = Vacancy::findOrFail($id);
        $vacancy->update($request->all());
        \Flash::success('Vacature aangepast');
        return redirect('admin/vacancies');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $vacancy = Vacancy::findOrFail($id);
        $vacancy->delete();
        \Flash::success('Vacature verwijderd');
        return redirect('admin/vacancies');

    }
}
