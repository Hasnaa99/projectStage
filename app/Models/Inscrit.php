<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inscrit extends Model
{
    use HasFactory;
    protected $fillable = ['matricule','nomComplet','post','event_id'];
    public function event(){
        return $this->belongsTo(Event::class);
    }
}


