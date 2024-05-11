<?php

namespace App\Http\Controllers;

use App\Http\Requests\CongeRequest;
use App\Models\Absent;
use Illuminate\Http\Request;
use App\Models\Employe;
use Illuminate\Support\Facades\Auth;

class AbsentController extends Controller
{
    public function index(){
        $absentes = Absent::with('employe')->get();
        return response()->json([
            'resultats' => $absentes
        ], 200);
    }
    public function store(CongeRequest $request){
        try{
            $user = Auth::guard('employe')->user();
            return response()->json([
                'message'=>$user
            ],200);
            $employe_id = Employe::where('matricule', $request->matricule)->value('id');

            Absent::create([
                'employe_id'=>$employe_id,
                'matricule'=>$request->matricule,
                'motif'=>$request->motif,
                'date_debut'=>$request->date_debut,
                'date_fin'=>$request->date_fin,
                'statut'=>'En attente'
            ]);
            return response()->json([
                'message'=>'Absent successfuly create'
            ],200);


        }catch(\Exception $e){
            return response()->json([
                'message'=>$e
            ],404);
        }

    }
    public function update(Request $request, $id)
    {
        // Valider les données de la requête
        $request->validate([
            'statut' => 'required|in:Accepté,Refusé', // Assurez-vous que le statut est Accepté ou Refusé
        ]);

        // Trouver la demande de congé correspondante
        $conge = Absent::findOrFail($id);

        // Mettre à jour le statut de la demande de congé
        $conge->statut = $request->statut;
        $conge->save();

        // Retourner une réponse appropriée
        return response()->json(['message' => 'Statut de la demande de absence mis à jour avec succès'], 200);
    }
    
}
