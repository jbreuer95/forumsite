@extends('layouts.admin.mastermenu')

@section('mtitle')
    Forum - Nieuwsberichten
@stop

@section('mcontent')
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Nieuwsbericht Toevoegen</h1>
            </div>
        </div>
        <div class="row">
            {!! Form::open(['url' => 'admin/news']) !!}
            @include('includes.admin.newsform',['submitButtonText' => 'Opslaan'])
            {!! Form::close() !!}
        </div>
    </div>
@stop

@section('mjs')
    @include('includes.admin.fileupload', ['type' => 'POST', 'img_thumb' => 'img-thumb', 'picture' => 'pictureurl', 'thumbnail' => 'thumbnailurl', 'link' => '/admin/upload'])
    @include('includes.admin.redactor')
    @include('includes.admin.slugify', ['slug' => 'slug', 'title' => 'title'])
@stop