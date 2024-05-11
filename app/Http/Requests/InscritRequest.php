<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class InscritRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'matricule' => 'required|numeric|exists:employes,matricule',
            'nomComplet' => 'required|string',
            'post' => 'required|string',
            'event_id' => 'required|exists:events,id',
        ];
    }
    public function messages()
    {
        return [
            'matricule.required' => 'Le matricule est requis.',
            'matricule.numeric' => 'Le matricule doit être un nombre.',
            'matricule.exists' => 'Le matricule est incorrecte.',
            'nomComplet.required' => 'Le nom complet est requis.',
            'nomComplet.string' => 'Le nom complet doit être une chaîne de caractères.',
            'post.required' => 'Le poste est requis.',
            'post.string' => 'Le poste doit être une chaîne de caractères.',
            'event_id.required' => 'L\'identifiant de l\'événement est requis.',
            'event_id.exists' => 'L\'identifiant de l\'événement fourni est invalide.',
        ];
    }
}
