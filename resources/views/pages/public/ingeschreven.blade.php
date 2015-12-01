@extends('layouts.master')

@section('title')
    Forum - Contact
@stop

@section('css')
    <script src='https://www.google.com/recaptcha/api.js'></script>
@stop

@section('content')
    <div class="section-header">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <!-- Remove the .animated class if you don't want things to move -->
                    <h1 class="animated slideInLeft"><span>Inschrijven S.<span style="text-transform: lowercase">v</span>. Forum</span></h1>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <!-- Contact us form -->
            <div class="col-sm-8">
                <h2 class="hl top-zero">Uw inschrijving is verstuurd</h2>
                <hr>
                <p>We zullen uw inschrijving zo snel mogelijk in behandeling nemen</p>
            </div>
            <!-- Right column -->
            <div class="col-sm-4">
                <!-- Out Address -->
                <h4>Ons adres</h4>
                <hr>
                <p>
                    Daltonlaan 500, Kamer 3.19,<br />
                    3584 BK Utrecht<br />
                    Telefoon: +31 (0) 88 48 16 347<br />
                    Email: <a href="mailto:secretaris@svforum.nl">secretaris@svforum.nl</a><br />
                    Voor zakelijk contact: <a href="mailto:sponsoring@svforum.nl">sponsoring@svforum.nl</a><br />
                    Facebook: <a href="https://www.facebook.com/studieverenigingforum" target="_blank"><em>LIKE</em> ons op Facebook!</a><br />
                </p>
                <hr>
                <!-- Google Maps -->
                <h4>Google Maps</h4>
                <hr>
                <div style="text-decoration:none; overflow:hidden; height:300px; width:350px; max-width:100%;"><div id="gmap_canvas" style="height:100%; width:100%;max-width:100%;"><iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Daltonlaan+500,+Utrecht,+Nederland&key=AIzaSyAN0om9mFmy1QN6Wf54tXAowK4eT0ZUPrU"></iframe></div><a class="embed-map-code" href="https://www.bootstrapskins.com" id="enable-map-info">bootstrap-based designers</a><style scoped>#gmap_canvas .map-generator{max-width: 100%; max-height: 100%; background: none;}</style></div>
            </div>
        </div>
    </div>
@stop