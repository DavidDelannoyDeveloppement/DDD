<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Envoi d'un message par formulaire</title>
</head>

<body>
    <?php
    $retour = mail('daviddelannoydeveloppement@gmail.com', 'Envoi depuis la page Contact', $_POST['message'], '' . "\r\n" . 'Reply-to: ' . $_POST['email']);
    if ($retour)
        echo '<p>Votre message a bien été envoyé.</p>';
    ?>
</body>
</html>