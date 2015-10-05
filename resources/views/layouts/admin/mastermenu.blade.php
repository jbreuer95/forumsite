@extends('layouts.admin.master')

@section('css')
    @yield('mcss')
@stop

@section('title')
    @yield('mtitle')
@stop

@section('content')
    <div id="wrapper">
        @include('includes.admin.menu')
        <div id="page-wrapper" style="min-height: 920px;">
            @yield('mcontent')
        </div>
    </div>
@stop

@section('js')
    @yield('mjs')
@stop