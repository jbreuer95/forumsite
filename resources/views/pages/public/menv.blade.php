@extends('layouts.master')

@section('title')
    Forum - Missie en Visie
@stop

@section('content')
    <div class="section-header" style="margin-bottom: 25px;">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <!-- Remove the .animated class if you don't want things to move -->
                    <h1 class="animated slideInLeft"><span>Missie en Visie</span></h1>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col">
                <h2 class="forum" style="margin-top: 10px">Missie en Visie</h2>
                <h3 class="forum">(Lange termijn) Missie:</h3>
                <p>
                    "Bijdragen aan de ontwikkeling van de carrière van studenten aan de Faculteit Economie en Management van de Hogeschool Utrecht,
                    deze studenten in contact brengen met de beroepspraktijk en bijdragen aan een gezelligere studententijd."
                </p>
                <h3 class="forum">(Korte termijn) Missie:</h3>
                <p>
                    "Studenten van de Faculteit Economie en Management tijdens hun studie ondersteunen op het gebied van kwaliteit en gezelligheid.
                    Door kritisch naar de onderwijskwaliteit binnen de FEM te kijken, en door een gezelligere sfeer onder de studenten te bevorderen.
                    Met als doel om een hechte FEM-familie (FEMily) te creëren.
                    Daarnaast streeft S.v. Forum naar duurzame relaties tussen studenten, docenten en bedrijven om de ontwikkeling van studenten te bevorderen."
                </p>
                <h3 class="forum">Visie:</h3>
                <p>
                    "S.v. Forum maakt zich sterk voor alle studenten, zowel nationale als internationale.
                    Door middel van educatieve en non-educatieve activiteiten brengen wij onze leden bij elkaar om een hechte gemeenschap te vormen,
                    en daarin ondersteuning te bieden in individuele behoeften.
                    We brengen studenten in contact met het beroepenveld door middel van netwerkbijeenkomsten,
                    bedrijfsbezoeken en informele bijeenkomsten, om studenten inzicht te geven in de beroepspraktijk.
                </p>
                <p>
                    We willen studenten in contact brengen met unieke evenementen en unieke personen en ze ondersteunen bij het vinden van een stage en
                    het nemen van verdere carrière stappen.
                    S.v. Forum richt zich niet alleen op huidige studenten, maar ook op oud-studenten.
                    Door een effectief alumni-bestand op te zetten om de samenwerking tussen studenten, docenten en het beroepenveld optimaal te
                    kunnen laten verlopen.
                    Dit om bij te dragen aan de totstandkoming van duurzame relaties zodat wij studenten in staat kunnen stellen een belangrijk netwerk
                    op te bouwen.
                </p>
                <p>
                    Gezamenlijk als een FEM-familie streeft S.v. Forum naar verbetering van de kwaliteit van het onderwijs en vergroting van de gezelligheid
                    op de faculteit.
                    Om uit te groeien tot een onmisbare vereniging binnen de Faculteit Economie & Management met een grote naamsbekendheid, bij onder
                    meer de Hogeschool Utrecht en haar partners."
                </p>
            </div>
            @include('includes.latestnews')
        </div>
    </div>
@stop