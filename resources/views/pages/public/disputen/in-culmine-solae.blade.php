@extends('layouts.master')

@section('title')
    Forum - In Culmine Solae
@stop

@section('content')
    <div class="section-header">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <!-- Remove the .animated class if you don't want things to move -->
                    <h1 class="animated slideInLeft"><span>Dames Dispuut In Culmine Solae</span></h1>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col">
                <h2 class="forum" style="margin-top: 10px">Dames Dispuut In Culmine Solae</h2>
                <hr>
                <p>
                    Al bijna 25 jaar borrelen, stappen, feesten en eten de meiden van In Culmine Solae (ICS) in het
                    centrum van Utrecht. Doordat we om de week een activiteit of borrel hebben, zijn we een hechte
                    vriendinnengroep. Een mooie studententijd wordt aangevuld door ICS waar je naast feesten en leuke
                    mensen ontmoeten, ook gemakkelijk een stage of kamer kan regelen.
                    We hebben ook een aantal jaarlijkse activiteiten zoals het kerstdiner, broertje/zusje dag en het
                    zomer in je bol diner. Natuurlijk gaan we elk jaar met elkaar op dispuutsweekend, en om de vijf jaar
                    vieren we ons lustrum door een mooie reis te maken! .

                </p>

                <p>Ieder jaar werven we nieuwe leden, onder andere via het introductiekamp van S.v. Forum. Om het
                    dispuut en al haar leden te leren kennen is er een introductieperiode, maar aan een gevreesde
                    ontgroening doen wij niet!</p>

                <p>Dus hou jij van een borrel, etentje of feestje? Word dan lid van het leukste dames dispuut van Utrecht!<br/>
                    Wil je meer weten over ons dispuut of lid worden? Kijk dan op onze website, of stuur ons een berichtje.
                </p>

                <p><em>Want het is het blauw en groen, waar wij het allemaal voor doen.</em></p>

                <p><a href="http://www.inculminesolae.nl"target="_blank">www.inculminesolae.nl</a></p>
                <p><a href="http://www.facebook.nl/icsdamesdispuut"
                      target="_blank">www.facebook.nl/icsdamesdispuut<br><br><br>{!! HTML::image('img/custom/dispuut2-1.jpg','ICS') !!}{!! HTML::image('img/custom/dispuut2-2.jpg','ICS',array('style' => 'float:right;')) !!}
                        <br></a></p>
            </div>
            <div class="col-md-4">
                <div class="block-header">
                    <h2 style="margin-top: 10px">
                        <span class="title">Laatste Nieuws</span><span class="decoration"></span><span
                                class="decoration"></span><span class="decoration"></span>
                    </h2>
                </div>
                <div class="tab-content">
                    <div class="media">
                        <a class="pull-left" href="#">
                            <img src="http://localhost:8000/img/blog-1.jpg" class="media-object" alt="Blog Message">
                        </a>

                        <div class="media-body">
                            <h4 class="media-heading"><a href="#">Story title</a></h4>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id ipsum varius, tincidunt
                            odio nec, placerat enim.
                        </div>
                    </div>
                    <div class="media">
                        <a class="pull-left" href="#">
                            <img src="http://localhost:8000/img/blog-2.jpg" class="media-object" alt="Blog Message">
                        </a>

                        <div class="media-body">
                            <h4 class="media-heading"><a href="#">Story title</a></h4>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id ipsum varius, tincidunt
                            odio nec, placerat enim.
                        </div>
                    </div>
                    <div class="media">
                        <a class="pull-left" href="#">
                            <img src="http://localhost:8000/img/blog-3.jpg" class="media-object" alt="Blog Message">
                        </a>

                        <div class="media-body">
                            <h4 class="media-heading"><a href="#">Story title</a></h4>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id ipsum varius, tincidunt
                            odio nec, placerat enim.
                        </div>
                    </div>
                    <a href="#" class="read-more">Read more stories...</a>
                </div>
            </div>
        </div>
    </div>
@stop