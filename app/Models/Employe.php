<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Models\Admin;
use Laravel\Sanctum\HasApiTokens;
class Employe extends Authenticatable
{
    use HasFactory,HasApiTokens;
    protected $guard = 'employe';
    protected $fillable = [
    'cin',
    'nom',
    'prenom',
    'date_naissance',
    'date_embauche',
    'situation_familiale',
    'nbr_enfants',
    'email',
    'telephone',
    'adresse',
    'post',
    'salaire',
    'admin_id',
    'password',
];
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($employe) {
            $employe->matricule = mt_rand(10000, 999999); // Génération d'un matricule unique
        });
    }
    public function admin (){
        return $this->belongsTo(Admin::class,'admin_id');
    }
    public function conge(){
        return $this->hasMany(Conge::class);
    }
    public function absence(){
        return $this->hasMany(Absent::class);
    }
    public function isAdmin()
{
    return $this->role === 'employe';
}

}
