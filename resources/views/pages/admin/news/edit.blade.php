@extends('layouts.admin.mastermenu')

@section('mtitle')
    Forum - Nieuwsberichten
@stop

@section('mcontent')
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Nieuwsbericht Aanpassen</h1>
            </div>
        </div>
        <div class="row">
            {!! Form::model($news, ['method' => 'PATCH', 'action' => ['NewsController@update', $news->id]]) !!}
            {!! Form::hidden('id', $news->id) !!}
                @include('includes.admin.newsform',['submitButtonText' => 'Aanpassen'])
            {!! Form::close() !!}
        </div>
    </div>
@stop

@section('mjs')
    @include('includes.admin.fileupload', ['img_thumb' => 'img-thumb', 'picture' => 'pictureurl', 'thumbnail' => 'thumbnailurl', 'link' => '/admin/edit/upload'])
    @include('includes.admin.redactor')
    @include('includes.admin.slugify', ['slug' => 'slug', 'title' => 'title'])
@stop