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
                <div class="list-group vacancy-list">
                    @if(count($vacancies) != 0)
                        @foreach($vacancies as $vacancy)
                            <a href="{{ route('vacancy.show',['id' => $vacancy->id]) }}" class="list-group-item mix {{$vacancy->type}}">
                                <div class="media col-md-4">
                                        {!! HTML::image($vacancy->picture, $vacancy->title,['class' => 'vacancy-image img-rounded img-responsive center-block ']) !!}
                                </div>
                                <div class="col-md-8">
                                    <h4 class="list-group-item-heading">{{ $vacancy->title }}</h4>
                                    <p class="list-group-item-text">{!! $vacancy->description !!}</p>
                                </div>
                            </a>
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