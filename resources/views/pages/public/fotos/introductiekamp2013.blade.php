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
                    <h1 class="animated slideInLeft"><span>Introductiekamp 2013</span></h1>
                </div>
            </div>
        </div>
    </div> <!-- / .section-header -->

    <div class="container">
        <div class="row gallery-list gallery-list-bubbles" id="isotope-container">
            <div class="col-sm-4 col-md-3 isotope-item cat-1 cat-2 cat-4">
                <div class="gallery__item">
                    <a href="http://svforum.s3.eu-central-1.amazonaws.com/fotos/introductiekamp2013/1.jpg" class="swipebox" title="Introductiekamp 2013">
                        <div class="gallery-thumbnail">
                            {!! HTML::image('http://svforum.s3.eu-central-1.amazonaws.com/fotos/introductiekamp2013/thumbnails/1.jpg','...',array('class' => 'img-responsive')) !!}
                        </div>
                        <div class="gallery-bubble">
                            <div class="pull-left">Introductiekamp 2013</div>
                            <div class="clearfix"></div>
                        </div>
                    </a>
                </div> <!-- / .gallery__item -->
            </div>

            <div class="col-sm-4 col-md-3 isotope-item cat-2 cat-4">
                <div class="gallery__item">
                    <a href="http://svforum.s3.eu-central-1.amazonaws.com/fotos/introductiekamp2013/2.jpg" class="swipebox" title="Introductiekamp 2013">
                        <div class="gallery-thumbnail">
                            {!! HTML::image('http://svforum.s3.eu-central-1.amazonaws.com/fotos/introductiekamp2013/thumbnails/2.jpg','...',array('class' => 'img-responsive')) !!}
                        </div>
                        <div class="gallery-bubble">
                            <div class="pull-left">Introductiekamp 2014</div>
                            <div class="clearfix"></div>
                        </div>
                    </a>
                </div> <!-- / .gallery__item -->
            </div>

            <div class="col-sm-4 col-md-3 isotope-item cat-3 cat-1">
                <div class="gallery__item">
                    <a href="http://svforum.s3.eu-central-1.amazonaws.com/fotos/introductiekamp2013/3.jpg" class="swipebox" title="Introductiekamp 2013">
                        <div class="gallery-thumbnail">
                            {!! HTML::image('http://svforum.s3.eu-central-1.amazonaws.com/fotos/introductiekamp2013/thumbnails/3.jpg','...',array('class' => 'img-responsive')) !!}
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
                    <a href="http://svforum.s3.eu-central-1.amazonaws.com/fotos/introductiekamp2013/4.jpg" class="swipebox" title="Introductiekamp 2013">
                        <div class="gallery-thumbnail">
                            {!! HTML::image('http://svforum.s3.eu-central-1.amazonaws.com/fotos/introductiekamp2013/thumbnails/4.jpg','...',array('class' => 'img-responsive')) !!}
                        </div>
                        <div class="gallery-bubble">
                            <div class="pull-left">Introductiekamp 2013</div>
                            <div class="clearfix"></div>
                        </div>
                    </a>
                </div> <!-- / .gallery__item -->
            </div>
        </div> <!-- / .row -->
    </div> <!-- / .container -->
@stop

@section('js')
    <script type="text/javascript">
        (function ($) {
            $( '.swipebox' ).swipebox();
        } )( jQuery );
    </script>
@stop