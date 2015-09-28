@extends('layouts.master')

@section('title')
    Forum - Foto's
@stop

@section('content')
    <div class="section-header">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <!-- Remove the .animated class if you don't want things to move -->
                    <h1 class="animated slideInLeft"><span>Foto's</span></h1>
                </div>
            </div>
        </div>
    </div> <!-- / .section-header -->

    <div class="container">
        <div class="row gallery-list gallery-list-bubbles" id="isotope-container">
            <div class="col-sm-4 col-md-3 isotope-item cat-1 cat-2 cat-4">
                <div class="gallery__item">
                    <a href="{{ action('PublicController@wintersport2014') }}">
                        <div class="gallery-thumbnail">
                            {!! HTML::image('img/custom/wintersport2014.jpg','...',array('class' => 'img-responsive')) !!}
                        </div>
                        <div class="gallery-bubble">
                            <div class="pull-left">Wintersport 2014</div>
                            <div class="clearfix"></div>
                        </div>
                    </a>
                </div> <!-- / .gallery__item -->
            </div>

            <div class="col-sm-4 col-md-3 isotope-item cat-2 cat-4">
                <div class="gallery__item">
                    <a href="{{ action('PublicController@introductiekamp2013') }}">
                        <div class="gallery-thumbnail">
                            {!! HTML::image('img/custom/introductiekamp2013.jpg','...',array('class' => 'img-responsive')) !!}
                        </div>
                        <div class="gallery-bubble">
                            <div class="pull-left">Introductiekamp 2013</div>
                            <div class="clearfix"></div>
                        </div>
                    </a>
                </div> <!-- / .gallery__item -->
            </div>

            <div class="col-sm-4 col-md-3 isotope-item cat-3 cat-1">
                <div class="gallery__item">
                    <a href="{{ action('PublicController@wintersport2013') }}">
                        <div class="gallery-thumbnail">
                            {!! HTML::image('img/custom/wintersport2013.jpg','...',array('class' => 'img-responsive')) !!}
                        </div>
                        <div class="gallery-bubble">
                            <div class="pull-left">Wintersport 2013</div>
                            <div class="clearfix"></div>
                        </div>
                    </a>
                </div> <!-- / .gallery__item -->
            </div>
        </div> <!-- / .row -->
    </div> <!-- / .container -->
@stop