@extends('layouts.master')

@section('title')
    Forum - Contact
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

                        <div class="g-recaptcha" data-sitekey="6LeltA0TAAAAAHrfg3lj-ek63YLz8ibwAyhEBd86"><div><div style="width: 304px; height: 78px;"><iframe frameborder="0" hspace="0" marginheight="0" marginwidth="0" scrolling="no" style="" tabindex="0" vspace="0" width="304" title="recaptcha-widget" role="presentation" height="78" id="I0_1441265679096" name="I0_1441265679096" src="https://www.google.com/recaptcha/api2/anchor?k=YOUR_SITE_KEY&amp;co=ZmlsZTo.&amp;hl=nl&amp;v=r20150826120751&amp;size=normal&amp;usegapi=1&amp;jsh=m%3B%2F_%2Fscs%2Fapps-static%2F_%2Fjs%2Fk%3Doz.gapi.nl.IRkzuTAm1n0.O%2Fm%3D__features__%2Fam%3DAQ%2Frt%3Dj%2Fd%3D1%2Ft%3Dzcms%2Frs%3DAGLTcCNRLl4CS4VHYohSvzHBc7Z2cWb3uw#id=I0_1441265679096&amp;parent=file%3A%2F%2F&amp;pfname=&amp;rpctoken=19400389"></iframe></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid #c1c1c1; margin: 10px 25px; padding: 0; resize: none;  display: none; " title=""></textarea></div></div>
                        <span class="help-block"></span>
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
                <div style="text-decoration:none; overflow:hidden; height:300px; width:350px; max-width:100%;"><div id="gmap_canvas" style="height:100%; width:100%;max-width:100%;"><iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Daltonlaan+500,+Utrecht,+Nederland&key=AIzaSyAN0om9mFmy1QN6Wf54tXAowK4eT0ZUPrU"></iframe></div><a class="embed-map-code" href="https://www.bootstrapskins.com" id="enable-map-info">bootstrap-based designers</a><style>#gmap_canvas .map-generator{max-width: 100%; max-height: 100%; background: none;</style></div>
            </div>
        </div>
    </div>
@stop