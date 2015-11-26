@extends('layouts.master')

@section('title')
    Forum - Het Bestuur
@stop

@section('content')
    <div class="section-header">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <!-- Remove the .animated class if you don't want things to move -->
                    <h1 class="animated slideInLeft"><span>Het Bestuur</span></h1>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <h1 class="hl text-center top-zero">Het Bestuur van 2015-2016</h1>
                <br/>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="team">
                    <div class="member-left">
                        {!! HTML::image('img/custom/joran.jpg','Joran Zwart',array('class' => 'left')) !!}
                        <h4>Joran Zwart</h4>

                        <p class="position">Voorzitter</p>

                        <p>
                            Als voorzitter van Studievereniging Forum ben ik dit jaar het gezicht van de vereniging. Ik
                            ben medeverantwoordelijk voor het dagelijkse bestuur van onze vereniging en het bestuur
                            zelf. Ik zal actief bijdragen aan een goede groepsdynamiek en ervoor zorgen dat iedere
                            bestuurder genoeg vrijheid en ondersteuning krijgt om zijn/haar activiteiten met plezier uit
                            te kunnen voeren. Dit jaar zijn dan ook mijn twee belangrijkste punten de continuïteit van
                            de vereniging en het functioneren van het bestuur.<br/><br/>

                            In mijn functie ben ik in staat om naar het grotere plaatje te kijken. Door te kijken welke
                            activiteiten belangrijk zijn voor de groei van de vereniging wil ik hier meer focus op
                            leggen en streven naar meer kwaliteit.<br/><br/>

                            Ik probeer om overal zo goed mogelijk van op de hoogte te zijn en de andere bestuursleden zo
                            goed mogelijk te adviseren, sturen en controleren of alles goed gaat, binnen de vereniging
                            maar ook op persoonlijk vlak. Om ervoor te zorgen dat we allemaal een geweldig en vooral ook
                            een erg leuk bestuursjaar kunnen draaien waarbij we met dit bestuur enkele belangrijke
                            nieuwe stappen zullen zetten om ervoor te zorgen dat Studievereniging Forum over minimaal
                            honderd jaar nog steeds een fantastische vereniging is!<br/><br/>

                            Bij vragen over de vereniging kun je contact opnemen via de mail of me even aanschieten als
                            ik op school
                            <br/>
                            {!! HTML::link('mailto:voorzitter@svforum.nl', 'voorzitter@svforum.nl') !!}
                        </p>
                    </div>
                    <div class="member-right">
                        {!! HTML::image('img/custom/michiel.jpg','Michiel van Dijk',array('class' => 'right')) !!}
                        <h4>Michiel van Dijk</h4>

                        <p class="position">Secretaris & Vice-voorzitter</p>

                        <p>
                            Per 1 september ben ik voor de derde, en laatste, keer aan een bestuursjaar als Secretaris &
                            Vice-voorzitter begonnen bij Studievereniging Forum. Dit jaar wil ik me (wederom) focussen
                            op de professionalisering en overdracht van mijn functie, en het afronden van de huidige
                            lopende taken.<br/><br/>

                            Enkele van deze taken zijn het lanceren van de website, het zelfstandig maken en uitbreiden
                            van de RedacCie en het professionaliseren van het ledenbestand, de communicatiemiddelen, de
                            verslaglegging, het archief en de RedacCie.<br/><br/>

                            Dit om de vereniging en haar continuïteit zo sterk mogelijk te maken en een stevige
                            fundering voor de volgende besturen te leggen. Daarnaast vind ik het ook belangrijk dat de
                            leden zo goed mogelijk bediend worden in de communicatie over onze geweldige activiteiten,
                            evenementen en services.<br/><br/>

                            Naast het bovenstaande wil ik ook een uitgebreide overdrachtsperiode voorbereiden voor mijn
                            opvolger. Aangezien ik deze functie tegen de tijd van overdracht drie jaar heb uitgevoerd is
                            het zeer belangrijk dat mijn opvolger met een vliegende start aan zijn/haar bestuursjaar kan
                            beginnen.<br/><br/>

                            Ook wil ik me dit jaar opstellen als vraagbaak voor mijn medebestuursleden. Ik loop al ruim
                            twee jaar rond in deze vereniging en heb als Forum bestuurder het meeste ervaring van het
                            bestuur. Deze ervaring wil ik gebruiken om het bestuursjaar voor mijn medebestuurders zo
                            gemakkelijk en aangenaam mogelijk te maken. Door mij zo op te stellen binnen het bestuur
                            hoop ik dat het bestuur zo efficiënt mogelijk aan de slag kan om jullie een geweldig jaar te
                            kunnen bieden!<br/><br/>

                            Voor alle vragen kan je bij mij terecht
                            op {!! HTML::link('mailto:secretaris@svforum.nl', 'secretaris@svforum.nl') !!}
                            Ook ben ik vanaf januari vaak te vinden in ons kantoor (3.19) op Daltonlaan 500.
                        </p>
                    </div>
                    <div class="member-left">
                        {!! HTML::image('img/custom/gerrit.jpg','Mariëlle van Doorn',array('class' => 'left')) !!}
                        <h4>Mariëlle van Doorn</h4>

                        <p class="position">Penningmeester</p>

                        <p>
                            Mijn naam is Marielle van Doorn en dit jaar bekleed ik de functie van Penningmeester binnen
                            het bestuur der S.v. Forum. Als penningmeester ben ik verantwoordelijk voor alle financiële
                            inkomsten en uitgaven die de vereniging maakt. Mijn doel als penningmeester is om de
                            continuïteit te waarborgen en een goed financieel jaar te draaien. Verder wil ik gezamenlijk
                            met het bestuur geld op juiste manier begroten zodat we onze leden de leukste en meest
                            leerzame activiteiten kunnen aanbieden.<br/>
                            {!! HTML::link('mailto:penningmeester@svforum.nl', 'penningmeester@svforum.nl') !!}
                        </p>
                    </div>
                    <div class="member-right">
                        {!! HTML::image('img/custom/gerrit.jpg','Bibi Klein Nagelvoort',array('class' => 'right')) !!}
                        <h4>Bibi Klein Nagelvoort</h4>

                        <p class="position">Commissaris Feesten en Activiteiten:</p>

                        <p>
                            Mijn naam is Bibi Klein Nagelvoort en ik bekleed sinds 1 september de functie van
                            Commissaris Feesten & Activiteiten binnen het bestuur der S.v. Forum.<br/><br/>

                            Als bestuurder van S.v. Forum heb ik een aantal doelen voor ogen om het succes van onze
                            studievereniging te vergroten. Het is voor mij van belang dat onze studenten zichzelf kunnen
                            profileren door zich aan te sluiten bij S.v. Forum. Samen met de rest van het bestuur streef
                            ik naar een rijk scala aan zowel gezelligheids- als educatieve activiteiten.<br/><br/>

                            S.v. Forum is een jonge vereniging met veel ruimte om te groeien. Het bereiken van huidige
                            en nieuwe leden speelt hier een belangrijke rol in en daarom wil ik door middel van
                            (promotionele) activiteiten aan de binding met/en tussen onze leden werken.<br/><br/>

                            Verdere mijlpunten dit jaar zijn het organiseren van de wintersport, het gala en onze Forum
                            trip!
                            <br/>
                            {!! HTML::link('mailto:activiteiten@svforum.nl', 'activiteiten@svforum.nl') !!}
                        </p>
                    </div>
                    <div class="member-left">
                        {!! HTML::image('img/custom/gerrit.jpg','Sanne Wiercx',array('class' => 'left')) !!}
                        <h4>Sanne Wiercx</h4>

                        <p class="position">Commissaris Educatie</p>

                        <p>
                            Mijn naam is Sanne Wiercx en dit jaar ben ik de Commissaris Educatie bij S.v. Forum. Als
                            Commissaris Educatie houd ik mijzelf bezig met het inhoudelijke en leerzame gedeelte van de
                            vereniging. Dit jaar wil ik graag elke twee maanden een leerzame activiteit aanbieden.
                            Daarnaast wil ik de stem van studenten uitdragen door een grote rol te spelen in
                            medezeggenschap.<br/><br/>

                            Met meer inhoudelijke activiteiten kan de student zich ontplooien op het studie vlal
                            Studenten moeten zichzelf op het gebied van economische vakgebieden kunnen verbeteren. Forum
                            kan hierin een breed perspectief aanbieden waarin wij samen activiteiten organiseren die
                            dergelijke inzichten geven. Studenten kunnen door deze activiteiten meer leren dan in het
                            leslokaal en wij kunnen studenten ondersteunen met het behalen van hun studiepunten.
                            <br/>
                            {!! HTML::link('educatie@svforum.nl', 'educatie@svforum.nl') !!}
                        </p>
                    </div>
                    <div class="member-right">
                        {!! HTML::image('img/custom/gerrit.jpg','Stephan Versteeg',array('class' => 'left')) !!}
                        <h4>Stephan Versteeg</h4>

                        <p class="position">Commissaris Internationale betrekkingen</p>

                        <p>
                            Binnen het bestuur der S.v. Forum bekleed ik de functie van Commissaris Internationale
                            Betrekkingen. Aangezien dit het eerste jaar is dat deze functie onderdeel is van het bestuur
                            van S.v. Forum, zal ik veel nieuwe dingen leren op internationaal vlak.<br/><br/>

                            Mijn visie voor aankomend jaar is om de continuïteit van de vereniging te vergroten op
                            internationaal vlak. Door middel van het opzetten van een internationale gemeenschap binnen
                            de vereniging en de hogeschool Utrecht, hoop ik dit doel te behalen.<br/><br/>

                            Hiernaast zal ik me richten op de internationale student. In samenwerking met mijn
                            medecommissarissen, zal ik aan de jaarlijkse activiteiten en borrels een internationaal
                            aspect toevoegen.
                            <br/>
                            {!! HTML::link('mailto:international@svforum.nl', 'international@svforum.nl') !!}
                        </p>
                    </div>
                    <div class="member-left">
                        {!! HTML::image('img/custom/gerrit.jpg','Bas Degenhart',array('class' => 'left')) !!}
                        <h4>Bas Degenhart</h4>

                        <p class="position">Commissaris Acquisitie & PR</p>

                        <p>
                            Binnen het bestuur der S.v. Forum bekleed ik de functie van Commissaris Acquisitie &PR.
                            Met mijn functie wil ik de continuïteit van de vereniging garanderen. Dit ik onder andere
                            doen daar het maken van een alumnibeleid, en het creëren van een professionele uitstraling
                            van Forum naar externen toe. Ik wil onze leden in contact brengen met mensen uit de praktijk
                            of met interessante evenementen, zodat onze leden zich maximaal kunnen ontwikkelen.
                            Persoonlijk wil ik mijzelf zo actief mogelijk inzetten binnen het bestuur, om maximale
                            ervaring uit mijn bestuursjaar te halen.
                            <br/>
                            {!! HTML::link('sponsoring@svforum.nl', 'sponsoring@svforum.nl') !!}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>*
@stop
