<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hopital extends Model
{
    use HasFactory;
    protected $fillable = ['nomHopitale','adresse','ville','contact','service_medicaux','photo'];

}
