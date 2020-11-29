<?php

namespace App\Http\Controllers;

use App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Song;

class SongController extends Controller
{
    //


	public function index(){

		$song = Song::all();
		return $song;

	}//Index



	public function store(Request $request){

		$song = new Song();
		$song ->title = $request->title;
		$song->save();

	}//Store




	public function destroy($id){

		$song = Song::find($id);
		$song->delete();

	}//Store




}
