@extends('layouts.master')

@section('title')
    Forum - Vacatures
@stop

@section('content')
    <div class="section-header" style="margin-bottom: 25px;">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <!-- Remove the .animated class if you don't want things to move -->
                    <h1 class="animated slideInLeft"><span>{{ $vacancy->title }}</span></h1>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col">
                <h2 class="forum" style="margin-top: 10px">De vacature</h2>
                {!! $vacancy->body !!}
            </div>
            <div class="col-md-4">
                {!! HTML::image($vacancy->picture, $vacancy->title,['class' => 'img-responsive center-block']) !!}
            </div>
        </div>
    </div>
@stop