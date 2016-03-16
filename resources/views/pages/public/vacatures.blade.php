@extends('layouts.master')

@section('title')
    Forum - Vacatures
@stop

@section('content')
    <div id="blue" style="">
        <div class="container">
            <div class="row centered">
                <div class="col-lg-8 col-lg-offset-2" style="text-align: center">
                    <div class="controls">
                        <button class="filter active" data-filter="all">Alles</button>
                        <button class="filter" data-filter=".afstuderen" id="afstuderen">Afstuderen</button>
                        <button class="filter" data-filter=".bijbaan" id="bijbaan">Bijbaan</button>
                        <button class="filter" data-filter=".traineeship" id="traineeship">Traineeship</button>
                        <button class="filter" data-filter=".baan" id="baan">Baan</button>
                        <button class="filter" data-filter=".stage" id="stage">Stage</button>
                    </div>
                </div>
            </div><!-- row -->
        </div><!-- container -->
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <ul class="media-list main-list">
                    @if(count($vacancies) != 0)
                        @foreach($vacancies as $vacancy)
                            <li class="media mix {{$vacancy->type}}">
                                <a href="{{ route('vacancy.show') }}" class="deco-none">
                                    {!! HTML::image($vacancy->picture, $vacancy->title,['class' => 'media-object pull-left']) !!}
                                    <div class="media-body" href="{{ route('vacancy.show') }}">
                                        <h3 class="media-heading forum">{{ $vacancy->title }}</h3>
                                        <p class="by-author">{!!$vacancy->body !!}</p>
                                    </div>
                                </a>
                            </li>
                        @endforeach
                    @else
                        <p>Er zijn op dit moment geen vacatures</p>
                    @endif
                </ul>
            </div>
        </div>
    </div>
@stop

@section('js')
    <script>
        $(function () {
            $('.media-list').mixItUp();
        });
    </script>
@stop