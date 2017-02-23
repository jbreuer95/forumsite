<script>
    $(function () {
        $('#fileupload').fileupload({
            url: '{{$link}}?_token=' + '{{ csrf_token() }}',
            dataType: 'json',
            start: function () {
                uploading.show();
            },
            done: function (e, data) {
                uploading.hide();
                if(data.result.hasOwnProperty('file')){
                    $.each(data.result.file.filelink, function (index, file) {
                        $("#{{$img_thumb}}").attr('src', '/fotos/nieuws/'+file);
                        $("#{{$picture}}").attr('value', '/fotos/nieuws/'+file);
                        $("#{{$thumbnail}}").attr('value', '/fotos/nieuws/thumbnails/'+file)
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