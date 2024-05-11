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
        Schema::create('hotel_f_s', function (Blueprint $table) {
            $table->id();
            $table->string('nom_hotel');
            $table->string('adresse');
            $table->string('ville');
            $table->string('equipement');
            $table->string('contact');
            $table->string('photo')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hotel_f_s');
    }
};
