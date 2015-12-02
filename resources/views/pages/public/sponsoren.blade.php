@extends('layouts.master')

@section('title')
    Forum - Partners en Sponsoren
@stop

@section('content')
    <div class="section-header" style="margin-bottom: 5px">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <!-- Remove the .animated class if you don't want things to move -->
                    <h1 class="animated slideInLeft"><span>Partners en Sponsoren</span></h1>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
            <hr>
            <p>
                Met trots bieden wij op deze pagina een overzicht van onze partners en sponsoren aan. S.v. Forum biedt een rijkelijk scala aan voordelen, om een gezonde samenwerking tot stand te laten komen.
                Mocht u ook interesse hebben om S.v. Forum te sponsoren of een andere samenwerking aan te gaan, neem dan contact op met Bas Degenhart, onze Commissaris Acquisitie & PR.<br/>
                E-mailadres: <a href="mailto:sponsoring@svforum.nl">sponsoring@svforum.nl</a><br/>
                Telefoon: 06-55684355<br/><br/>

                Klik op het logo om meer te weten te komen over onze partner of sponsor:

            </p>
        <hr>
        <div class="row list-inline gallery-list" id="isotope-container">
            <div class="col-sm-4 col-md-3 isotope-item cat-1 cat-2 cat-4">
                <div class="gallery__item">
                    <a href="http://demaartenshof.nl" target="_blank">
                        <div class="gallery-thumbnail">
                            {!! HTML::image('img/custom/demaartenshof.jpg','dispuut',array('class' => 'img-responsive','style' => 'height:175px;margin:auto')) !!}
                        </div>
                        <div class="gallery-text">
                            <div class="gallery-title">De Maartenshof</div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-sm-4 col-md-3 isotope-item cat-2 cat-4">
                <div class="gallery__item">
                    <a href="http://www.hu.nl" target="_blank">
                        <div class="gallery-thumbnail">
                            {!! HTML::image('img/custom/hu.jpg','dispuut',array('class' => 'img-responsive','style' => 'height:175px;margin:auto')) !!}
                        </div>
                        <div class="gallery-text">
                            <div class="gallery-title">Hogeschool Utrecht</div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-sm-4 col-md-3 isotope-item cat-3 cat-1">
                <div class="gallery__item">
                    <a href="http://www.thenextnetwork.com" target="_blank">
                        <div class="gallery-thumbnail">
                            {!! HTML::image('img/custom/x.jpg','dispuut',array('class' => 'img-responsive','style' => 'height:175px;margin:auto')) !!}
                        </div>
                        <div class="gallery-text">
                            <div class="gallery-title">The Next Network</div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-sm-4 col-md-3 isotope-item cat-2 cat-4">
                <div class="gallery__item">
                    <a href="http://uvis.nl" target="_blank">
                        <div class="gallery-thumbnail">
                            {!! HTML::image('img/custom/uvis.jpg','dispuut',array('class' => 'img-responsive','style' => 'height:175px;margin:auto')) !!}
                        </div>
                        <div class="gallery-text">
                            <div class="gallery-title">Studievereniging UVIS</div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-sm-4 col-md-3 isotope-item cat-3 cat-1">
                <div class="gallery__item">
                    <a href="http://buddygodutch.nl" target="_blank">
                        <div class="gallery-thumbnail">
                            {!! HTML::image('img/custom/buddygodutch.jpg','dispuut',array('class' => 'img-responsive','style' => 'height:175px;margin:auto')) !!}
                        </div>
                        <div class="gallery-text">
                            <div class="gallery-title">Buddy Go Dutch</div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="col-sm-4 col-md-3 isotope-item cat-3 cat-1">
                <div class="gallery__item">
                    <a href="http://www.joho.org/nl" target="_blank">
                        <div class="gallery-thumbnail">
                            {!! HTML::image('img/custom/Joho.jpg','Joho',array('class' => 'img-responsive','style' => 'height:175px;margin:auto')) !!}
                        </div>
                        <div class="gallery-text">
                            <div class="gallery-title">JoHo</div>
                        </div>
                    </a>
                </div>
            </div>

        </div>
        <!-- / .row -->
    </div> <!-- / .container -->
@stop