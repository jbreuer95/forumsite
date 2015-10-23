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
            @include('includes.latestnews')
        </div>
    </div>
@stop