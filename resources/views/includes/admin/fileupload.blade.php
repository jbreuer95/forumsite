<script>
    $(function () {
        $('#fileupload').fileupload({
            url: '{{ url() }}{{$link}}?_token=' + '{{ csrf_token() }}',
            type: '{{$type}},
            dataType: 'json',
            start: function () {
                uploading.show();
            },
            done: function (e, data) {
                uploading.hide();
                if(data.result.hasOwnProperty('file')){
                    $.each(data.result.file.filelink, function (index, file) {
                        $("#{{$img_thumb}}").attr('src', 'http://d1qut4a1r795dy.cloudfront.net/fotos/nieuws/'+file);
                        $("#{{$picture}}").attr('value', 'http://d1qut4a1r795dy.cloudfront.net/fotos/nieuws/'+file);
                        $("#{{$thumbnail}}").attr('value', 'http://d1qut4a1r795dy.cloudfront.net/fotos/nieuws/thumbnails/'+file)
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