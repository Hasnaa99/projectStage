<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('employes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('matricule')->unique();
            $table->string('cin')->unique();
            $table->string('nom');
            $table->string('prenom');
            $table->date('date_naissance');
            $table->date('date_embauche');
            $table->string('situation_familiale');
            $table->integer('nbr_enfants')->nullable();
            $table->string('email')->unique();
            $table->string('telephone')->unique();
            $table->string('adresse');
            $table->string('post');
            $table->unsignedBigInteger('salaire');
            $table->foreignId('admin_id')->constrained('admins');
            $table->string('password');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employes');
    }
};
