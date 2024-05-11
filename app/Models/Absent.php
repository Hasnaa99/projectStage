<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Absent extends Model
{
    protected $fillable = ['matricule','motif','date_debut','date_fin','statut','employe_id'];
    use HasFactory;
    public function employe(){
        return $this->belongsTo(Employe::class);

    }
}
