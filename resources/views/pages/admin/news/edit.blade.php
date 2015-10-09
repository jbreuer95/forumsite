@extends('layouts.admin.mastermenu')

@section('mtitle')
    OSHU - Nieuwsberichten
@stop

@section('mcontent')
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">Nieuwsbericht Aanpassen</h1>
            </div>
        </div>
        <div class="row">
            {!! Form::model($news, ['method' => 'PATCH', 'action' => ['NewsController@update', $news->id]]) !!}
            {!! Form::hidden('id', $news->id) !!}
                @include('includes.admin.newsform',['submitButtonText' => 'Aanpassen'])
            {!! Form::close() !!}
        </div>
    </div>
@stop

@section('mjs')
    <script>
        $(function () {
            $('#fileupload').fileupload({
                url: '{{ url() }}/admin/edit/upload?_token=' + '{{ csrf_token() }}',
                dataType: 'json',
                start: function () {
                    uploading.show();
                },
                done: function (e, data) {
                    uploading.hide();
                    if(data.result.hasOwnProperty('file')){
                        $.each(data.result.file.filelink, function (index, file) {
                            $("#img-thumb").attr('src', file);
                            $("#pictureurl").attr('value', file)
                        });
                    }
                    if(data.result.hasOwnProperty('error')) {
                        $.each(data.result.error.file, function (file, item) {
                            toastr.error(item);
                        });
                    }
                }
            });
        });
    </script>
    <script type="text/javascript">
        $(function () {
            $('#body').redactor({
                focus: true,
                imageUpload: '{{ url() }}/image/upload?_token=' + '{{ csrf_token() }}',
                plugins: ['table', 'video'],
                maxHeight: 300,
                minHeight: 300,
                imageUploadErrorCallback: function(json)
                {
                    $.each(json.error.file, function(file, item)
                    {
                        toastr.error(item);
                    });
                }
            });
        });
    </script>
    <script>
        jQuery(function($) {
            $('#slug').slugify('#title'); // Type as you slug
        });
    </script>
@stop