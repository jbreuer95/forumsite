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