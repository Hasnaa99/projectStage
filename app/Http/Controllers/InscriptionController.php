<?php

namespace App\Http\Controllers;

use App\Http\Requests\InscritRequest;
use App\Models\Inscrit;
use Illuminate\Http\Request;


class InscriptionController extends Controller
{
    //Récuperer les inscrits dans un evenement
    public function inscrits($event_id)
    {
        $inscrits = Inscrit::where('event_id', $event_id)->get();

        return response()->json($inscrits);
    }
   //Ajouter nouveau inscrit
    public function store(InscritRequest $request)
    {

        Inscrit::create([
            'matricule' => $request->matricule,
            'nomComplet' => $request->nomComplet,
            'post' => $request->post,
            'event_id' => $request->event_id,
        ]);
        return response()->json(['message' => 'Inscription créée avec succès'], 201);
    }
    //Vérifier si l'employe est déja inscrit dans un évenement
    public function checkIfAlreadyRegistered($eventId, Request $request)
    {
        $matricule = $request->input('matricule');

        $inscrit = Inscrit::where('event_id', $eventId)
            ->where('matricule', $matricule)
            ->exists(); // Check if record exists

        return response()->json(['alreadyRegistered' => $inscrit]);
    }
    //Récuperer le nombre d'inscrits dans un événement
    public function index($event_id)
    {
        $inscrits = Inscrit::where('event_id', $event_id)->count();

        return response()->json($inscrits);
    }
    //Supprimer les inscrits d'un évenement
    public function destroy($id){
        $event = Inscrit::find($id);
    
        if(!$event){
            return response()->json([
                'message'=>'Inscrit not found'
            ],404);
        }
        $event->delete();
    
        return response()->json([
            'message'=>'inscrit successfully deleted'
        ],200);
    }
}
