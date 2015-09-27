@extends('layouts.master')

@section('title')
    Forum - Statuten
@stop

@section('content')
    <div class="section-header" style="margin-bottom: 25px;">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <!-- Remove the .animated class if you don't want things to move -->
                    <h1 class="animated slideInLeft"><span>Statuten</span></h1>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col">
                <h2 class="forum" style="margin-top: 10px">Statuten Studievereniging Forum</h2>
                <p>
                    Door op de ondestaande link te klikken zijn de statuten van S.v. Forum te vinden.
                </p>
                <p>
                    {!! HTML::link('licenses/Statuten.pdf','Statuten Studievereniging Forum',array('target' => '_blank')) !!}
                </p>
            </div>
            <div class="col-md-4">
                <div class="block-header">
                    <h2 style="margin-top: 10px">
                        <span class="title">Laatste Nieuws</span><span class="decoration"></span><span class="decoration"></span><span class="decoration"></span>
                    </h2>
                </div>
                <div class="tab-content">
                    <div class="media">
                        <a class="pull-left" href="#">
                            {!! HTML::image('img/blog-1.jpg','Blog Message',array('class' => 'media-object')) !!}
                        </a>
                        <div class="media-body">
                            <h4 class="media-heading"><a href="#">Story title</a></h4>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id ipsum varius, tincidunt odio nec, placerat enim.
                        </div>
                    </div>
                    <div class="media">
                        <a class="pull-left" href="#">
                            {!! HTML::image('img/blog-2.jpg','Blog Message',array('class' => 'media-object')) !!}
                        </a>
                        <div class="media-body">
                            <h4 class="media-heading"><a href="#">Story title</a></h4>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id ipsum varius, tincidunt odio nec, placerat enim.
                        </div>
                    </div>
                    <div class="media">
                        <a class="pull-left" href="#">
                            {!! HTML::image('img/blog-3.jpg','Blog Message',array('class' => 'media-object')) !!}
                        </a>
                        <div class="media-body">
                            <h4 class="media-heading"><a href="#">Story title</a></h4>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id ipsum varius, tincidunt odio nec, placerat enim.
                        </div>
                    </div>
                    <a href="#" class="read-more">Read more stories...</a>
                </div>
            </div>
        </div>
    </div>
@stop