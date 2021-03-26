<!--





===          ===     =============   ===========        ==========    ====      |
   ===    ===              |         \                  |             |   \     |
      ====         X       |    T     \ ========  S     ========   E  |    \    |   N
   ===    ===              |                   /        |             |     \   |
===          ===           |         =========/   *     ==========    |      ====

2021




-->
<!DOCTYPE html>
<html>
   <head>
      <link rel="shortcut icon" type="image/png" href="SFDApp.png"/>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>Paramètre</title>
      <link href="elyts.css" rel="stylesheet" type="text/css">
   </head>
   <body id="bodyColor" onload="setBackground()">
   <?php include "navBar.php" ?>
      <div class="bodySetting">
         <div class="settings">
            <h1 class="TitleSettings">Paramètres : </h1>
            <h3 class="TitleSetting">Couleur de fond : </h3>
            <div class="choixCouleur">
               <div class="choixCouleur1" onclick="changeColor1()"></div>
               <div class="choixCouleur2" onclick="changeColor2()"></div>
               <div class="choixCouleur3" onclick="changeColor3()"></div>
               <div class="choixCouleur4" onclick="changeColor4()"></div>
               <div class="choixCouleur5" onclick="changeColor5()"></div>
               <div class="choixCouleur6" onclick="changeColor6()"></div>
            </div>
         </div>
      </div>
      <script src="js/script.js"></script>
   </body>
</html>
