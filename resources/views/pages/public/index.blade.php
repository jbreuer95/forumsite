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
                    D&eacute; studievereniging van de Faculteit Economie & Management van Hogeschool Utrecht.
                    In het kort is S.v. Forum een mix van gezelligheid en studie.
                    We organiseren borrels, feesten, wintersportvakantie en elk jaar een fantastisch introductiekamp.
                    Daarnaast organiseren we studiegerelateerde activiteiten als bedrijfsbezoeken, workshops,
                    en grote evenementen als het Junior MIE congres en Utrecht College Tour.
                </p>

                <p>
                    Onze leden willen naast hun studie iets extra's leren en gezellig een borrel bezoeken, samen op
                    wintersport en gezellig naar een leuk thema feest.
                    Daarnaast krijgt ieder lid de kans om een bestuurs- of commissie functie te bekleden, wat natuurlijk
                    heel goed op je CV staat.
                    <br/><br/>
                    Een lidmaatschap van S.v. Forum is geheel gratis omdat we door een goed sponsor beleid voldoende
                    inkomsten hebben om alle activiteiten
                    te bekostigen. Hierdoor kunnen wij de student gratis aanbieden gebruik te maken van alle extra's die
                    S.v. Forum biedt.

                </p>

                <div class="info-board info-board-blue">
                    <h4>Schrijf je in</h4>

                    <p>Schrijf je nu gratis in en word lid van de gezelligste groep studenten van de FEM! En like ons
                        hier op Facebook!</p>
                </div>
            </div>
            <!-- Last updated
                ================== -->
            <div class="col-md-4">
                <div class="block-header">
                    <h2>
                        <span class="title">Last Updates</span><span class="decoration"></span><span
                                class="decoration"></span><span class="decoration"></span>
                    </h2>
                </div>

                @foreach($news as $article)
                    <div class="media">
                        <a class="pull-left" href="#">
                            {!! HTML::image($article->thumbnailurl,'Blog Message',array('class' => 'media-object')) !!}
                        </a>

                        <div class="media-body">
                            <h4 class="media-heading"><a href="#">{{$article->title}}</a></h4>
                            {!! Str::words(strip_tags($article->body), 15, '...') !!}
                        </div>
                    </div>
                @endforeach
                <a href="#" class="read-more">Read more stories...</a>
            </div>
        </div>
    </div>
@stop
