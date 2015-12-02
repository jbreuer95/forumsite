@extends('layouts.master')

@section('title')
    Forum - Agenda
@stop

@section('content')
    <div class="section-header">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <!-- Remove the .animated class if you don't want things to move -->
                    <h1 class="animated slideInLeft"><span>Agenda</span></h1>
                </div>
            </div>
        </div>
    </div>
    <div class="container" >
        <div class="row" style="text-align: center">
            <a href="https://www.google.com/calendar/ical/8ip07vva1vk7s5jho0eogsf7so%40group.calendar.google.com/public/basic.ics" target="_blank" class="btn btn-info" role="button">Agenda Downloaden</a>
            @if(count($events) != 0)
                <ul class="timeline">
                    @foreach(array_reverse($events) as $key=>$event)
                        <li @unless(($key+2) % 2 == 0)class="timeline-inverted"@endunless>
                            <div class="timeline-badge"><i class="fa fa-calendar"></i></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4 class="timeline-title">{{ $event->title }}</h4>
                                    <div style="font-size: 14px" class="text-muted"><i class="glyphicon glyphicon-time"></i>&nbsp;
                                        @if(\Carbon\Carbon::parse($event->start)->isSameDay(\Carbon\Carbon::parse($event->end)))
                                            {{ \Carbon\Carbon::parse($event->start)->format('d/m/Y H:i') }} - {{ \Carbon\Carbon::parse($event->end)->format('H:i') }}
                                        @else
                                            {{ \Carbon\Carbon::parse($event->start)->format('d/m/Y H:i') }} - {{ \Carbon\Carbon::parse($event->end)->format('d/m/Y H:i') }}
                                        @endif</div>
                                    <div style="font-size: 14px" class="text-muted"><i class="fa fa-map-marker fa-lg"></i> &nbsp;&nbsp;{{ $event->location }}</div>
                                </div>
                                <div class="timeline-body">
                                    {!! $event->description !!}
                                </div>
                            </div>
                        </li>
                    @endforeach
                </ul>
            @else
                <p>Er zijn op dit moment geen agenda evenementen</p><br />
            @endif
        </div>
    </div>
@stop