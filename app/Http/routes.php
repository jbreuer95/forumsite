<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'PublicController@index');

Route::get('home', 'HomeController@index');

Route::get('/denaam', 'PublicController@denaam');

Route::get('/missieenvisie', 'PublicController@menv');

Route::get('/comissies', 'PublicController@commissies');

Route::get('/statuten', 'PublicController@statuten');

Route::get('/hetbestuur', 'PublicController@hetbestuur');

Route::get('/nieuws', 'PublicController@news');

Route::get('/disputen', 'PublicController@disputen');

Route::get('/oforkortat', 'PublicController@oforkortat');

Route::get('/mistura', 'PublicController@mistura');

Route::get('/in-culmine-solae','PublicController@inculminesolae');

Route::get('/con-garbo','PublicController@congarbo');

Route::get('/pulmentum','PublicController@pulmentum');

Route::get('/contact','PublicController@contact');

Route::get('/partners-en-sponsoren','PublicController@sponsoren');

Route::post('/contact','PublicController@sendmail');

Route::get('/fotos','PublicController@fotos');
Route::get('/fotos/wintersport2013','PublicController@wintersport2013');
Route::get('/fotos/wintersport2014','PublicController@wintersport2014');
Route::get('/fotos/introductiekamp2013','PublicController@introductiekamp2013');

Route::get('/videos','PublicController@videos');

Route::controllers([
    'auth' => 'Auth\AuthController',
    'password' => 'Auth\PasswordController',
]);

