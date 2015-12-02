@extends('layouts.master')

@section('title')
    Forum - Con Garbo
@stop

@section('content')
    <div class="section-header">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <!-- Remove the .animated class if you don't want things to move -->
                    <h1 class="animated slideInLeft"><a href="/disputen" style="text-decoration:none;color:rgb(102, 102, 102);"><span>Terug</span></a></h1>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col">
                <h2 class="forum" style="margin-top: 10px">Dames Dispuut Con Garbo</h2>
                <hr>
                <p>
                    Damesdispuut Con Garbo is al sinds 1987 actief als dispuut in Utrecht. Ieder studiejaar wordt een
                    paar meiden uitgekozen om zich aan te sluiten bij dit hechte dispuut. D.D. Con Garbo is aangesloten
                    bij S.V. Forum, de studievereniging van de Faculteit Economie en Management van Hogeschool
                    Utrecht.</p>

                <p>
                    Een dispuut is meer dan alleen een vriendinnengroep. Naast levenslange vriendschappen opbouwen is
                    het een mooie kans om waardevolle relaties te leggen waar je in je toekomst nog veel aan zult
                    hebben. Denk hierbij aan stagemogelijkheden, een kamer vinden en eventueel zelfs een leuke baan.</p>

                <p>
                    Wekelijkse activiteiten zoals dispuutseten, vrijdagmiddagborrels en stapavondjes zijn al jaren
                    traditie. Verder hebben we jaarlijkse activiteiten als kerstdiner, nieuwsjaarborrel en
                    dispuutsweekend.</p>

                <p>
                    Voor een unieke studententijd met onvergetelijke momenten moet je bij Con Garbo zijn!</p>

                <p><a href="http://www.congarbo.nl" target="_blank">www.congarbo.nl<br/><br/>{!! HTML::image('img/custom/dispuut3.jpg','dispuut',array()) !!}</a></p>
            </div>
            @include('includes.latestnews')
        </div>
    </div>
@stop