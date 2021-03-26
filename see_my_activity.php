<!--





===          ===     =============   ===========        ==========    ====      |
   ===    ===              |         \                  |             |   \     |
      ====         X       |    T     \ ========  S     ========   E  |    \    |   N
   ===    ===              |                   /        |             |     \   |
===          ===           |         =========/   *     ==========    |      ====

2021




-->
<!DOCTYPE html>
<html><head>
    <meta charset="utf-8">
    <title>See my activity</title>
    <link rel="stylesheet" type="text/css" href="elyts.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous">
</head>
<body x-data="data()">
    <?php include "navBar.php" ?>

    <!--Contenu de la page see_my_activity.html -->

    <div id="content_sma">
        
        <div class="header">
            <h2 class="TitleHeader">Mes projets</h2>
            <p class="subTitleHeader">Ci dessous vous allez pouvoir observer tous mes projets. Certains sont déjà publié 
                (cliquez sur la présentation pour être redirigé vers le site en question) 
                d'autre n'en sont qu'au stade de reflexion</p>

            <div class="choiceWebSite">
                <a onclick="onlyPublished()">
                    <p class="onlyPublishedWebSite">Seulement les sites publiés</p>
                </a>
                <div class="divAllWebSite">
                    <a onclick="allWebSite()">
                        <p class="allWebSite">Tous les sites</p>
                    </a>
                </div>
            </div>
        </div>


        <div class="Disponible">  <!-- Section available -->
            <hr>
            <p class="title_section_sma">Disponible : </p>
            <hr>
            <div id="available_hide">   <!-- Section available à cacher -->
                <a href="http://so667.epizy.com/" class="lien_box">
                    <div class="project">
                        <p class="title_project">Ekip</p>
                        <ul class="description_project">
                            <li>Une revue de rap </li>
                            <li>Basée sur de vrai chiffres </li>
                            <li>Abonnement possible </li>
                        </ul>
                    </div>
                </a>
                <a href="http://xtsen.42web.io" class="lien_box">
                    <div class="project">
                        <p class="title_project">Xts.en</p>
                        <ul class="description_project">
                            <li>Petite présentation de moi</li>
                            <li>Site entièrement en anglais</li>
                            <li>Liste de mes compétences</li>
                        </ul>
                    </div>
                </a>
                <a href="https://github.com/xtsen/Infinity" class="lien_box">
                    <div class="project">
                        <p class="title_project">Infinity.py</p>
                        <ul class="description_project">
                            <li>Un jeu en python</li>
                            <li>A telecherger seulement en cas d'extreme ennui</li>
                        </ul>
                    </div>
                </a>
            </div>
        </div>

        <div class="update">  <!-- Section Update -->
            <hr>
            <p class="title_section_sma">Mise à jour : </p>
            <hr>
            <div id="update_hide"> <!-- Section update à cacher -->
                <a href="https://xtsen.github.io/HTML-game/" class="lien_box">
                    <div class="project">
                        <p class="title_project">HTML game</p>
                        <ul class="description_project">
                            <li> Ajout de nouveaux niveaux ! </li>
                            <li> Modification du visuel des niveaux</li>
                            <li> Reparation d'un d'affichage</li>
                        </ul>
                    </div>
                </a>
                <a href="http://codely.42web.io/" class="lien_box">
                    <div class="project">
                        <p class="title_project">Learn Code</p>
                        <ul class="description_project">
                            <li> Modification de l'interface</li>
                            <li> Création de nouveaux tuto</li>
                            <li> Création de nouveaux languages</li>
                        </ul>
                    </div>
                </a>
                <a href="https://github.com/xtsen/le-site-sfda" class="lien_box">
                    <div class="project">
                        <p class="title_project">SFDApp le site</p>
                        <ul class="description_project">
                            <li>Ajout de nouvelle pages</li>
                            <li>Dévelloopement du coté base de donnée</li>
                            <li>Amélioration du design</li>
                        </ul>
                    </div>
                </a>
            </div>
        </div>

        <div class="projects" id="showAllProjects">  <!-- Section Project-->
            <hr>
            <p class="title_section_sma">Projets : </p>
            
            <hr>
            <div id="projects_hide">  <!-- Section projet cacher -->

                <div class="project"> 
                    <p class="title_project">Keep my pass</p>
                    <ul class="description_project">
                        <li> Pouvoir garder en securité ses mots de passes c'est maintentant possible</li>
                        <li> aucun visuel sur les mots de passe</li>
                        <li> 18/07/2021</li>
                    </ul>
                </div>
                <div class="project">
                    <p class="title_project">SFDApp</p>
                    <ul class="description_project">
                        <li> Ajout de l'application au play store</li>
                        <li> Ajout de l'application a l'app store</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <script type="module" src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"></script>
    <script nomodule src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine-ie11.min.js" defer></script>
    <script src="js/script.js"></script>
    <script type="text/javascript">
        function data () {
            return {
                
            };
        }
    </script>
</body>
</html>