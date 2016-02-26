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
                    <h1 class="animated slideInLeft"><span>Inschrijven Forum</span></h1>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row" style="padding-left: 10px;padding-right: 10px">
            <h2 class="hl top-zero">Inschrijven Forum</h2>
            <hr>
            <!-- Contact us form -->
            <div class="col-sm-6">
                <!-- Out Address -->

                <p>Leuk dat je lid wilt worden van S.v. Forum. Het enige wat je nu nog hoeft te doen is je gegevens
                    invullen. Dan bieden wij jou in de toekomst:</p>
                <ul>
                    <li>De mogelijkheid om te netwerken</li>
                    <li>Twee keer per maand een borrel in onze stamkroeg</li>
                    <li>Je bent als eerste op de hoogte van de allerleukste activiteiten (waaronder een wintersport en
                        feesten met andere studieverenigingen van de HU)
                    </li>
                    <li>De mogelijkheid om als mentor mee te gaan op het leukste introductiekamp van de HU</li>
                    <li>Educatieve evenementen, zoals gastsprekers en bijlessen</li>
                    <li>De mogelijkheid om lid te worden van een commissie of dispuut</li>
                    <li>Een gratis lidmaatschap</li>
                </ul>
                <hr>
                <p>Nice of you to become a member of S.v. Forum. The only thing left for you to do is fill out your
                    information. Once you are a member we will offer you the following:</p>
                <ul>
                    <li>The possibility to network</li>
                    <li>A gathering in our local bar, twice a month</li>
                    <li>You will receive information about the coolest activities (like a skiing trip and parties with
                        other study associations) first
                    </li>
                    <li>The possibility to become a mentor at the best Introduction Camp of the HU</li>
                    <li>Educational events, like guest lectures and tutoring</li>
                    <li>The option to become a member of a committee, a sorority or a fraternity</li>
                    <li>A free membership</li>
                </ul>
            </div>
            <div class="col-sm-6">
                {!! Form::open(['url' => '/inschrijven']) !!}
                <div class="form-group required @if($errors->has('name')) has-error @endif">
                    {!! Form::label('name','Naam / Name',['class' => 'control-label']) !!}
                    {!! Form::text('name', null, ['class' => 'form-control', 'value' => Input::old('name'),'placeholder' => 'Naam']) !!}
                    @if ($errors->has('name')) <p class="help-block">{{ $errors->first('name') }}</p> @endif
                </div>
                <div class="form-group required @if($errors->has('sex')) has-error @endif">
                    {!! Form::label('sex','Geslacht / Sex',['class' => 'control-label']) !!}<br/>
                    <label class="radio-inline">{!! Form::radio('sex', 'Man', null,['value' => Input::old('sex')]) !!}
                        Man</label>
                    <label class="radio-inline">{!! Form::radio('sex', 'Vrouw', null, ['value' => Input::old('sex')]) !!}
                        Vrouw</label>
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
                    @if ($errors->has('nationality')) <p
                            class="help-block">{{ $errors->first('nationality') }}</p> @endif
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
                    @if ($errors->has('phonenumber')) <p
                            class="help-block">{{ $errors->first('phonenumber') }}</p> @endif
                </div>
                <div class="form-group required @if($errors->has('email')) has-error @endif">
                    {!! Form::label('email','E-mail (geen HU-mailadres) / E-mail (No HU-mail address)',['class' => 'control-label']) !!}
                    {!! Form::email('email', null, ['class' => 'form-control', 'value' => Input::old('email'),'placeholder' => 'E-mail']) !!}
                    @if ($errors->has('email')) <p class="help-block">{{ $errors->first('email') }}</p> @endif
                </div>
                <div class="form-group required @if($errors->has('commission')) has-error @endif">
                    <label for="commission" class="control-label"><a href="/commissies" target="_blank">Commissie (al
                            lid / geïnteresseerd in) / Commission (current member / I’m interested in)</a></label>
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
                    <label for="dispuut" class="control-label"><a href="/disputen" target="_blank">Dispuut (al lid /
                            geïnteresseerd in) / Sorority or Fraternity (current member / I’m interested in)</a></label>
                    {!! Form::select('dispuut',
                        [
                           'Geen' => 'Geen / None',
                           'Heerendispuut OFORKORTAT' => 'Heerendispuut OFORKORTAT',
                           'Heerendispuut Pulmentum' => 'Heerendispuut Pulmentum',
                           'Damesdispuut In Culmine Solae' => 'Damesdispuut In Culmine Solae',
                           'Damesdispuut Con Garbo' => 'Damesdispuut Con Garbo',
                           'Dispuut Mistura' => 'Dispuut Mistura',

                        ]
                        , null, [ 'class' =>  'form-control',])
                    !!}
                    @if ($errors->has('dispuut')) <p class="help-block">{{ $errors->first('dispuut') }}</p> @endif
                </div>
                <div class="form-group required @if($errors->has('studentnumber')) has-error @endif">
                    {!! Form::label('studentnumber','Studentnummer / Student number',['class' => 'control-label']) !!}
                    {!! Form::text('studentnumber', null, ['class' => 'form-control', 'value' => Input::old('studentnumber'),'placeholder' => 'Studentnummer / Student number']) !!}
                    @if ($errors->has('studentnumber')) <p
                            class="help-block">{{ $errors->first('studentnumber') }}</p> @endif
                </div>
                <div class="form-group required @if($errors->has('study')) has-error @endif">
                    {!! Form::label('study','Studie / Study',['class' => 'control-label']) !!}
                    {!! Form::select('study',
                        [
                            null => '',
                            'Accountancy' => 'Accountancy',
                            'Bedrijseconomie' => 'Bedrijseconomie',
                            'Business Management' => 'Business Management',
                            'Commerciële Economie' => 'Commerciële Economie',
                            'Financial Services Management' => 'Financial Services Management',
                            'International Business and Languages' => 'International Business and Languages',
                            'International Business & Management Studies' => 'International Business & Management Studies',
                            'International Marketing Management' => 'International Marketing Management',
                            'Logistiek en Economie' => 'Logistiek en Economie',
                            'Bedrijfskunde MER' => 'Bedrijfskunde MER',
                            'Small Business & Retail Management' => 'Small Business & Retail Management',
                            'Overig / Non of the above' => 'Overig / Non of the above',
                        ]
                        , null, [ 'class' =>  'form-control',])
                    !!}
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
                    @if ($errors->has('startingstudyyear')) <p
                            class="help-block">{{ $errors->first('startingstudyyear') }}</p> @endif
                </div>
                <div class="checkbox">
                    <label style="font-weight: bold">
                        {!! Form::checkbox('international', 1, null, ['value' => Input::old('international')]) !!}I’m an
                        International student
                    </label>
                </div>
                <!-- reCAPTCHA -->
                <div class="form-group required @if($errors->has('g-recaptcha-response')) has-error @endif">
                    {!! Recaptcha::render() !!}
                    @if ($errors->has('g-recaptcha-response')) <p
                            class="help-block">{{ $errors->first('g-recaptcha-response') }}</p> @endif
                </div>
                <div class="form-group">
                    {!! Form::submit('Verstuur / Send', ['class' => 'btn btn-green']) !!}
                </div>
                {!! Form::close() !!}
            </div>
            <!-- Right column -->

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
