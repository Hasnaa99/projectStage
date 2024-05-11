<?php

namespace App\Http\Controllers;
use App\Models\Departement;

class DepartementController extends Controller
{
    public function index(){
        $departements = Departement::with('admin')->get();
        return response()->json([
            'resultats' => $departements
        ], 200);

    }
}
