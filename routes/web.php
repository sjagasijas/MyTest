<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('song','App\Http\Controllers\SongController@index')->name('song.list');
Route::post('song/store','App\Http\Controllers\SongController@store')->name('song.add');
Route::post('song/search','App\Http\Controllers\SongController@search')->name('song.search');
Route::delete('song/delete/{id}','App\Http\Controllers\SongController@destroy')->name('song.delete');