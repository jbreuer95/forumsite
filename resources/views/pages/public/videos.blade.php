@extends('layouts.master')

@section('title')
    Forum - Video's
@stop

@section('content')
    <div class="section-header" style="margin-bottom: 5px">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <!-- Remove the .animated class if you don't want things to move -->
                    <h1 class="animated slideInLeft"><span>Video's</span></h1>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <hr>
            <p>
                Bekijk hieronder de video’s van de evenementen.<br />
                Deze video’s geven een duidelijk beeld van de evenementen en activiteiten van S.v. Forum.<br />
                Klik op het album om naar het juiste evenement te gaan.
            </p>
        <hr>
        <div class="row gallery-list gallery-list-bubbles" id="isotope-container">
            <div class="col-sm-4 col-md-3 isotope-item cat-1 cat-2 cat-4">
                <div class="gallery__item">
                    <a class="swipebox-video" rel="youtube" href="https://www.youtube.com/watch?v=0HM3TtFm2-E">
                        <div class="gallery-thumbnail">
                            {!! HTML::image('img/custom/introductiekamp2013.jpg','...',array('class' => 'img-responsive')) !!}
                        </div>
                        <div class="gallery-bubble">
                            <div class="pull-left">Intro FEM 2013</div>
                            <div class="clearfix"></div>
                        </div>
                    </a>
                </div> <!-- / .gallery__item -->
            </div>

            <div class="col-sm-4 col-md-3 isotope-item cat-2 cat-4">
                <div class="gallery__item">
                    <a class="swipebox-video" rel="youtube" href="https://www.youtube.com/watch?v=GcJWnsLy9HM">
                        <div class="gallery-thumbnail">
                            {!! HTML::image('img/custom/introductiekamp2012.jpg','...',array('class' => 'img-responsive')) !!}
                        </div>
                        <div class="gallery-bubble">
                            <div class="pull-left">Intro FEM 2012</div>
                            <div class="clearfix"></div>
                        </div>
                    </a>
                </div> <!-- / .gallery__item -->
            </div>
        </div>
    </div>
@stop

@section('js')
    <script type="text/javascript">
        (function ($) {
            $( '.swipebox-video' ).swipebox();
        } )( jQuery );
    </script>
@stop