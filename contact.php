<!--





===          ===     =============   ===========        ==========    ====      |
   ===    ===              |         \                  |             |   \     |
      ====         X       |    T     \ ========  S     ========   E  |    \    |   N
   ===    ===              |                   /        |             |     \   |
===          ===           |         =========/   *     ==========    |      ====

2021




-->

<!DOCTYPE html>
<html lang="en">
<head>
      <link rel="shortcut icon" type="image/png" href="SFDApp.png"/>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>contact</title>
      <link href="elyts.css" rel="stylesheet" type="text/css">
</head>
<body id="bodyColor" onload="setBackground()">
    <?php include "navBar.php" ?>
    <div class="main">
        <p class="TitleSign">Envoyer un message</p>
        <form class="ConnexionForm" method="post">
            <input required id="mail" type="email" placeholder="bgdu85@gmail.com">
            <input required id="code" type="text" minlength=1 placeholder="Votre message ici :">
            <button class="submit">Envoyer</button>
        </form>
    </div>
    <?php include "footer.php" ?>
    <script src="js/script.js"></script>
</body>
</html>