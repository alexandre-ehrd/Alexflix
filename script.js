const API_KEY = '9589339f8da90a06aed6e3d2b11f4901';
const BASE_URL = 'https://api.themoviedb.org/3';

// Container pour les films
const BODY = document.body; // Body
const BILLBOARD_CONTAINER = document.getElementById("billboard"); // Container film à la une qui est directement visible

const most_popular = document.getElementById("most-popular");
const harry_potter = document.getElementById("harry-potter");

var dict = {};



function Scroll(scroll_view, direction){
	if (direction === 'Left'){
	   scroll_view.scroll(scroll_view.scrollLeft - 160*7, 0);
	}
	else{
	   scroll_view.scroll(scroll_view.scrollLeft + 160*7, 0);
	}
}

function Click_Movie(movie){
   console.log('Click ->', dict[movie].title, dict[movie]);
}


function Create_BillBoard(movie){
   BILLBOARD_CONTAINER.innerHTML = `
	   <img src="https://image.tmdb.org/t/p/original/${movie.backdrop_path}" alt="" width="100%">
	   <div id="billboard-info">
	   	<h1>${movie.title}</h1>
	   	<p>${movie.overview}</p>
	   </div>
	   <div id="billboard-shadow"></div>
   `;
}


function Open_Movies_Genres(){
   // Ouvrir le fichier JSON avec tous les genres
   fetch("request.json").then(response => {
      if (response.ok){
         response.json().then(data => {
            for (let i = 0; i < data['request'].length; i++){
               // Créer un carousel pour chaque genre cinématographique
               Create_Carousel_Movies(data['request'][i]);
            }
         })
      }
      else{
         console.log("Erreur : Accès impossible aux requêtes");
      }
	});
}

function Create_Carousel_Movies(genre){
	// Section
	let section_movies = document.createElement('section');
	BODY.appendChild(section_movies);
	// Titre
	let title = document.createElement('h2');
	title.innerHTML = genre['name'];
	section_movies.appendChild(title);
	// Carousel
	let carousel = document.createElement('div');
	carousel.classList.add('carousel-movies');
	carousel.id = `${genre['name']}-${genre['id']}`;
	carousel.innerHTML = `
	<span class="scroll-btn scroll-left" onclick="Scroll(this.parentNode, 'Left')">
		<i class="bi bi-chevron-compact-left"></i>
	</span>
	<span class="scroll-btn scroll-right" onclick="Scroll(this.parentNode, 'Right')">
		<i class="bi bi-chevron-compact-right"></i>
	</span>
	`;
	section_movies.appendChild(carousel);
	// Appeller la fonction pour remplir le carousel
	let URL = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genre['id']}`;
	GetMovies_URL(carousel, URL);
}


function GetMovies_URL(movie_container, URL){
	fetch(URL).then(response => {
	if (response.ok){
		response.json().then(list_movies => {
		   for (let i_movie = 0; i_movie < list_movies['results'].length; i_movie++) {
            // Créer les cartes de chaque films
		      Create_Card_Movie(movie_container, list_movies['results'][i_movie]);
		   }
		})
	}
   else {
      console.log(`Erreur : Impossible d\'accéder à l\'Api TMDB [${URL}]`);
   }
	})
}

function Create_Card_Movie(movie_container, movie){
   if (movie.id in dict){
      console.log(movie.title, '-> déjà affiché !');
   }

	// Créer la carte
	let card = document.createElement('div');
	movie_container.appendChild(card);
	if (movie.backdrop_path !== null){
	// THUMBNAIL
	url_image = `https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`
	card.classList.add("card")
	card.innerHTML = `
		<input type="image" src="${url_image}" alt="${movie.title}" onclick="Click_Movie(${movie.id})">
		<!--
		<div class="previsualisation-card">
		<img src="${url_image}" alt="${movie.title}">
		</div>
		-->
	`;
   dict[movie.id] = movie;
	}
}

GetMovies_URL(most_popular, `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&language=fr-FR`);
GetMovies_URL(harry_potter, `https://api.themoviedb.org/3/search/movie?api_key=9589339f8da90a06aed6e3d2b11f4901&language=fr-FR&query=Harry Potter`);
Open_Movies_Genres();