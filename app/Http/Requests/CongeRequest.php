<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CongeRequest extends FormRequest
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
            'matricule' => 'required|integer|exists:employes,matricule',
            'motif' => 'required|string|max:255',
            'date_debut' => 'required|date',
            'date_fin' => 'required|date|after:date_debut',
        ];
    }
    public function messages(): array
    {
        return [
            'matricule.required' => 'Le matricule de l\'employé est requis.',
            'matricule.exists' => 'Matricule incorrecte.',
            'matricule.integer' => 'Le matricule doit être un entier .',
            'motif.required' => 'Le motif du congé est requis.',
            'motif.max' => 'Le motif du congé ne doit pas dépasser :255 caractères.',
            'date_debut.required' => 'La date de début du congé est requise.',
            'date_debut.date' => 'La date de début du congé doit être une date valide.',
            'date_fin.required' => 'La date de fin du congé est requise.',
            'date_fin.date' => 'La date de fin du congé doit être une date valide.',
            'date_fin.after' => 'La date de fin du congé doit être postérieure à la date de début du congé.'
        ];
    }
}
