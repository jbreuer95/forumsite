var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

/*
elixir.config.sourcemaps = false;
*/

elixir(function(mix) {

    mix.styles([
        'bootstrap.css',
        'animate.css',
        'elements.css',
        'custom.css',
        'font-awesome.css',
        'gfonts.css',
        'swipebox.css',
        'forum.css',
        'bootstrap-datetimepicker.min.css'
    ],'public/css/all.css');

    mix.styles([
        'bootstrap.css',
        'timeline.css',
        'sb-admin-2.css',
        'font-awesome.css',
        'toastr.min.css',
        'redactor.css'
    ],'public/css/admin-all.css');

    mix.scripts([
        'jquery-2.1.4.min.js',
        'bootstrap.js',
        'custom.js',
        'scrolltopcontrol.js',
        'TweenMax.min.js',
        'ScrollToPlugin.min.js',
        'smoothscroll.js',
        'jquery.swipebox.js',
        'moment.min.js',
        'bootstrap-datetimepicker.min.js',
        'jquery.mixitup.min.js',
        'nl.js'
    ],'public/js/all.js');

    mix.scripts([
        'jquery-2.1.4.min.js',
        'bootstrap.js',
        'toastr.min.js',
        'redactor2.js',
        'table.js',
        'video.js',
        'speakingurl.min.js',
        'slugify.min.js',
        'jquery.ui.widget.js',
        'jquery.iframe-transport.js',
        'jquery.fileupload.js',
        'custom.js'
    ],'public/js/admin-all.js');

    mix.copy('resources/assets/libs/fonts', 'public/fonts');
    mix.copy('resources/assets/img', 'public/img');
    mix.copy('resources/assets/libs/licenses', 'public/licenses');
});
