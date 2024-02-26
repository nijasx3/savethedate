<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Save the date !</title>
</head>

<body>
    <header>
        <div>
            <img src="img/chatcoeur.png" alt="chat" width="17%">
        </div>
        <div id="slogan">
            <h1>Save The Date !</h1>
            <p>Le site pour sauver ton date (et ton temps)</p>
        </div>
        <div>
            <img src="img/cupidon.png" alt="cupidon" width="17%">
        </div>
    </header>
    <div id="wrapper" class="justify-content-center">
        <div id="lovecompatibility">
            <h3>Pour commencer.. est-ce que ça en vaut bien la peine ?</h3>
            <p>Avant de t'embêter à planifier le date, assure-toi que la compatibilité avec ton/ta crush est au MAX !</p>
            <form id="lovometer" class="text-center">
                <div class="col-3 my-2">
                    <label class="form-label" for="sname">Ton prénom :</label>
                    <input class="form-control" type="text" id="sname" name="sname" required>
                </div>
                <div class="col-3 my-2">
                    <label class="form-label" for="fname">Le prénom de l'élu.e :</label>
                    <input class="form-control" type="text" id="fname" name="fname" required>
                </div>
                <button class="btn btn-light" type="submit">Voyons voir...</button>
            </form>
            <div id="resultlovometer"></div>
            <div id="commentlovometer"></div>
        </div>
        <div id="dinerauxchandelles">
            <h3>Un dîner romantique</h3>
            <h4>Sortez les chandelles et l'argenterie ! On met les petits plats dans les grands.</h4>
            <div id="dinnerideas" class="row justify-content-center"></div>
            <div id="dinnerPage">
                <button class="btn btn-light" id="backdinner">Back</button>
                <button class="btn btn-light" id="moredinner">Plus d'idées !</button>
            </div>
        </div>
        <div id="unptitfilm">
            <h3>Netflix and chill ?</h3>
            <h4>Des films romantiques à regarder blotti.e l'un.e contre l'autre... ou solo</h4>
            <div id="movieideas" class="row justify-content-center"></div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <script src="script.js"></script>
</body>

</html>