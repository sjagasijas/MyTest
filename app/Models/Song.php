<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Song extends Model
{
    protected $table ='song'; 
    
     //Primary
     public $primaryKey ='id';
     //Timestamps
     public $timestamps = true;

}


