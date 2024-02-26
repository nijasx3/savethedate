// API POUR LE LOVOMETER

//récupération de l'API au submit des noms dans le formulaire
document.getElementById('lovometer').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const sname = document.getElementById('sname').value;
    const fname = document.getElementById('fname').value;

    const url = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${encodeURIComponent(sname)}&fname=${encodeURIComponent(fname)}`;
    const options1 = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
        }
    };

    fetch(url, options1)
        .then(response => response.json())
        .then(data1 => {
            document.getElementById('resultlovometer').innerText = `Pourcentage de love entre ${sname} et ${fname} : ${data1.percentage}%`;
            const comm = document.getElementById('commentlovometer')
            // définition des commentaires selon le pourcentage de love
            if (parseInt(data1.percentage) <= 20) {
                comm.innerText = "Vraiment pas ouf... Les soirées solo c'est cool aussi !"
            }
            else if ((parseInt(data1.percentage)) > 20 && (parseInt(data1.percentage)) <= 40) {
                comm.innerText = "Pas terrible... On reste amis ?"
            }
            else if ((parseInt(data1.percentage)) > 40 && (parseInt(data1.percentage)) <= 60) {
                comm.innerText = "C'est mid."
            }
            else if ((parseInt(data1.percentage)) > 60 && (parseInt(data1.percentage)) <= 80) {
                comm.innerText = "Des papillons dans le ventre !"
            }
            else if ((parseInt(data1.percentage)) > 80) {
                comm.innerText = "C'est le grand amour !"
            }

        })
        .catch(err => console.error(err));
});

// API RECETTE CUISINE
pageCount = 0
btnmore = document.getElementById('moredinner')
btnback = document.getElementById('backdinner')

loadRecipe(pageCount)

btnmore.addEventListener('click', function addCount() {
    pageCount += 3
    loadRecipe(pageCount)
    toggleBackButtonVisibility();
})

btnback.addEventListener('click', function removeCount() {
    pageCount += (-3)
    loadRecipe(pageCount)
    toggleBackButtonVisibility();
})

function toggleBackButtonVisibility() {
    if (pageCount >= 3) {
        btnback.style.visibility = 'visible';
    } else {
        btnback.style.visibility = 'hidden';
    }
}


console.log(pageCount)

function loadRecipe(pageCount) {
    dinnerideas.innerHTML = ''
    const url3 = `https://tasty.p.rapidapi.com/recipes/list?from=${pageCount}&size=3&tags=valentines_day,dinner`;
    const options3 = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'

        }
    };

    fetch(url3, options3)
        .then(response3 => response3.json())
        .then(data3 => {
            const dinnerideas = document.getElementById('dinnerideas');
            baseurlrecipe = 'https://tasty.co/recipe/'

            data3.results.forEach(recipe => {
                //création de la card par recette
                const listRecipes = document.createElement('div');
                listRecipes.classList.add('recipeCard')
                listRecipes.classList.add('col-3')
                listRecipes.classList.add('card')
                listRecipes.classList.add('m-3')

                //création de l'image
                const recipeImg = document.createElement('img');
                recipeImg.src = recipe.thumbnail_url

                //création du titre
                const recipeTitle = document.createElement('h5')
                recipeTitle.textContent = recipe.name

                //creation du body de la card
                const reCardBody = document.createElement('div')
                reCardBody.appendChild(recipeImg)
                reCardBody.appendChild(recipeTitle)
                reCardBody.classList.add('reCardBody')

                //creation de l'overlay pour le lien de la recette
                const overlayRecipe = document.createElement('div')
                overlayRecipe.classList.add('overlayRecipe')
                overlayRecipe.innerHTML = "<a href='" + baseurlrecipe + recipe.slug + "'target ='_blank'><button class='btn btn-light'>Voir la recette</button></a>"

                listRecipes.addEventListener('mouseover', function () {
                    overlayRecipe.style.visibility = 'visible'
                })
                listRecipes.addEventListener('mouseout', function () {
                    overlayRecipe.style.visibility = 'hidden'
                })

                //ajout du tout dans la structure
                listRecipes.appendChild(reCardBody)
                listRecipes.appendChild(overlayRecipe)
                dinnerideas.appendChild(listRecipes)
            }
            )

        })
        .catch(err => console.error(err));
}

// API DES FILMS

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: ''
    }
};

fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=1&sort_by=popularity.desc&with_genres=10749%2C%2035&without_genres=16,10751', options)
    .then(response => response.json())
    .then(data => {
        const ideas = document.getElementById('movieideas');
        const imgBaseUrl = 'https://image.tmdb.org/t/p/'
        const imgSize = 'w500'

        data.results.forEach(movie => {

            // création de la card pour chaque film
            const listMovies = document.createElement('div');
            listMovies.classList.add('movieCard')
            listMovies.classList.add('col-3')
            listMovies.classList.add('card')
            listMovies.classList.add('m-1')
            //création div image + synopsis 
            const movieOverlay = document.createElement('div')
            movieOverlay.classList.add('movieOverlay')



            //création de l'image
            const moviePoster = document.createElement('img')
            const posterPath = movie.poster_path
            moviePoster.src = imgBaseUrl + imgSize + posterPath
            //création du titre
            const movieTitle = document.createElement('h5')
            movieTitle.textContent = movie.title
            //création du synopsis
            const movieText = document.createElement('p')
            movieText.textContent = movie.overview
            movieText.classList.add('synopsishidden')
            //ajout des parties dans la card
            movieOverlay.appendChild(moviePoster)
            movieOverlay.appendChild(movieText)

            listMovies.appendChild(movieOverlay)
            listMovies.appendChild(movieTitle)

            //ajout de la card dans la section movieideas
            ideas.appendChild(listMovies);

            movieOverlay.addEventListener('mouseover', function () {
                
                movieOverlay.lastElementChild.style.visibility = 'visible'
            })
            movieOverlay.addEventListener('mouseout', function () {
                movieOverlay.lastElementChild.style.visibility = 'hidden'
            })


        })

    })
    .catch(err => console.error(err));


