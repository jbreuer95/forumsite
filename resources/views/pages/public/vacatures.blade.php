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
            <div class="col-md-12 vacancy-list">
                    @if(count($vacancies) != 0)
                        @foreach($vacancies as $vacancy)
                            <div class="media media-vacancy mix {{$vacancy->type}}">
                                <a class="pull-left" href="{{ route('vacancy.show') }}">
                                    {!! HTML::image($vacancy->picture, $vacancy->title,['class' => 'media-object media-object-vacancy pull-left']) !!}
                                </a>
                                <div class="media-body media-body-vacancy">
                                    <h4 class="media-heading"><a href="{{ route('vacancy.show') }}" class="forum">{{ $vacancy->title }}</a></h4>
                                    <p class="by-author">Nog iets</p>
                                    {!! Str::words(strip_tags($vacancy->body), 60, '...') !!}
                                </div>
                            </div>
                        @endforeach
                    @else
                        <p>Er zijn op dit moment geen vacatures</p>
                    @endif
            </div>
        </div>
    </div>
@stop

@section('js')
    <script>
        $(function () {
            $('.vacancy-list').mixItUp();
        });
    </script>
@stop