@extends('layouts.master')

@section('title')
    Forum
    @stop

    @section('content')
            <!-- Showcase
      ================ -->
    <div id="hp-slider" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
            <li data-target="#hp-slider" data-slide-to="0" class="active"></li>
            <li data-target="#hp-slider" data-slide-to="1"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner">
            <!-- Slider #1 -->
            <div class="item active">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-12">
                            <h1 class="animated slideInDown">The Highland Template</h1>

                            <div class="list">
                                <ul>
                                    <li class="animated slideInLeft first delay"><span><i class="fa fa fa-code"></i> Built with Bootstrap 3.</span>
                                    </li>
                                    <li class="animated slideInLeft second delay"><span><i class="fa fa-cogs"></i> Easy to Customize.</span>
                                    </li>
                                    <li class="animated slideInLeft third delay"><span><i class="fa fa-tablet"></i> Fully Responsive.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6 hidden-sm hidden-xs">
                            <div class="showcase">
                                {!! HTML::image('img/iMac.png','...',array('class' => 'iMac animated fadeInDown')) !!}
                                {!! HTML::image('img/iPad.png','...',array('class' => 'iPad animated fadeInLeft')) !!}
                                {!! HTML::image('img/iPhone.png','...',array('class' => 'iPhone animated fadeInRight')) !!}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Slider #2 -->
            <div class="item">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-12">
                            <h1 class="animated slideInDown">Ready-to-go Solutions</h1>

                            <div class="list">
                                <ul>
                                    <li class="animated slideInLeft first delay"><span><i class="fa fa-dropbox"></i> Works Out Of the Box.</span>
                                    </li>
                                    <li class="animated slideInLeft second delay"><span><i class="fa fa-picture-o"></i> New Isotope Gallery.</span>
                                    </li>
                                    <li class="animated slideInLeft third delay"><span><i class="fa fa-book"></i> Complete Documentation.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6 hidden-sm hidden-xs">
                            <div class="macbook">
                                {!! HTML::image('img/macbook.png','...',array('class' => 'img-responsive')) !!}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Controls -->
        <a class="carousel-arrow carousel-arrow-prev" href="#hp-slider" data-slide="prev">
            <i class="fa fa-angle-left"></i>
        </a>
        <a class="carousel-arrow carousel-arrow-next" href="#hp-slider" data-slide="next">
            <i class="fa fa-angle-right"></i>
        </a>
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
                                <p class="services-item__caption">Lorem ipsum dolor sit amet</p>
                                <a class="services-item__link" href="#">Action...</a>
                            </div>
                        </div>
                    </div>
                    <div class="services__item">
                        <div class="services-item__body">
                            <i class="services-item__icon fa fa-cloud-upload fa-3x"></i>

                            <div class="services-item__content">
                                <p class="services-item__caption">Lorem ipsum dolor sit amet</p>
                                <a class="services-item__link" href="#">Action...</a>
                            </div>
                        </div>
                    </div>
                    <div class="services__item">
                        <div class="services-item__body">
                            <i class="services-item__icon fa fa-laptop fa-3x"></i>

                            <div class="services-item__content">
                                <p class="services-item__caption">Lorem ipsum dolor sit amet</p>
                                <a class="services-item__link" href="#">Action...</a>
                            </div>
                        </div>
                    </div>
                    <div class="services__item">
                        <div class="services-item__body">
                            <i class="services-item__icon fa fa-gears fa-3x"></i>

                            <div class="services-item__content">
                                <p class="services-item__caption">Lorem ipsum dolor sit amet</p>
                                <a class="services-item__link" href="#">Action...</a>
                            </div>
                        </div>
                    </div>
                    <div class="services__item">
                        <div class="services-item__body">
                            <i class="services-item__icon fa fa-compass fa-3x"></i>

                            <div class="services-item__content">
                                <p class="services-item__caption">Lorem ipsum dolor sit amet</p>
                                <a class="services-item__link" href="#">Action...</a>
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
                        <span class="title">Welkom op de website van S.v. Forum</span><span
                                class="decoration"></span><span class="decoration"></span><span
                                class="decoration"></span>
                    </h2>
                </div>
                {!! HTML::image('img/custom/logofront.png','Logo FORUM',array('class' => 'img-about img-responsive')) !!}
                <p>
                    S.v. Forum is d&eacute; studievereniging van de Faculteit Economie & Management (FEM).
                </p>
                <p>
                    We faciliteren een optimale combinatie tussen gezelligheid en studiesucces. Dit doen we door middel
                    van het organiseren van (netwerk)borrels, (thema)feesten, karaoke avonden, en vele andere
                    activiteiten. Daarnaast gaan we ook elk jaar met een leuke groep op wintersport en organiseren we
                    het inmiddels befaamde introductiekamp voor eerstejaars studenten.

                </p>
                <p>
                    Ook leggen wij de focus op vele verschillende studie-activiteiten, waaronder bedrijfsbezoeken,
                    workshops, lezingen, en grote evenementen als symposia, Utrecht College Tour sessies, en het
                    jaarlijks terugkerende Junior Marketing Congres. Om ervoor te zorgen dat onze leden het maximale uit
                    hun studie op de FEM kunnen halen helpen we ze natuurlijk ook met al hun vragen, klachten, en
                    problemen, zodat ze zich compleet op hun studie kunnen focussen.
                </p>
                <p>
                    Een lidmaatschap bij S.v. Forum is vrijblijvend, en geheel gratis omdat we door een goed financieel
                    beleid en een nauwe samenwerking met sponsoren alle activiteiten kunnen bekostigen. Hierdoor kunnen
                    onze leden gratis gebruik maken van alle extra's die S.v. Forum biedt.

                </p>
                <p>
                    Naast een gewoon lidmaatschap kan je ook lid zijn van een van onze disputen. Dit zijn verticale
                    dames- en herengenootschappen, hechte vriendengroepen die samen veel leuke dingen doen. Lees
                    hierover meer onder het kopje disputen.
                </p>

                <div class="info-board info-board-blue">
                    <h4>Schrijf je in</h4>

                    <p>Schrijf je nu gratis in en word lid van de gezelligste groep studenten van de FEM! En like ons
                        hier op Facebook!</p>
                </div>
            </div>
            <!-- Last updated
                ================== -->
            @include('includes.latestnews')
        </div>
    </div>
@stop
