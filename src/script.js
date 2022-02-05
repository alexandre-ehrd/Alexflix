const API_KEY = '9589339f8da90a06aed6e3d2b11f4901';
const BASE_URL = 'https://api.themoviedb.org/3';

// Container pour les films
const BODY = document.body; // Body
const BILLBOARD_CONTAINER = document.getElementById("billboard"); // Container film à la une qui est directement visible

const most_popular = document.getElementById("most-popular");
const harry_potter = document.getElementById("harry-potter");

var dict = {};

var carousel_Pages = {};


function Scroll(scroll_view, direction){
   let window_width = window.innerWidth - 40;
   let movie_card_width = 265;
   let nb_element_to_scroll = window_width / movie_card_width;
	if (nb_element_to_scroll > 1){
		nb_element_to_scroll = Math.floor(nb_element_to_scroll);
	}

   console.log(nb_element_to_scroll)
	if (direction === 'Left'){
	   scroll_view.scroll(scroll_view.scrollLeft - movie_card_width*nb_element_to_scroll, 0);
	}
	else{
		scroll_view.scroll(scroll_view.scrollLeft + movie_card_width*nb_element_to_scroll, 0);
	}
	
	t();
}

function t(){
	var height = most_popular.scrollWidth;
	var sLeft = most_popular.scrollLeft;
	var pourcentage = (sLeft/height)*100;

	if (pourcentage > 40){
		console.log("Charger des nouveaux films")
		GetMovies_URL(most_popular, `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&language=fr-FR`);
	}
	/* console.log(`${pourcentage}% (${sLeft}, ${height})`); */
}


function Click_Movie(movie){
   console.log('Click ->', dict[movie].title, dict[movie]);
}


function Create_BillBoard(movie){
	if (BILLBOARD_CONTAINER.innerHTML == ""){
		BILLBOARD_CONTAINER.innerHTML = `
	   <img src="https://image.tmdb.org/t/p/original/${movie.backdrop_path}" alt="" width="100%">
	   <div id="billboard-info">
		<h1>${movie.title}</h1>
		<p>${movie.overview}</p>
	   </div>
	   <div id="billboard-shadow"></div>
		`;
	}
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
	var URL = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genre['id']}`;
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
	</span>`;
	section_movies.appendChild(carousel);
	// Appeller la fonction pour remplir le carousel
	GetMovies_URL(carousel, URL);
}


function GetMovies_URL(movie_container, URL){
	if (URL in carousel_Pages){
		carousel_Pages[URL] += 1;
	}
	else {
		carousel_Pages[URL] = 1;
	}
	console.log(`Page ${carousel_Pages[URL]}`)

	URL += `&page=${carousel_Pages[URL]}`;
	
	fetch(URL).then(response => {
	if (response.ok){
		response.json().then(list_movies => {
			console.log(list_movies)
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
   if (movie.id in dict && 1===2){
      console.log(movie.title, '-> déjà affiché !');
   }

	
	if (movie.backdrop_path !== null){
	// Créer la carte
	let card = document.createElement('div');
	movie_container.appendChild(card);
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

/* GetMovies_URL(most_popular, `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&language=fr-FR`);
GetMovies_URL(harry_potter, `https://api.themoviedb.org/3/search/movie?api_key=9589339f8da90a06aed6e3d2b11f4901&language=fr-FR&query=Harry Potter 20th`);
Open_Movies_Genres(); */





import {Header} from './Header.js';
import {Billboard} from './Billboard.js';

/* BODY.innerHTML = Header();
BODY.innerHTML += Billboard(); */

GetMovies_URL(harry_potter, "https://api.themoviedb.org/3/search/movie?api_key=9589339f8da90a06aed6e3d2b11f4901&language=fr-FR&query=Harry%20Potter");



const obj = {
	"adult": false,
	"backdrop_path": "/sixfWYfNegaGGHKdXrNNUHaMiAC.jpg",
	"genre_ids": [
	36,
	18,
	53,
	10752
	],
	"id": 205596,
	"original_language": "en",
	"original_title": "The Imitation Game",
	"overview": "1940 : Alan Turing, mathématicien, cryptologue, est chargé par le gouvernement Britannique de percer le secret de la célèbre machine de cryptage allemande Enigma, réputée inviolable. À la tête d'une équipe improbable de savants, linguistes, champions d'échecs et agents du renseignement, Turing s'attaque au chef-d'œuvre de complexité dont la clef peut conduire à la victoire. IMITATION GAME relate la façon dont Alan Turing, soumis à une intense pression, contribua à changer le cours de la Seconde Guerre mondiale et de l'Histoire. C'est aussi le portrait d'un homme qui se retrouva condamné par la société de l'époque en raison de son homosexualité et en mourut.",
	"popularity": 60.176,
	"poster_path": "/gBxCZuieAe8KClWWP1vVijXBlTp.jpg",
	"release_date": "2014-11-14",
	"title": "Imitation Game",
	"video": false,
	"vote_average": 8,
	"vote_count": 14280
}

BODY.innerHTML += Billboard(obj, 4);