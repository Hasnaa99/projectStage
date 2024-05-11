<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HotelF extends Model
{
    protected $fillable = ['nom_hotel','adresse','ville','equipement','contact','photo'];
    use HasFactory;

}
