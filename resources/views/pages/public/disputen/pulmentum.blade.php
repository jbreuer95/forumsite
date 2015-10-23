@extends('layouts.master')

@section('title')
    Forum - Pulmentum
@stop

@section('content')
    <div class="section-header">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <!-- Remove the .animated class if you don't want things to move -->
                    <h1 class="animated slideInLeft"><span>Heerendispuut Pulmentum</span></h1>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col">
                <h2 class="forum" style="margin-top: 10px">Heerendispuut Pulmentum</h2>
                <hr>
                <p>
                    Op een prille lente avond besloot een groep vrienden om het Utrechts studentenleven te gaan
                    verrijken met een nieuw Heerendispuut. Dit vormde de basis voor Heerendispuut Pulmentum, een
                    Utrechts genootschap dat zich nog altijd baseert op deze initi&euml;le vriendschap. De grote variatie aan
                    leden zijn hechte vrienden van elkaar en dit uit zich in een onderlinge sterke band.<br/>
                    Elk jaar worden er vele activiteiten georganiseerd voor en door deze steeds grotere groep kameraden.
                    Denk aan reizen, diners, proeverijen en natuurlijk een hele hoop borrels. Hierdoor is H.D. Pulmentum
                    de ideale thuishaven voor menig student. </p>
                <p>We hopen je snel te mogen begroeten bij Heerendispuut Pulmentum.</p>
                <p><a href="https://www.facebook.com/heerendispuutpulmentum" target="_blank">Klik hier voor de Facebook van H.D. Pulmentum<br/><br/>{!! HTML::image('img/custom/dispuut4.jpg','dispuut',array('width' => '222', 'height' => '259')) !!}</a></p>
            </div>
            @include('includes.latestnews')
        </div>
    </div>
@stop