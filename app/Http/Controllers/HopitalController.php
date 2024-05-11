<?php

namespace App\Http\Controllers;

use App\Models\Hopital;
use Illuminate\Http\Request;

class HopitalController extends Controller
{
    public function index(){
        $hopitaux = Hopital::all();
        return response()->json([
            'resultats'=>$hopitaux
        ],200);

    }
   
}
