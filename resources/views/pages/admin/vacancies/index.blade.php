@extends('layouts.admin.mastermenu')

@section('mtitle')
    Forum - Vacatures
@stop


@section('mcontent')
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header" style="margin-bottom: 0px">Vacatures
                    <a href="{{action('VacanciesController@create')}}" class="btn btn-success btn-circle btn-lg">
                        <i class="fa fa-plus" style="line-height: 30px"></i>
                    </a>
                </h1>

            </div>
        </div>
        <div class="row">
            <div class="panel-body">
                <div class="panel-group" id="accordion">
                @if(count($vacancies) != 0)
                    @foreach($vacancies as $vacancy)
                        <div class="panel panel-default" style="margin-top: 5px !important;">
                            <div class="panel-heading">
                                <h4 class="panel-title" style="height: 34px;line-height: 34px">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse{{$vacancy->id}}" style="color: #428bca">{!! $vacancy->title !!}</a>
                                    {!! Form::model($vacancies, ['method' => 'DELETE', 'action' => ['VacanciesController@destroy', $vacancy->id], 'style' => 'float: right']) !!}
                                        {!! Form::submit('Verwijderen', ['class' => 'btn btn-danger', 'style' => 'float: right']) !!}
                                    {!! Form::close() !!}
                                    <a href="{{action('VacanciesController@edit',$vacancy->id)}}" class="btn btn-warning" style="float: right; margin-right: 15px;color: white">Aanpassen</a>
                                </h4>
                            </div>
                            <div id="collapse{{$vacancy->id}}" class="panel-collapse collapse">
                                <div class="panel-body">
                                    {!! $vacancy->body !!}
                                </div>
                            </div>
                        </div>
                    @endforeach
                @else
                    <p>Er zijn op dit moment geen vacatures</p><br /><br />
                @endif
                </div>
            </div>
        </div>
    </div>
@stop