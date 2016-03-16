<div class="col-lg-6">
    <div class="form-group required @if($errors->has('type')) has-error @endif">
        {!! Form::label('type','Type',['class' => 'control-label']) !!}
        {!! Form::select('type', Config::get('enums.vacancyTypes'), old('type'), ['class' => 'form-control']) !!}
        @if ($errors->has('type')) <p class="help-block">{{ $errors->first('type') }}</p> @endif
    </div>
    <div class="form-group required @if($errors->has('title')) has-error @endif">
        {!! Form::label('title','Titel',['class' => 'control-label']) !!}
        {!! Form::text('title', old('title'), ['class' => 'form-control']) !!}
        @if ($errors->has('title')) <p class="help-block">{{ $errors->first('title') }}</p> @endif
    </div>
    <div class="form-group @if($errors->has('slug')) has-error @endif">
        {!! Form::label('slug','Slug') !!} <i class="fa fa-question-circle" rel="tooltip"
                                              title="Uitgebreide uitleg op de uitleg pagina EERST LEZEN!"></i>
        {!! Form::text('slug', null, ['class' => 'form-control', 'value' => Input::old('slug')]) !!}
        @if ($errors->has('slug')) <p class="help-block">{{ $errors->first('slug') }}</p> @endif
    </div>
    <div class="form-group required @if($errors->has('body')) has-error @endif">
        {!! Form::label('body','Vacature',['class' => 'control-label']) !!}
        {!! Form::textarea('body', null, ['class' => 'form-control', 'style' => 'height:20px', 'value' => Input::old('body')]) !!}
        @if ($errors->has('body')) <p class="help-block">{{ $errors->first('body') }}</p> @endif
    </div>
    <div class="form-group">
        {!! Form::submit($submitButtonText, ['class' => 'btn btn-primary form-control']) !!}
    </div>
</div>
<div class="col-lg-6">
    <div class="col-lg-12 text-center">
        <div class="form-group required">
            {!! Form::label('picture','Foto',['class' => 'control-label']) !!}
            <div>Word geschaald naar 600x315</div>
            <div>
                <input id="picture" class="form-control" name="picture" type="hidden"
                       value="{{ isset($vacancy) ? $vacancy->picture : old('picture', 'http://svforum.s3.eu-central-1.amazonaws.com/fotos/nieuws/forum561d0b7ba2a117.80797838.png') }}">
                <input id="thumbnail" class="form-control" name="thumbnail" type="hidden"
                       value="{{ isset($vacancy) ? $vacancy->thumbnail : old('thumbnail', 'http://svforum.s3.eu-central-1.amazonaws.com/fotos/nieuws/thumbnails/forumThumb.png') }}">
                <img id="img-thumb" class="user size-lg img-thumbnail"
                     style="height: 315px;width: 600px;@if($errors->has('picture'))border-color: #a94442;@endif"
                     src="{{ isset($vacancy) ? $vacancy->picture : old('picture', 'http://svforum.s3.eu-central-1.amazonaws.com/fotos/nieuws/forum561d0b7ba2a117.80797838.png') }}">
                @if ($errors->has('picture')) <p class="help-block"
                                                 style="color: #a94442;">{{ $errors->first('picture') }}</p> @endif
            </div>
        </div>
        <input type="file" id="fileupload" name="file" style="display:none">
        <a class="btn btn-default" onclick="$('input[id=fileupload]').click();">Upload</a>
    </div>
</div>