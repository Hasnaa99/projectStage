<?php

namespace App\Http\Controllers;

use App\Http\Requests\AttestationRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\AttestationEmail;

class EmailController extends Controller
{
    public function sendEmail(AttestationRequest $request)
    {
        // Retourner les données de formulaire
        $data = $request->validated();
        try {
            Mail::to($data['email'])->send(new AttestationEmail($data));
            
            // Retourner une réponse si l'email est envoyé avec succès
            return response()->json(['message' => 'Email envoyé avec succès'], 200);
        } catch (\Exception $e) {
            // Retourner une réponse en cas d'échec de l'envoi de l'email
            return response()->json(['message' => 'Erreur lors de l\'envoi de l\'email',$e->getMessage()], 500);
        }
    }
}
