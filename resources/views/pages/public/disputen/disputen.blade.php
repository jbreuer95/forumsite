@extends('layouts.master')

@section('title')
    Forum - Disputen
@stop

@section('content')
    <div class="section-header" style="margin-bottom: 5px">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <!-- Remove the .animated class if you don't want things to move -->
                    <h1 class="animated slideInLeft"><span>Disputen</span></h1>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
            <hr>
            <p>Vol trots kan S.v. Forum zeggen dat er vijf disputen bij de vereniging zijn aangesloten. Twee
                heerendisputen, twee damesdisputen en &eacute;&eacute;n gemengd dispuut.
                Klik op het logo om meer te weten te komen over de disputen van S.v. Forum:
            </p>
        <hr>
        <div class="row list-inline gallery-list" id="isotope-container">
            <div class="col-sm-4 col-md-3 isotope-item cat-1 cat-2 cat-4">
                <div class="gallery__item">
                    <a href="{{ action('PublicController@oforkortat') }}">
                        <div class="gallery-thumbnail">
                            {!! HTML::image('img/custom/dispuut1.png','dispuut',array('class' => 'img-responsive','style' => 'height:175px;margin:auto')) !!}
                        </div>
                        <div class="gallery-text">
                            <div class="gallery-title">Heerendispuut OFORKORTAT</div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-sm-4 col-md-3 isotope-item cat-2 cat-4">
                <div class="gallery__item">
                    <a href="{{ action('PublicController@inculminesolae') }}">
                        <div class="gallery-thumbnail">
                            {!! HTML::image('img/custom/dispuut2-1.jpg','dispuut',array('class' => 'img-responsive','style' => 'height:175px;margin:auto')) !!}
                        </div>
                        <div class="gallery-text">
                            <div class="gallery-title">Damesdispuut In Culmine Solae</div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-sm-4 col-md-3 isotope-item cat-3 cat-1">
                <div class="gallery__item">
                    <a href="{{ action('PublicController@congarbo') }}">
                        <div class="gallery-thumbnail">
                            {!! HTML::image('img/custom/dispuut3.jpg','dispuut',array('class' => 'img-responsive','style' => 'height:175px;margin:auto')) !!}
                        </div>
                        <div class="gallery-text">
                            <div class="gallery-title">Damesdispuut Con Garbo</div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-sm-4 col-md-3 isotope-item cat-2 cat-4">
                <div class="gallery__item">
                    <a href="{{ action('PublicController@pulmentum') }}">
                        <div class="gallery-thumbnail">
                            {!! HTML::image('img/custom/dispuut4.jpg','dispuut',array('class' => 'img-responsive','style' => 'height:175px;margin:auto')) !!}
                        </div>
                        <div class="gallery-text">
                            <div class="gallery-title">Heerendispuut Pulmentum</div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-sm-4 col-md-3 isotope-item cat-3 cat-1">
                <div class="gallery__item">
                    <a href="{{ action('PublicController@mistura') }}">
                        <div class="gallery-thumbnail">
                            {!! HTML::image('img/custom/dispuut5.jpg','dispuut',array('class' => 'img-responsive','style' => 'height:175px;margin:auto')) !!}
                        </div>
                        <div class="gallery-text">
                            <div class="gallery-title">Dispuut Mistura</div>
                        </div>
                    </a>
                </div>
            </div>

        </div>
        <!-- / .row -->
    </div> <!-- / .container -->
@stop