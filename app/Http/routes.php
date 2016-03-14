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

Route::get('/de-naam', 'PublicController@denaam');

Route::get('/missie-en-visie', 'PublicController@menv');

Route::get('/commissies', 'PublicController@commissies');

Route::get('/statuten', 'PublicController@statuten');

Route::get('/het-bestuur', 'PublicController@hetbestuur');

Route::get('/disputen', 'PublicController@disputen');

Route::get('/oforkortat', 'PublicController@oforkortat');

Route::get('/mistura', 'PublicController@mistura');

Route::get('/in-culmine-solae','PublicController@inculminesolae');

Route::get('/con-garbo','PublicController@congarbo');

Route::get('/pulmentum','PublicController@pulmentum');

Route::get('/contact','PublicController@contact');

Route::get('/contact/verstuurd','PublicController@contactverstuurd');

Route::get('/partners-en-sponsoren','PublicController@sponsoren');

Route::post('/contact','PublicController@sendmail');

Route::get('/agenda','PublicController@agenda');

Route::get('/inschrijven','PublicController@inschrijven');
Route::get('/inschrijven/verstuurd','PublicController@inschrijvingverstuurd');
Route::post('/inschrijven','PublicController@postinschrijven');

Route::get('/fotos','PublicController@fotos');
Route::get('/fotos/wintersport2013','PublicController@wintersport2013');
Route::get('/fotos/wintersport2014','PublicController@wintersport2014');
Route::get('/fotos/introductiekamp2013','PublicController@introductiekamp2013');

Route::get('/videos','PublicController@videos');

Route::get('/admin', 'AdminController@index');

// Authentication routes...
Route::get('auth/login', 'Auth\AuthController@getLogin');
Route::post('auth/login', 'Auth\AuthController@postLogin');
Route::get('auth/logout', 'Auth\AuthController@getLogout');

// Registration routes...
Route::get('auth/register', 'Auth\AuthController@getRegister');
Route::post('auth/register', 'Auth\AuthController@postRegister');

Route::post('admin/upload', 'AdminController@upload');
Route::patch('admin/edit/upload', 'AdminController@upload');
Route::post('image/upload', 'PublicController@upload');

Route::resource('admin/news','NewsController');
Route::resource('admin/vacancies','VacanciesController');
Route::get('/nieuws/', function(){
    return redirect('/nieuws/pagina-1');
});
Route::get('/nieuws/pagina-{page}', 'PublicController@news')->where('page', '^0*[1-9]\d*$');
Route::get('/nieuws/artikel/{slug}', 'PublicController@article');

Route::controllers([
    'auth' => 'Auth\AuthController',
    'password' => 'Auth\PasswordController',
]);

