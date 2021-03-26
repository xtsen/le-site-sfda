<!DOCTYPE html>
<html lang="en">
<head>
    <!-- <link rel="shortcut icon" type="image/png" href=".png"/> -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Connexion</title>
    <link href="elyts.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous">
</head>
<body id="bodyForm">
    <?php include "navBar.php" ?>
    <div class="main">
        <p class="TitleSign">Connexion</p>
        <form class="ConnexionForm" method="post">
            <input required id="mail" type="email" placeholder="bgdu85@gmail.com">
            <input required id="code" type="password" minlength=4 placeholder="***********">
            <input class="hide" onclick="hidShowCode()" type="checkbox">
            <button class="submit">connexion</button>
            <p class="forgotPass"><a class="linkLogIn" href="#">Mot de passe oublié ?</p>
        </form>
        <p>
    </div>
    <script type="text/javascript">
        function hidShowCode() {
            var input = document.getElementById("code");
            if (input.type === "password") {
                input.type = "text";
            } else {
                input.type = "password";
            }
        }
    </script>
</body>
</html>