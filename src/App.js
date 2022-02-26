import {Header} from './Header.js';
import {Fetch_Billboard} from './Billboard.js';
import {Carousel} from './Carousel.js';
import {requests} from './Requests.js';


const API_KEY = '9589339f8da90a06aed6e3d2b11f4901';
const BASE_URL = 'https://api.themoviedb.org/3';




// Container pour les films
const BODY = document.body;
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






async function Open_Movies_Genres(){
	// Billboard 
	await Fetch_Billboard(`${BASE_URL}${requests[0]['request']}`);
	
	// Carousel
   for (let i = 0; i < requests.length; i++){
		let Carousel_Name = requests[i]['name']
		let Carousel_Request = `${BASE_URL}${requests[i]['request']}`;
		Carousel(Carousel_Name, Carousel_Request);
   }
}


BODY.innerHTML += Header();
Open_Movies_Genres();



















async function test(){
	await Fetch_Billboard(`${BASE_URL}${requests[0]['request']}`);
	console.log("Après")
	BODY.innerHTML += '<p>TEST -> après billboard</p>'
};

/* test() */





















function firstFunction(num){
	return new Promise((resolve, reject)=>{
		fetch(`${BASE_URL}${requests[0]['request']}`)
			.then(response => {
				if (response.ok){
					response.json()
					.then(data => {
						BODY.innerHTML += `<p>${num} --> ${data}</p>`
						console.log(num);
						resolve();
					})
				}
				else {
					reject();
				}
			})
	})
}

async function secondFunction(){
	for (let i = 0; i < requests.length; i++) {
		await firstFunction(i);
	}
	console.log("Après")
};

/* secondFunction() */







/* GetMovies_URL(most_popular, `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&language=fr-FR`);
GetMovies_URL(harry_potter, `https://api.themoviedb.org/3/search/movie?api_key=9589339f8da90a06aed6e3d2b11f4901&language=fr-FR&query=Harry Potter 20th`);
Open_Movies_Genres(); */




/* BODY.innerHTML = Header();
BODY.innerHTML += Billboard(); */

//GetMovies_URL(harry_potter, "https://api.themoviedb.org/3/search/movie?api_key=9589339f8da90a06aed6e3d2b11f4901&language=fr-FR&query=Harry%20Potter");

/* https://api.themoviedb.org/3/discover/tv?api_key=9589339f8da90a06aed6e3d2b11f4901&with_networks=213 */






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
