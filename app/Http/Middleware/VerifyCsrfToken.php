<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        'api/deleteEmploye/*',
        'api/updateEmploye/*',
        'api/addnew',
        'api/addconge',
        'api/conges/*',
        'api/addEvent',
        'api/deleteEvent/*',
        'api/updateEvent/*',
        'api/inscriptEvent',
        'api/addAbsent',
        'api/absents/*',
        'api/login',
        'api/logout',
        'api/incrementInscrit/*',
        'api/detailleUser',
        'api/deleteInscrits/*'

    ];
}
