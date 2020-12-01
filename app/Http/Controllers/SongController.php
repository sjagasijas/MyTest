<?php

namespace App\Http\Controllers;

use App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Song;
use Illuminate\Support\Facades\DB;

class SongController extends Controller
{
    //


	public function index(){

		$song = Song::orderBy('id','desc')->get();
		return $song;

	}//Index



	public function store(Request $request){
		//dd($request->title);
		$song = new Song;
		$song ->title = $request->title;
		$song ->artist = $request->artist;
		$song ->save();

	}//Store


	public function search(Request $request){
		
		$search = $request->search;
		$song =  DB::table('song')->where('title', 'like', '%'.$search.'%')->orWhere('artist', 'like', '%'.$search.'%')->orderBy('id','desc')->get();
		return $song;
	}//search




	public function destroy($id){

		$song = Song::find($id);
		$song->delete();

	}//destroy




}
