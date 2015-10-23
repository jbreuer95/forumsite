@extends('layouts.master')

@section('title')
    Forum - Statuten
@stop

@section('content')
    <div class="section-header" style="margin-bottom: 25px;">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <!-- Remove the .animated class if you don't want things to move -->
                    <h1 class="animated slideInLeft"><span>Statuten</span></h1>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col">
                <h2 class="forum" style="margin-top: 10px">Statuten Studievereniging Forum</h2>
                <p>
                    Door op de ondestaande link te klikken zijn de statuten van S.v. Forum te vinden.
                </p>
                <p>
                    {!! HTML::link('licenses/Statuten.pdf','Statuten Studievereniging Forum',array('target' => '_blank')) !!}
                </p>
            </div>
            @include('includes.latestnews')
        </div>
    </div>
@stop