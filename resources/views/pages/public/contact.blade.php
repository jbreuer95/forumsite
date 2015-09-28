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
                    <h1 class="animated slideInLeft"><span>Contact Pagina</span></h1>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <!-- Contact us form -->
            <div class="col-sm-8">
                <h2 class="hl top-zero">Neem contact met ons op</h2>
                <hr>
                <p>Neem contact op met S.v. Forum via het onderstaande contactformulier, of met behulp van de gegevens hiernaast.</p>
                <!-- Alert message -->
                <div class="alert" id="form_message" role="alert"></div>

                <!-- Please carefully read the README.txt file in order to setup
                     the PHP contact form properly -->
                <form role="form" id="form_sendemail">
                    <div class="form-group">
                        <label for="email">Je email adres</label>
                        <input type="email" name="email" class="form-control" id="email" placeholder="E-mail" data-original-title="" title="">
                        <span class="help-block"></span>
                    </div>
                    <div class="form-group">
                        <label for="name">Je naam</label>
                        <input type="text" name="name" class="form-control" id="name" placeholder="Naam" data-original-title="" title="">
                        <span class="help-block"></span>
                    </div>
                    <div class="form-group">
                        <label for="message">Je bericht</label>
                        <textarea name="message" class="form-control" rows="9" id="message" placeholder="Bericht"></textarea>
                        <span class="help-block"></span>
                    </div>
                    <!-- reCAPTCHA -->
                    <div class="form-group" id="form-captcha">
                        <div class="g-recaptcha" data-sitekey="6LeltA0TAAAAAHrfg3lj-ek63YLz8ibwAyhEBd86"></div>
                    </div>
                    <!-- /reCAPTCHA -->
                    <button type="submit" class="btn btn-green">Stuur</button>
                </form>
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