@extends('layouts.master')

@section('title')
    Forum - Inschrijven
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
                    <h1 class="animated slideInLeft"><span>Inschrijven S.v. Forum</span></h1>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <!-- Contact us form -->
            <div class="col-sm-8">
                <h2 class="hl top-zero">Inschrijven S.v. Forum</h2>
                <hr>
                <p>Leuk dat je lid wil worden van S.v. Forum. Het enige wat je nu nog moet is hiernaast je gegevens invullen. Dan bieden wij jou in de toekomst:</p>
                <ul>
                    <li>De mogelijkheid om te netwerken</li>
                    <li>Twee keer per maand een borrel in onze stamkroeg</li>
                    <li>Je bent als eerste op de hoogte van de allerleukste activiteiten (waaronder een wintersport en feesten met andere studieverenigingen van de HU)</li>
                    <li>De mogelijkheid om als mentor mee te gaan op het leukste introductiekamp van de HU</li>
                    <li>De mogelijkheid om lid te worden van een commissie of dispuut</li>
                    <li>Een gratis lidmaatschap</li>
                </ul>
                <p>Nice of you to become a member of S.v. Forum. The only thing left is to fill in your information. We will offer you the following things once you are a member</p>
                <ul>
                    <li>The possibility to network</li>
                    <li>A gathering in our local bar, twice a month</li>
                    <li>You will receive information about the coolest activities (like a skiing trip and parties with other study associations) first</li>
                    <li>The possibility to become a mentor at the best Introduction Camp of the HU</li>
                    <li>The option to become a member of a committee, a sorority or a fraternity</li>
                    <li>A free membership</li>
                </ul>

                {!! Form::open(['url' => '/inschrijven']) !!}
                <div class="form-group required @if($errors->has('name')) has-error @endif">
                    {!! Form::label('name','Naam / Name',['class' => 'control-label']) !!}
                    {!! Form::text('name', null, ['class' => 'form-control', 'value' => Input::old('name'),'placeholder' => 'Naam']) !!}
                    @if ($errors->has('name')) <p class="help-block">{{ $errors->first('name') }}</p> @endif
                </div>
                <div class="form-group required @if($errors->has('sex')) has-error @endif">
                    {!! Form::label('sex','Geslacht / Sex',['class' => 'control-label']) !!}<br/>
                    <label class="radio-inline">{!! Form::radio('sex', 'Man', null,['value' => Input::old('sex')]) !!}Man</label>
                    <label class="radio-inline">{!! Form::radio('sex', 'Vrouw', null, ['value' => Input::old('sex')]) !!}Vrouw</label>
                    @if ($errors->has('sex')) <p class="help-block">{{ $errors->first('sex') }}</p> @endif
                </div>
                <div class="form-group required @if($errors->has('birthday')) has-error @endif">
                    {!! Form::label('birthday','Geboortedatum / Date of Birth',['class' => 'control-label']) !!}
                    <div class='input-group date' id='datetimepicker1'>
                        {!! Form::text('birthday', isset($event) ? $event->birthday->format('d-m-Y H:i') : null, ['class' => 'form-control', 'value' => Input::old('birthday'),'placeholder' => 'Geboortedatum']) !!}
                        <span class="input-group-addon">
                            <span class="glyphicon glyphicon-calendar"></span>
                        </span>
                    </div>
                    @if ($errors->has('birthday')) <p class="help-block">{{ $errors->first('birthday') }}</p> @endif
                </div>
                <div class="form-group required @if($errors->has('nationality')) has-error @endif">
                    {!! Form::label('nationality','Nationaliteit / Nationality',['class' => 'control-label']) !!}
                    {!! Form::text('nationality', 'Nederlandse', ['class' => 'form-control', 'value' => Input::old('nationality')]) !!}
                    @if ($errors->has('nationality')) <p class="help-block">{{ $errors->first('nationality') }}</p> @endif
                </div>
                <div class="form-group required @if($errors->has('address')) has-error @endif">
                    {!! Form::label('address','Adres / Address',['class' => 'control-label']) !!}
                    {!! Form::text('address', null, ['class' => 'form-control', 'value' => Input::old('address'),'placeholder' => 'Adres / Address']) !!}
                    @if ($errors->has('address')) <p class="help-block">{{ $errors->first('address') }}</p> @endif
                </div>
                <div class="form-group required @if($errors->has('postalcode')) has-error @endif">
                    {!! Form::label('postalcode','Postcode / Postal Code',['class' => 'control-label']) !!}
                    {!! Form::text('postalcode', null, ['class' => 'form-control', 'value' => Input::old('postalcode'),'placeholder' => 'Postcode / Postal Code']) !!}
                    @if ($errors->has('postalcode')) <p class="help-block">{{ $errors->first('postalcode') }}</p> @endif
                </div>
                <div class="form-group required @if($errors->has('city')) has-error @endif">
                    {!! Form::label('city','Plaats / City or Town',['class' => 'control-label']) !!}
                    {!! Form::text('city', null, ['class' => 'form-control', 'value' => Input::old('city'),'placeholder' => 'Plaats / City or Town']) !!}
                    @if ($errors->has('city')) <p class="help-block">{{ $errors->first('city') }}</p> @endif
                </div>
                <div class="form-group required @if($errors->has('country')) has-error @endif">
                    {!! Form::label('country','Land / Country',['class' => 'control-label']) !!}
                    {!! Form::text('country', 'Nederland', ['class' => 'form-control', 'value' => Input::old('country')]) !!}
                    @if ($errors->has('country')) <p class="help-block">{{ $errors->first('country') }}</p> @endif
                </div>
                <div class="form-group required @if($errors->has('phonenumber')) has-error @endif">
                    {!! Form::label('phonenumber','Mobiele telefoonnummer / Mobile Phone Number',['class' => 'control-label']) !!}
                    {!! Form::text('phonenumber', null, ['class' => 'form-control', 'value' => Input::old('phonenumber'),'placeholder' => 'Mobiele telefoonnummer / Mobile Phone Number']) !!}
                    @if ($errors->has('phonenumber')) <p class="help-block">{{ $errors->first('phonenumber') }}</p> @endif
                </div>
                <div class="form-group required @if($errors->has('email')) has-error @endif">
                    {!! Form::label('email','E-mail (geen HU mail) / E-mail (No HU-mail address)',['class' => 'control-label']) !!}
                    {!! Form::email('email', null, ['class' => 'form-control', 'value' => Input::old('email'),'placeholder' => 'E-mail']) !!}
                    @if ($errors->has('email')) <p class="help-block">{{ $errors->first('email') }}</p> @endif
                </div>
                <div class="form-group required @if($errors->has('commission')) has-error @endif">
                    <label for="commission" class="control-label"><a href="/commissies" target="_blank">Commissie (al lid van / geïnteresseerd in) / Commission (current member of /I’m interested in)</a></label>
                    {!! Form::select('commission',
                        [
                           'Geen'                                   => 'Geen / None',
                           'Redactie Commissie (RedacCie)'          => 'Redactie Commissie (RedacCie)',
                           'Kas Controle Commissie (KasCo)'         => 'Kas Controle Commissie (KasCo)',
                           'Activiteiten Commissie'                 => 'Activiteiten Commissie',
                           'Educatie Commissie'                     => 'Educatie Commissie',
                           'Promotie Commissie (PromoCie)'          => 'Promotie Commissie (PromoCie)',
                           'Wintersport Commissie'                  => 'Wintersport Commissie',
                           'Introductiekamp Commissie'              => 'Introductiekamp Commissie',
                           'Foto Commissie'                         => 'Foto Commissie',
                        ]
                        , null, [ 'class' =>  'form-control',])
                    !!}
                    @if ($errors->has('commission')) <p class="help-block">{{ $errors->first('commission') }}</p> @endif
                </div>
                <div class="form-group required @if($errors->has('dispuut')) has-error @endif">
                    <label for="dispuut" class="control-label"><a href="/disputen" target="_blank">Dispuut (al lid van / geïnteresseerd in) / Sorority or Fraternity (current member of /I’m interested in)</a></label>
                    {!! Form::select('dispuut',
                        [
                           'Geen' => 'Geen / None',
                           'Heerendispuut OFORKORTAT' => 'Heerendispuut OFORKORTAT',
                           'Dames Dispuut In Culmine Solae' => 'Dames Dispuut In Culmine Solae',
                           'Dames Dispuut Con Garbo' => 'Dames Dispuut Con Garbo',
                           'Heerendispuut Pulmentum' => 'Heerendispuut Pulmentum',
                           'Gemengd Dispuut Mistura' => 'Gemengd Dispuut Mistura',

                        ]
                        , null, [ 'class' =>  'form-control',])
                    !!}
                    @if ($errors->has('dispuut')) <p class="help-block">{{ $errors->first('dispuut') }}</p> @endif
                </div>
                <div class="form-group required @if($errors->has('studentnumber')) has-error @endif">
                    {!! Form::label('studentnumber','Studentnummer / Student number',['class' => 'control-label']) !!}
                    {!! Form::text('studentnumber', null, ['class' => 'form-control', 'value' => Input::old('studentnumber'),'placeholder' => 'Studentnummer / Student number']) !!}
                    @if ($errors->has('studentnumber')) <p class="help-block">{{ $errors->first('studentnumber') }}</p> @endif
                </div>
                <div class="form-group required @if($errors->has('study')) has-error @endif">
                    {!! Form::label('study','Studie / Study',['class' => 'control-label']) !!}
                    {!! Form::text('study', null, ['class' => 'form-control', 'value' => Input::old('study'),'placeholder' => 'Studie / Study']) !!}
                    @if ($errors->has('study')) <p class="help-block">{{ $errors->first('study') }}</p> @endif
                </div>
                <div class="form-group required @if($errors->has('startingstudyyear')) has-error @endif">
                    {!! Form::label('startingstudyyear','Studiejaar aanmelding / Starting study year',['class' => 'control-label']) !!}
                    <div class='input-group date' id='datetimepicker2'>
                        {!! Form::text('startingstudyyear', isset($event) ? $event->startingstudyyear->format('YYYY') : null, ['class' => 'form-control', 'value' => Input::old('startingstudyyear'),'placeholder' => 'Studiejaar aanmelding / Starting study year']) !!}
                        <span class="input-group-addon">
                            <span class="glyphicon glyphicon-calendar"></span>
                        </span>
                    </div>
                    @if ($errors->has('startingstudyyear')) <p class="help-block">{{ $errors->first('startingstudyyear') }}</p> @endif
                </div>
                <div class="checkbox">
                    <label style="font-weight: bold">
                        {!! Form::checkbox('international', 1, null, ['value' => Input::old('international')]) !!}I’m an International student
                    </label>
                </div>
                <!-- reCAPTCHA -->
                <div class="form-group required @if($errors->has('g-recaptcha-response')) has-error @endif">
                    {!! Recaptcha::render() !!}
                    @if ($errors->has('g-recaptcha-response')) <p class="help-block">{{ $errors->first('g-recaptcha-response') }}</p> @endif
                </div>
                <div class="form-group">
                    {!! Form::submit('Verstuur / Send', ['class' => 'btn btn-green']) !!}
                </div>
                {!! Form::close() !!}
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

@section('js')
    <script type="text/javascript">
        $(function () {
            $('#datetimepicker1').datetimepicker({
                locale: 'nl',
                format: 'DD-MM-YYYY',
                useCurrent: false
            });
            $('#datetimepicker2').datetimepicker({
                locale: 'nl',
                format: 'YYYY',
                useCurrent: false
            });
        });
    </script>
@stop