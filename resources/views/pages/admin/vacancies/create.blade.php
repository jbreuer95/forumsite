@extends('layouts.admin.mastermenu')

@section('mtitle')
    Forum - Vacatures
@stop

@section('mcontent')
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Vacature Toevoegen</h1>
            </div>
        </div>
        <div class="row">
            {!! Form::open(['url' => 'admin/vacancies']) !!}
            @include('includes.admin.vacancyform',['submitButtonText' => 'Opslaan'])
            {!! Form::close() !!}
        </div>
    </div>
@stop

@section('mjs')
    @include('includes.admin.fileupload', ['type' => 'POST', 'img_thumb' => 'img-thumb', 'picture' => 'picture', 'thumbnail' => 'thumbnail', 'link' => '/admin/upload'])
    @include('includes.admin.redactor')
    @include('includes.admin.slugify', ['slug' => 'slug', 'title' => 'title'])
@stop.