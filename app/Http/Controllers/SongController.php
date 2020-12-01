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

		$song = Song::orderBy('order','asc')->get();
		return $song;

	}//Index



	public function store(Request $request){
		//dd($request->title);
		$checkIfExist = Song::where('title', '=', $request->title)->first();

		if($checkIfExist  == null){
		$song = new Song();
		$song ->title = $request->title;
		$song ->artist = $request->artist;
		$song ->order = '';
		$song ->save(); 
		}

		/*
		Song::create(array(
			'title' => $request->title,
			'artist'  => $request->artist,
			'order' => '0000',
			'created_at' => ''
		));
		*/

	}//Store


	public function search(Request $request){
		
		$search = $request->search;
		$song =  DB::table('song')->where('title', 'like', '%'.$search.'%')->orWhere('artist', 'like', '%'.$search.'%')->orderBy('order','asc')->get();
		return $song;
	}//search



	public function order(Request $request) {
        foreach($request->get('order') as $id => $order) {
			$songOrder = DB::table('song')->where(['id'=>$id])->update(['order' => $order]);
        }
    } //order


	public function destroy($id){

		$song = Song::find($id);
		$song->delete();

	}//destroy




}
