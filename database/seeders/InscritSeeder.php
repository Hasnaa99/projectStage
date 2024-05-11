<?php

namespace Database\Seeders;

use App\Models\Employe;
use App\Models\Event;
use App\Models\Inscrit;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class InscritSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // Récupérer tous les employés et événements
        $employes = Employe::all()->random(15); // Sélectionner aléatoirement 15 employés
        $events = Event::all();

        // Insérer les inscrits de manière aléatoire
        foreach ($events as $event) {
            // Insérer les inscrits associés à cet événement
            foreach ($employes as $employe) {
                Inscrit::create([
                    'matricule' => $employe->matricule,
                    'nomComplet' => $employe->nom . ' ' . $employe->prenom,
                    'post' => $employe->post,
                    'event_id' => $event->id,
                ]);
            }
        }
    }
}
