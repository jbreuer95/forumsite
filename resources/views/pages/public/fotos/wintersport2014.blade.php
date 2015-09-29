@extends('layouts.master')

@section('title')
    Forum - Foto's
@stop

@section('content')
    <div class="section-header">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <!-- Remove the .animated class if you don't want things to move -->
                    <h1 class="animated slideInLeft"><span>Wintersport 2014</span></h1>
                </div>
            </div>
        </div>
    </div> <!-- / .section-header -->

    <div class="container">
        <div class="row gallery-list gallery-list-bubbles" id="isotope-container">
            @for ($i = 1; $i < 10; $i++)
                @include('includes.picture', ['folder' => 'wintersport2014','number' => '0'.$i])
            @endfor
            @for ($i = 10; $i < 169; $i++)
                @include('includes.picture', ['folder' => 'wintersport2014','number' => $i])
            @endfor
        </div> <!-- / .row -->
    </div> <!-- / .container -->
@stop

@section('js')
    <script type="text/javascript">
        (function ($) {
            $( '.swipebox' ).swipebox();
        } )( jQuery );
    </script>
@stop