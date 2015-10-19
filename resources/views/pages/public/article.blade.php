@extends('layouts.master')

@section('title')
    Forum - Artikel
@stop

@section('css')
    <meta property="og:title"
          content="@if($article){{$article->title}}@endif" />
    <meta property="og:description" content="@if($article){{strip_tags($article->body)}}@endif" />
@stop


@section('content')
        <div class="section-header">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <!-- Remove the .animated class if you don't want things to move -->
                        <h1 class="animated slideInLeft"><span>Artikel</span></h1>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-sm-7">
                    <!-- Blog Post -->
                    @if($article)
                        <h4>{{ $article->title }}</h4>
                        <ul class="text-muted list-inline">
                            <li><i class="fa fa-calendar"></i> {!! Carbon\Carbon::parse($article->created_at)->diffForHumans() !!}</li>
                        </ul>
                        <hr>
                        <p class="blog-text">

                            {!! $article->body !!}
                        </p>
                    @else
                        <h2 class="post-title">Dit artikel bestaat niet (meer)</h2>
                    @endif
                </div>
                <div class="col-sm-4 col-sm-offset-1">
                    @if($article)
                        <img class="pull-right img-responsive blog-img" style="width: 100%" alt="..." src="{{ $article->pictureurl }}">
                    @endif
                </div>
            </div>
        </div>

@stop

