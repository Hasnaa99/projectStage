<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Attestation de travail</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        h2 {
            color: #3bb58f;
            text-align: center;
        }
        p {
            margin-bottom: 15px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Attestation de travail</h2>
        <p>Fait à Safi, le <?php echo date('d F Y'); ?></p>
        <p><strong>Objet : Attestation d'emploi</strong></p>
        <p>Nous soussignés, OCP, attestons que M./Mme {{$prenom}} {{$nom}} exerce chez nous en qualité de {{$poste}}.</p>
        <p>La présente attestation est délivrée à la demande de l'intéressé(e) pour servir et valoir ce que de droit.</p>
        <p>Fait pour valoir ce que de droit,</p>
        <p>Signature </p>
    </div>
</body>
</html>
