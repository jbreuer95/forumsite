@extends('layouts.master')

@section('title')
    Forum - Mistura
@stop

@section('content')
    <div class="section-header">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <!-- Remove the .animated class if you don't want things to move -->
                    <h1 class="animated slideInLeft"><span>Gemengd Dispuut Mistura</span></h1>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col">
                <h2 class="forum" style="margin-top: 10px">Gemengd Dispuut Mistura</h2>
                <hr>
                <p>Mistura is het eerste onafhankelijke gemengde dispuut in Utrecht. Een groep leden van
                    Studievereniging Forum kwam met het initiatief om een gemengd dispuut op te richten waar mannen en
                    vrouwen het beste in elkaar naar boven kunnen halen. Waarom zou je twee factoren scheiden die elkaar
                    juist kunnen versterken? </p>

                <p>We organiseren om de week een borrel, gaan elk jaar op dispuutsweekend en hebben daarnaast
                    verschillende activiteiten, zoals het kerstdiner en 21-diners.</p>

                <p>Mistura staat voor een hechte band, vriendschap en natuurlijk gezelligheid. Daarnaast wil Mistura jou
                    ook carri&egrave;re-gefocuste hulp bieden en kunnen wij je helpen bij het zoeken naar een kamer, een baan
                    of een stage. Door je netwerk met elkaar te delen zijn de juiste contacten snel gevonden. </p>

                <p>Ben je een enthousiaste student(e) die op zoek is naar een onvergetelijke studententijd &eacute;n er het
                    maximale uit wilt halen? Dan zit je bij Mistura goed! </p>

                <p>Klik hier voor de Facebook pagina van Mistura <br/><a href="https://www.facebook.com/DispuutMistura?fref=ts" target="_blank">https://www.facebook.com/DispuutMistura<br/><br/>
                        {!! HTML::image('img/custom/dispuut5.jpg','dispuut',array()) !!}
                    </a>
                </p>

            </div>
            <div class="col-md-4">
                <div class="block-header">
                    <h2 style="margin-top: 10px">
                        <span class="title">Laatste Nieuws</span><span class="decoration"></span><span
                                class="decoration"></span><span class="decoration"></span>
                    </h2>
                </div>
                <div class="tab-content">
                    <div class="media">
                        <a class="pull-left" href="#">
                            <img src="http://localhost:8000/img/blog-1.jpg" class="media-object" alt="Blog Message">
                        </a>

                        <div class="media-body">
                            <h4 class="media-heading"><a href="#">Story title</a></h4>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id ipsum varius, tincidunt
                            odio nec, placerat enim.
                        </div>
                    </div>
                    <div class="media">
                        <a class="pull-left" href="#">
                            <img src="http://localhost:8000/img/blog-2.jpg" class="media-object" alt="Blog Message">
                        </a>

                        <div class="media-body">
                            <h4 class="media-heading"><a href="#">Story title</a></h4>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id ipsum varius, tincidunt
                            odio nec, placerat enim.
                        </div>
                    </div>
                    <div class="media">
                        <a class="pull-left" href="#">
                            <img src="http://localhost:8000/img/blog-3.jpg" class="media-object" alt="Blog Message">
                        </a>

                        <div class="media-body">
                            <h4 class="media-heading"><a href="#">Story title</a></h4>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id ipsum varius, tincidunt
                            odio nec, placerat enim.
                        </div>
                    </div>
                    <a href="#" class="read-more">Read more stories...</a>
                </div>
            </div>
        </div>
    </div>
@stop