<?php

namespace App\Http\Controllers;

use App\Http\Requests\CongeRequest;
use App\Models\Conge;
use App\Models\Employe;
use Illuminate\Http\Request;

class CongeController extends Controller
{
    public function index(){
        $conges = Conge::with('employe')->get();
        return response()->json([
            'resultats' => $conges
        ], 200);
    }
    public function store(CongeRequest  $request){
        try{
            $request->validate([
                'matricule' => 'required|exists:employes,matricule',
                'motif' => 'required|string|max:255',
                'date_debut' => 'required|date',
                'date_fin' => 'required|date|after_or_equal:date_debut',
            ]);
            $employe_id = Employe::where('matricule', $request->matricule)->value('id');
            Conge::create([
                'employe_id'=>$employe_id,
                'matricule'=>$request->matricule,
                'motif'=>$request->motif,
                'date_debut'=>$request->date_debut,
                'date_fin'=>$request->date_fin,
                'statut'=>'En attente'
            ]);
            return response()->json([
                'message'=>'Congé successfuly create'
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
        $conge = Conge::findOrFail($id);

        // Mettre à jour le statut de la demande de congé
        $conge->statut = $request->statut;
        $conge->save();

        // Retourner une réponse appropriée
        return response()->json(['message' => 'Statut de la demande de congé mis à jour avec succès'], 200);
    }
    
}
