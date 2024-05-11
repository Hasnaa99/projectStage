<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Conge extends Model
{
    use HasFactory;
    protected $fillable = ['matricule','employe_id','motif','date_debut','date_fin','statut'];
    public function employe(){
        return $this->belongsTo(Employe::class);
    }
}
