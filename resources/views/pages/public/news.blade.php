@extends('layouts.master')

@section('title')
    Forum - Nieuws
@stop

@section('content')
    <div class="section-header">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <!-- Remove the .animated class if you don't want things to move -->
                    <h1 class="animated slideInLeft"><span>Nieuws</span></h1>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
                <div class="timeline-block">
                    <!-- First blog post -->
                    @if(count($news) != 0)
                        @foreach($news as $key=>$article)
                    <div class="blog-summary">
                        <h4 @if($key == 0) class="new-story" @endif><a href="{{action('PublicController@article', [$article->slug])}}">{{$article->title}}</a></h4>
                        <time datetime="2013-11-10" class="timestamp hidden-xs">{!! Carbon\Carbon::parse($article->created_at)->toFormattedDateString() !!}</time>
                        <ul class="text-muted list-inline">
                            <li><i class="fa fa-calendar"></i> {!! Carbon\Carbon::parse($article->created_at)->diffForHumans() !!}</li>
                        </ul>
                        <hr>
                        <div style="max-height: 200px;overflow-y: hidden">
                            {{--<img class="pull-right img-responsive blog-img" alt="Blog Image" src="{{$article->pictureurl}}">--}}
                            {!! $article->body !!}
                        </div>
                        <div>
                            <img class="pull-right img-responsive blog-img" alt="Blog Image" src="{{$article->pictureurl}}">
                        </div>
                        <hr>
                            <a href="{{action('PublicController@article', [$article->slug])}}" style="text-align: right"><p>Lees meer <i class="fa fa-forward"></i></p> </a>
                        <hr>
                    </div>
                        @endforeach
                    @else
                        <p>Er zijn op dit moment geen nieuws artikelen</p><br /><br />
                    @endif
                </div>
                <!-- Pagination -->
                @if(count($news) != 0)
                <div class="text-center">
                    <ul class="pagination">
                        <li @if($page == 1)class="disabled"@endif><a @if($page != 1)href="{{action('PublicController@news', [$page - 1])}}"@endif><i class="fa fa-caret-left fa-lg"></i></a></li>
                        @for($i = 1; $i <= $pages; $i++ )
                            <li @if($i == $page)class="active"@endif><a href="{{action('PublicController@news', [$i])}}">{{ $i }}</a></li>
                        @endfor
                        <li @if($page == $pages)class="disabled"@endif><a @if($page != $pages)href="{{action('PublicController@news', [$page + 1])}}"@endif><i class="fa fa-caret-right fa-lg"></i></a></li>
                    </ul>
                </div>
                @endif
                <section>

                </section>
        </div>
    </div>
@stop

