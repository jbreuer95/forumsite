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
            <div class="col-sm-8">
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
                        <p class="blog-text" style="min-height: 150px">
                            <img class="pull-right img-responsive blog-img" alt="Blog Image" src="{{$article->pictureurl}}">
                            {!! Str::words(strip_tags($article->body), 55, '...') !!}
                        </p>
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
                <div class="text-center">
                    <ul class="pagination">
                        <li @if($page == 1)class="disabled"@endif><a @if($page != 1)href="{{action('PublicController@news', [$page - 1])}}"@endif><i class="fa fa-caret-left fa-lg"></i></a></li>
                        @for($i = 1; $i <= $pages; $i++ )
                            <li @if($i == $page)class="active"@endif><a href="{{action('PublicController@news', [$i])}}">{{ $i }}</a></li>
                        @endfor
                        <li @if($page == $pages)class="disabled"@endif><a @if($page != $pages)href="{{action('PublicController@news', [$page + 1])}}"@endif><i class="fa fa-caret-right fa-lg"></i></a></li>
                    </ul>
                </div>
                <section>

                </section>
            </div>
            <div class="col-sm-4">
                <!-- Out Address -->
                <h4>Ons adres</h4>
                <hr>
                <p>
                    Daltonlaan 500, Kamer 3.19,<br />
                    3584 BK Utrecht<br />
                    Telefoon: +31 (0) 88 48 16 347<br />
                    Email: <a href="mailto:secretaris@svforum.nl">secretaris@svforum.nl</a><br />
                    Voor zakelijk contact: <a href="mailto:sponsoring@svforum.nl">sponsoring@svforum.nl</a><br />
                    Facebook: <a href="https://www.facebook.com/studieverenigingforum" target="_blank"><em>LIKE</em> ons op Facebook!</a><br />
                </p>
                <hr>
                <!-- Google Maps -->
                <h4>Google Maps</h4>
                <hr>
                <div style="text-decoration:none; overflow:hidden; height:300px; width:350px; max-width:100%;"><div id="gmap_canvas" style="height:100%; width:100%;max-width:100%;"><iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Daltonlaan+500,+Utrecht,+Nederland&key=AIzaSyAN0om9mFmy1QN6Wf54tXAowK4eT0ZUPrU"></iframe></div><a class="embed-map-code" href="https://www.bootstrapskins.com" id="enable-map-info">bootstrap-based designers</a><style scoped></style></div>
            </div>
        </div>
    </div>
@stop

