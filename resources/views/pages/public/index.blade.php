@extends('layouts.master')

@section('title')
    Forum
    @stop

    @section('content')
            <!-- Showcase
      ================ -->
    <div id="hp-slider" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        {{--<ol class="carousel-indicators">
            <li data-target="#hp-slider" data-slide-to="0" class="active"></li>
            <li data-target="#hp-slider" data-slide-to="1"></li>
        </ol>--}}

        <!-- Wrapper for slides -->
        {{--<div class="carousel-inner">
            <!-- Slider #1 -->
            <div class="item active">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="macbook">
                                {!! HTML::image('img/custom/slider1.jpg','...',array('class' => 'img-responsive')) !!}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Slider #2 -->
            <div class="item">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="macbook">
                                {!! HTML::image('img/macbook.png','...',array('class' => 'img-responsive')) !!}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>--}}

        <!-- Controls -->
{{--        <a class="carousel-arrow carousel-arrow-prev" href="#hp-slider" data-slide="prev">
            <i class="fa fa-angle-left"></i>
        </a>
        <a class="carousel-arrow carousel-arrow-next" href="#hp-slider" data-slide="next">
            <i class="fa fa-angle-right"></i>
        </a>--}}
    </div>
    <!-- / .hp-showcase -->
    <div class="container">
        <!-- Services
         ================ -->
        <div class="row">
            <div class="col-md-12">

                <div class="services">
                    <div class="services__item">
                        <div class="services-item__body">
                            <i class="services-item__icon fa fa-briefcase fa-3x"></i>
                            <div class="services-item__content">
                                <p class="services-item__caption">Agenda</p>
                                <a class="services-item__link" href="/agenda">Ga naar</a>
                            </div>
                        </div>
                    </div>
                    <div class="services__item">
                        <div class="services-item__body">
                            <i class="services-item__icon fa fa-cloud-upload fa-3x"></i>

                            <div class="services-item__content">
                                <p class="services-item__caption">Commissies</p>
                                <a class="services-item__link" href="/commissies">Ga naar</a>
                            </div>
                        </div>
                    </div>
                    <div class="services__item">
                        <div class="services-item__body">
                            <i class="services-item__icon fa fa-laptop fa-3x"></i>

                            <div class="services-item__content">
                                <p class="services-item__caption">Nieuws</p>
                                <a class="services-item__link" href="/nieuws">Ga naar</a>
                            </div>
                        </div>
                    </div>
                    <div class="services__item">
                        <div class="services-item__body">
                            <i class="services-item__icon fa fa-gears fa-3x"></i>

                            <div class="services-item__content">
                                <p class="services-item__caption">Disputen</p>
                                <a class="services-item__link" href="/disputen">Ga naar</a>
                            </div>
                        </div>
                    </div>
                    <div class="services__item">
                        <div class="services-item__body">
                            <i class="services-item__icon fa fa-compass fa-3x"></i>

                            <div class="services-item__content">
                                <p class="services-item__caption">Foto's</p>
                                <a class="services-item__link" href="/fotos">Ga naar</a>
                            </div>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <!-- / .services -->

            </div>
        </div>
        <!-- / row -->
        <div class="row">
            <!-- Welcome message
                ================= -->
            <div class="col-md-8">
                <div class="block-header">
                    <h2>
                        <span class="title">Welkom op de website van Forum</span><span
                                class="decoration"></span><span class="decoration"></span><span
                                class="decoration"></span>
                    </h2>
                </div>
                <div class="info-board info-board-blue">
                    <p>{!! HTML::link('/inschrijven', 'Schrijf je nu gratis in') !!} en word lid van d&eacute; studievereniging van de FEM! En like ons op
                        {!! HTML::link('https://www.facebook.com/studieverenigingforum', 'Facebook!',['target' => '_blank']) !!}</p>
                </div>
                {!! HTML::image('img/custom/logofront.png','Logo FORUM',array('class' => 'img-about img-responsive')) !!}
                <p>
                    S.v Forum faciliteert een optimale combinatie tussen gezelligheid en studiesucces. Dit doen we door middel
                    van het organiseren van (netwerk)borrels, (thema)feesten, karaoke avonden, en vele andere
                    activiteiten. Daarnaast gaan we ook elk jaar met een leuke groep op wintersport en organiseren we
                    het inmiddels befaamde introductiekamp voor eerstejaars studenten.
                </p>
                <p>
                    Ook leggen wij de focus op vele verschillende studie-activiteiten, waaronder bedrijfsbezoeken,
                    workshops, lezingen, en grote evenementen als symposia, Utrecht College Tour sessies, en het
                    jaarlijks terugkerende Junior Marketing Congres. Om ervoor te zorgen dat onze leden het maximale uit
                    hun studie op de FEM kunnen halen, helpen we ze natuurlijk ook met al hun vragen, klachten, en
                    problemen, zodat ze zich compleet op hun studie kunnen focussen.
                </p>
                <p>
                    Een lidmaatschap bij S.v. Forum is vrijblijvend en geheel gratis, omdat we door een goed financieel
                    beleid en een nauwe samenwerking met sponsoren alle activiteiten kunnen bekostigen. Hierdoor kunnen
                    onze leden gratis gebruik maken van alle extra's die S.v. Forum biedt.
                </p>
                <p>
                    Naast een gewoon lidmaatschap kan je ook lid zijn van een van onze disputen. Dit zijn verticale
                    dames- en herengenootschappen, hechte vriendengroepen die samen veel leuke dingen doen. Lees
                    hierover meer onder het kopje disputen.
                </p>
            </div>
            <!-- Last updated
                ================== -->
            @include('includes.latestnews')
        </div>
    </div>
@stop
