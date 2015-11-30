<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="{{asset('/img/favicon.ico')}}">

    <title>@yield('title')</title>

    {!! HTML::style('css/all.css') !!}

            <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    @yield('css')
</head>

<body>

<!-- Navbar
============= -->
<div class="navbar navbar-inverse navbar-fixed-top">
    <div id="forummenu" class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">{!! HTML::image('img/custom/logo.png','',array('style' => 'js')) !!}</a>
        </div>
        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li class="active">
                    {!! HTML::link('/', 'Home') !!}
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Wie zijn wij? <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li>{!! HTML::link('/denaam', 'De naam') !!}</li>
                        <li>{!! HTML::link('/missie-en-visie', 'Missie en visie') !!}</li>
                        <li>{!! HTML::link('/hetbestuur', 'Het bestuur') !!}</li>
                        <li>{!! HTML::link('/commissies', 'Commissies') !!}</li>
                        <li>{!! HTML::link('/disputen', 'Disputen') !!}</li>
                        <li>{!! HTML::link('/statuten', 'Statuten') !!}</li>
                    </ul>
                </li>
                <li>
                    {!! HTML::link('/nieuws', 'Nieuws') !!}
                </li>
                <li>
                    {!! HTML::link('/agenda', 'Agenda') !!}
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Media <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li>{!! HTML::link('/fotos', 'Foto\'s') !!}</li>
                        <li>{!! HTML::link('/videos', 'Video\'s') !!}</li>
                    </ul>
                </li>
                <li>{!! HTML::link('/contact', 'Contact') !!}</li>
                <!-- Profile links for extra small screens -->
                <li>{!! HTML::link('/partners-en-sponsoren', 'Sponsoren') !!}</li>
                <li>{!! HTML::link('/inschrijven', 'Inschrijven') !!}</li>
            </ul>
        </div>
    </div>
</div>

<div class="wrapper">
    @yield('content')
</div>

<!-- Foooter
================== -->
<footer>
    <div class="container">
        <div class="row">
            <!-- Contact Us
            =================  -->
            <div class="col-sm-4">
                <div class="headline"><h3>Neem contact op</h3></div>
                <div class="content">
                    <p>
                        Daltonlaan 500, Kamer 3.19,<br/>
                        3584 BK Utrecht<br/>
                        Telefoon: +31 (0) 88 48 16 347<br/>
                        Email: <a href="mailto:secretaris@svforum.nl">secretaris@svforum.nl</a><br/>
                        Voor zakelijk contact: <a href="mailto:sponsoring@svforum.nl">sponsoring@svforum.nl</a><br/>
                    </p>
                </div>
            </div>
            <!-- Social icons
            ===================== -->
            <div class="col-sm-4">
                <div class="headline"><h3>Social Media</h3></div>
                <div class="content social social-icons-large">
                    <ul>
                        {{--                        <li><a href="#"><i class="fa fa-twitter"></i></a>
                                                </li>--}}
                        <li><a href="https://www.facebook.com/studieverenigingforum" target="_blank"><i class="fa fa-facebook"></i></a>
                        </li>
                        <li><a href="https://www.linkedin.com/company/studievereniging-forum" target="_blank"><i class="fa fa-linkedin"></i></a>
                        </li>
{{--                        <li><a href="#"><i class="fa fa-pinterest"></i></a>
                        </li>
                        <li><a href="#"><i class="fa fa-youtube"></i></a>
                        </li>
                        <li><a href="#"><i class="fa fa-github"></i></a>
                        </li>
                        <li><a href="#"><i class="fa fa-vk"></i></a>
                        </li>
                        <li><a href="#"><i class="fa fa-google-plus"></i></a>
                        </li>--}}
                    </ul>
                    <div class="clearfix"></div>
                </div>
            </div>
            <!-- Subscribe
            =============== -->
            <div class="col-sm-4">
                <div class="headline"><h3>Abonneer</h3></div>
                <div class="content">
                    <p>Vul hieronder je e-mailadres in voor onze nieuwsbrief.<br/>We beloven je niet te vaak lastig te
                        vallen!</p>

                    <div id="mc_embed_signup">
                        <form action="//svforum.us3.list-manage.com/subscribe/post?u=6ad6abfc70eb0e83a77f3f98c&amp;id=9912a3ec47"
                              method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
                              class="validate" target="_blank" novalidate>
                            <div class="row">
                                <div class="col-sm-8">
                                    <div class="input-group">
                                        <label class="sr-only" for="subscribe-email">Email address</label>
                                        <input type="email" value="" name="EMAIL" class="required email form-control"
                                               id="mce-EMAIL" placeholder="e-mailadres">
                                    <span class="input-group-btn">
                                        <input type="submit" value="OK"
                                               name="subscribe"
                                               id="mc-embedded-subscribe"
                                               class="button btn btn-default">
                                    </span>

                                        <div id="mce-responses" class="clear">
                                            <div class="response" id="mce-error-response" style="display:none"></div>
                                            <div class="response" id="mce-success-response" style="display:none"></div>
                                        </div>
                                        <div style="position: absolute; left: -5000px;" aria-hidden="true">
                                            <input type="text"
                                                   name="b_6ad6abfc70eb0e83a77f3f98c_9912a3ec47"
                                                   tabindex="-1"
                                                   value="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <!--End mc_embed_signup-->
                </div>
            </div>
        </div>
    </div>
</footer>
<!-- Legal
============= -->
<div class="legal">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <p>Copyright &copy; S.v. Forum 2012 - {{Carbon\Carbon::now()->year}} </p>
            </div>
        </div>
    </div>
</div>

<!-- JavaScript
================================================== -->
{!! HTML::script('js/all.js') !!}
@yield('js')
</body>
</html>