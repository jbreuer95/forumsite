@extends('layouts.master')

@section('title')
    Forum - OFORKORTAT
@stop

@section('content')
    <div class="section-header">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <!-- Remove the .animated class if you don't want things to move -->
                    <h1 class="animated slideInLeft"><span>Heerendispuut OFORKORTAT</span></h1>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col">
                <h2 class="forum" style="margin-top: 10px">Heerendispuut OFORKORTAT</h2>
                <hr>
                <p>Vereniging Heerendispuut OFORKORTAT is in 1989 opgericht als dispuut van studentenvereniging Utrhes.
                    Een groep erg brute mannen besloot dat het wel positief zou zijn voor studentenvereniging Utrhes, om
                    naast alle clubjes ook een dispuut te hebben. Deze helden richtten daaropvolgend H.D. OFORKORTAT op
                    en bereikten consensus, waaruit zich een enorme kracht etaleerde. Hierdoor aangedreven maakten zij
                    zich in zeer korte tijd meester van de Utrhes-scene. En dit beeld zou de jaren daarna ook niet meer
                    veranderen; terecht overigens! Inmiddels is H.D. OFORKORTAT dan ook meester van de Forum-scene. Dit
                    alles kon worden gecultiveerd door het aanwenden en aanleren van de Zweedse tradities, mentaliteit
                    en gebruiken, die als een aorta het leven van de leden zijn gaan beheersen. Van elke nieuwe lichting
                    jaars werden de beste mannen uitgekozen en ingelijfd en nu, na meer dan&nbsp;20 jaar, staat er een
                    dynamisch onaantastbaar orgaan van ongekende kracht.<br>Een orgaan van inmiddels 73 leden, die in
                    het aardse Walhalla als viking-goden voortleven en die maar door blijven gaan. Zij leven dan ook
                    onder het motto: VOLUIT GAAN!</p>

                <p>Med V&auml;nlig H&auml;lsning,</p>

                <p>Gidon Puntman, Ordf&ouml;rande der Heerendispuut OFORKORTAT</p>

                <p><a href="http://www.oforkortat.nl/"
                      target="_blank">http://www.oforkortat.nl/<br/><br/>{!! HTML::image('img/custom/dispuut1.png','dispuut',array('height' => '318')) !!}
                    </a></p>


            </div>
            @include('includes.latestnews')
        </div>
    </div>
@stop