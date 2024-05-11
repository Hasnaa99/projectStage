<?php

namespace App\Http\Controllers;

use App\Models\HotelF;
use Illuminate\Http\Request;

class HotelFController extends Controller
{
    public function index(){
        $hotels = HotelF::all();
        return response()->json([
            'resultats'=>$hotels
        ],200);

    }
}
