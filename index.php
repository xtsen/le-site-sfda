<?php
    session_start();
    error_reporting(E_ALL);
    $code = '5FDApp';
    if (isset($_POST['code']) && $_POST["code"] === $code) {
        $_SESSION['isLogged'] = true;
    }

    if (isset($_SESSION['isLogged']) && $_SESSION['isLogged'] === true) {
        header("Location: home.php");
    }

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="shortcut icon" type="image/png" href="images/logoNeholys.png"/>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Connexion - Auto diagnostic RPS</title>
    <link href="elyts.css" rel="stylesheet" type="text/css">
</head>
<body id="bodyForm">
    <div class="main">
        <p class="TitleSign">Connexion</p>
        <form class="ConnexionForm" method="post">
            <input required name="code" id="code" type="text" min-length="6" max-length ="6" placeholder="------">
            <button class="submit">Connexion</button>
        </form>
    </div>
</body>
</html>