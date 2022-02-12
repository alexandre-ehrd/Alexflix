import {Header} from './Header.js';
import {Billboard} from './Billboard.js';
import {Carousel} from './Carousel.js';
import {requests} from './Requests.js';


const API_KEY = '9589339f8da90a06aed6e3d2b11f4901';
const BASE_URL = 'https://api.themoviedb.org/3';




// Container pour les films
const BODY = document.body; // Body
const BILLBOARD_CONTAINER = document.getElementById("billboard"); // Container film à la une qui est directement visible

const most_popular = document.getElementById("most-popular");
const harry_potter = document.getElementById("harry-potter");

var dict = {};

var carousel_Pages = {};


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






function Open_Movies_Genres(){
   for (let i = 0; i < requests.length; i++){
		let Carousel_Name = requests[i]['name']
		let Carousel_Request = `${BASE_URL}${requests[i]['request']}`;
      // Créer un carousel pour chaque genre cinématographique
		Carousel(Carousel_Name, Carousel_Request);
   }
}





/* GetMovies_URL(most_popular, `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&language=fr-FR`);
GetMovies_URL(harry_potter, `https://api.themoviedb.org/3/search/movie?api_key=9589339f8da90a06aed6e3d2b11f4901&language=fr-FR&query=Harry Potter 20th`);
Open_Movies_Genres(); */







/* BODY.innerHTML = Header();
BODY.innerHTML += Billboard(); */

//GetMovies_URL(harry_potter, "https://api.themoviedb.org/3/search/movie?api_key=9589339f8da90a06aed6e3d2b11f4901&language=fr-FR&query=Harry%20Potter");

/* https://api.themoviedb.org/3/discover/tv?api_key=9589339f8da90a06aed6e3d2b11f4901&with_networks=213 */



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

const HP = {
	"adult": false,
	"backdrop_path": "/8rft8A9nH43IReybFtYt21ezfMK.jpg",
	"genre_ids": [
	99
	],
	"id": 899082,
	"original_language": "en",
	"original_title": "Harry Potter 20th Anniversary: Return to Hogwarts",
	"overview": "L'histoire enchanteresse du making-of, racontée à travers de toutes nouvelles interviews et conversations avec les acteurs, invitant les fans à un voyage magique à travers l'une des franchises de films les plus appréciées de tous les temps.",
	"popularity": 390.127,
	"poster_path": "/q3H5P8c0ZetMcV1ajM0Qbtv0BlV.jpg",
	"release_date": "2022-01-01",
	"title": "Harry Potter fête ses 20 ans : retour à Poudlard",
	"video": false,
	"vote_average": 8.3,
	"vote_count": 902
}

const serie = {
	"backdrop_path": "/oQd4y7GjGWJfkw7Ub8rZhjNjTvw.jpg",
	"first_air_date": "2019-06-28",
	"genre_ids": [
	35
	],
	"id": 89785,
	"name": "Family Business",
	"origin_country": [
	"FR"
	],
	"original_language": "fr",
	"original_name": "Family Business",
	"overview": "Quand ils apprennent de source \"sûre\" que le cannabis va être légalisé, un entrepreneur et sa famille décident de transformer leur boucherie sur le déclin en coffee-shop.",
	"popularity": 11.242,
	"poster_path": "/qftRRegBYNwNoutX660hMx85BMi.jpg",
	"vote_average": 7.2,
	"vote_count": 55
}

BODY.innerHTML += Header();
BODY.innerHTML += Billboard(obj, 4);
Open_Movies_Genres();


//console.log(Carousel.Carousel("fgfg"));



/* const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetfixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genre=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genre=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genre=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genre=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genre=99`,
}; */

/* for (const request in requests){
	console.log(`${request}: ${BASE_URL}${requests[request]}`);
	Carousel(request, `${BASE_URL}${requests[request]}`);
} */
