<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class AttestationEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $data; // Les données du formulaire

    /**
     * Create a new message instance.
     *
     * @param  array  $data
     * @return void
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        
        return $this->subject('Votre attestation de travail')
        ->view('emails.attestation')
        ->with([
            'prenom' => $this->data['prenom'],
            'nom' => $this->data['nom'],
            'poste' => $this->data['poste'],
            'motif' => $this->data['motif'],
            // Ajoutez d'autres données si nécessaire
        ]);
    }
}
