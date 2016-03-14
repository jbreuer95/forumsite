@extends('layouts.admin.mastermenu')

@section('mtitle')
    Forum - Vacatures
@stop

@section('mcontent')
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Vacature Aanpassen</h1>
            </div>
        </div>
        <div class="row">
            {!! Form::model($vacancy, ['method' => 'PATCH', 'action' => ['VacanciesController@update', $vacancy->id]]) !!}
            {!! Form::hidden('id', $vacancy->id) !!}
                @include('includes.admin.vacancyform',['submitButtonText' => 'Aanpassen'])
            {!! Form::close() !!}
        </div>
    </div>
@stop

@section('mjs')
    @include('includes.admin.fileupload', ['img_thumb' => 'img-thumb', 'picture' => 'picture', 'thumbnail' => 'thumbnail', 'link' => '/admin/edit/upload'])
    @include('includes.admin.redactor')
    @include('includes.admin.slugify', ['slug' => 'slug', 'title' => 'title'])
@stop