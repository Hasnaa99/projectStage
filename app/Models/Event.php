<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Inscrit;

class Event extends Model
{
    protected $fillable = ['titre_event','date_heure_debut','date_heure_fin','type_event','destinataire','statut','nombre_inscrits'];
    use HasFactory;
    public function inscrits(){
        return $this->hasMany(Inscrit::class);
    }
}
