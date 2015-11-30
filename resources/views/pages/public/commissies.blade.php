@extends('layouts.master')

@section('title')
    Forum - Commissies
@stop

@section('content')
    <div class="section-header" style="margin-bottom: 25px;">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <!-- Remove the .animated class if you don't want things to move -->
                    <h1 class="animated slideInLeft"><span>Commissies</span></h1>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col">
                <h2 class="forum" style="margin-top: 10px">Commissies</h2>

                <p>
                    Naast het bestuur van de vereniging zijn er ook verschillende commissies nodig voor de organisatie.
                    Commissies worden gevuld door de meeste actieve leden binnen vereniging.
                    Mocht je interesse hebben om plaats te nemen in een commissie, en een wezenlijke bijdrage te leveren
                    aan het jaar van S.v. Forum. Neem dan contact op met de secretaris via: <a
                            href="mailto:secretaris@svforum.nl">secretaris@svforum.nl</a><br/>
                    Het bestuur '15-'15 heeft besloten dit jaar de volgende commissies op te zetten.

                </p>

                <h3 class="forum">Redactie Commissie (RedacCie)</h3>

                <p>
                    De RedacCie is de onmisbare schakel in de communicatie van het bestuur naar de leden van S.v. Forum.
                    Deze commissie valt onder de Secretaris en bestaat uit een groep van vier studenten: Ivo Drok, Auke
                    Overes, Saskia van Wijk en Bart Donker
                    De leden van de RedacCie zijn verantwoordelijk voor het beheer van de Facebook pagina, de website,
                    de nieuwsbrief en de Twitter en LinkedIn pagina’s. Verder schrijven en vertalen zij alle berichten
                    die op Facebook en/of in de nieuwsbrief worden geplaatst.
                    De RedacCie wordt ondersteund door de Secretaris en vanuit S.v. Forum krijgen zij meerdere leuke
                    workshops (social media, contentstrategie, photoshop) aangeboden die niet alleen bijdragen aan hun
                    ontwikkeling als RedacCie lid, maar tijdens en na de studie ook heel nuttig zullen zijn.

                </p>

                <h3 class="forum">Kas Controle Commissie (KasCo)</h3>

                <p>
                    De Kas Controle Commissie bestaat momenteel uit één docent, Roderick Udo. Het doel van de Kas
                    Controle Commissie is het controleren van het financieel verslag, en naar aanleiding van deze
                    controle een oordeel vormen omtrent het financiële beheer van de vereniging. De commissie heeft dus
                    een adviserende rol waarin het advies gehoord dient te worden, maar niet bindend is.
                </p>

                <h3 class="forum">Activiteiten Commissie</h3>

                <p>
                    Deze commissie bevat alles wat georganiseerd wordt naast de educatieve activiteiten. Dit is een erg
                    breed en divers begrip. Voorbeelden hiervan zijn: een karaokeavond, een kroegentocht, een bezoekje
                    aan de live-uitzending van Pauw, paintballen, het gala en feesten georganiseerd met de andere
                    verenigingen. Deze commissie staat onder leiding van de Commissaris Feesten en Activiteiten en
                    bestaat uit een groep van drie studenten: Mette Hoekstra, Laurien Specken en Loretta Schreutelkamp
                </p>

                <h3 class="forum">Educatie Commissie</h3>

                <p>
                    Deze commissie is verantwoordelijk voor alle educatieve activiteiten. Variërend van Utrecht College
                    Tour, Studie-uurtjes, Gastsprekers in het clustercafé en TEDx 2016. Deze commissie staat onder
                    leiding van de commissaris Educatie, die gesteund wordt in haar werkzaamheden door Tessa Visser.
                </p>

                <h3 class="forum">Promotie Commissie (PromoCie)</h3>

                <p>
                    Feesten, activiteiten, wintersport, er kan van alles georganiseerd worden, maar zonder een goede
                    promotie voor al deze verschillende activiteiten kan het bijna geen succes worden. De Promotie
                    Commissie is daarom van groot belang. Daarnaast streeft deze commissie ook naar het promoten van
                    S.v. Forum zelf onder de studenten. Een grotere naamsbekendheid is een van de belangrijkste doelen
                    voor dit komende jaar. Deze commissie staat onder leiding van de Commissaris Feesten en Activiteiten
                    en bestaat momenteel uit een groep van twee studenten: Sabrina Warmerdam en Océane Steunenberg
                </p>

                <h3 class="forum">Wintersport Commissie</h3>

                <p>
                    Alles rond de wintersport zal door deze commissie ingevuld worden. Van een globaal programma op
                    locatie, het regelen van de locatie tot de paklijst samenstellen vooraf aan de reis. Leden van deze
                    commissie zijn: Michiel van Dijk, Bibi Klein Nagelvoort, Jelmer Schuurman, Joost Kuijf, Josephine
                    Kloeken, Julie Burauen en Aimee van Gils.
                </p>

                <h3 class="forum">Introductiekamp Commissie</h3>

                <p>
                    Het Introkamp kan niet gerealiseerd worden zonder de hulp van diverse commissies en actieve
                    leden.<br/>
                    Het Introkamp wordt georganiseerd met de hulp van drie commissies:<br/>
                    - Communicatiecommissie: verantwoordelijk voor de externe communicatie en de aanmeldingen.<br/>
                    - Activiteitencommissie: verantwoordelijk voor het verzorgen van de dagelijkse activiteiten en de
                    dagindeling<br/>
                    - Algemene activiteiten: Verantwoordelijk voor alle taken die betrekking hebben op het gehele kamp,
                    van de huisjesindeling, tot het regelen van de shirtjes.
                </p>

                <h3 class="forum">Foto Commissie</h3>

                <p>
                    De fotocommissie is verantwoordelijk voor het visueel in kaart brengen van de evenementen en
                    activiteiten van de Studievereniging. Jeroen den Otter is onze huisfotograaf. Hij wordt bijgestaan
                    door Sanne Wiercx en Océane Steunenberg
                </p>
            </div>
            @include('includes.latestnews')
        </div>
    </div>
@stop