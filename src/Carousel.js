import {BASE_URL, API_KEY, BODY, Click_Movie} from './App.js'

function Carousel(name, URL) {
	// Section
	let section_movies = document.createElement('section');
	BODY.appendChild(section_movies);
	
	// Titre
	let title = document.createElement('h3');
	title.innerHTML = name;
	section_movies.appendChild(title);
	
	// Carousel
	let carousel_movies = document.createElement('div');
	carousel_movies.classList.add('carousel-movies');
	/* carousel.id = `${genre['name']}-${genre['id']}`; */
	carousel_movies.innerHTML = (`
		<span class="scroll-btn scroll-left" onclick="Scroll(this.parentNode, 'Left')">
			<i class="bi bi-chevron-compact-left"></i>
		</span>
		<span class="scroll-btn scroll-right" onclick="Scroll(this.parentNode, 'Right')">
			<i class="bi bi-chevron-compact-right"></i>
		</span>
	`);
	section_movies.appendChild(carousel_movies);
	// Appeller la fonction pour remplir le carousel
	Fetch_Movies(carousel_movies, URL);
}


function Fetch_Movies(movie_container, URL){
	fetch(URL).then(response => {
		if (response.ok){
			response.json().then(movies_list => {
			   for (let movie_index = 0; movie_index < movies_list['results'].length; movie_index++) {
   	         // Créer les cartes de chaque films
			      Create_Card_Movie(movie_container, movies_list['results'][movie_index]);
			   }
				return;
			})
		}
   	console.error(`L\'Api TMDB renvoie une erreur poru la requête ${URL}`);
	})
}


function Create_Card_Movie(movie_container, movie){
	console.log(movie)
   /* if (movie.id in dict && 1===2){
      console.log(movie.title, '-> déjà affiché !');
   } */

	if (movie.backdrop_path !== null){
		// Créer la carte
		let card = document.createElement('div');
		movie_container.appendChild(card);
		// THUMBNAIL
		let url_image = `https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`
		card.classList.add("card")
		card.innerHTML = `
			<input type="image" src="${url_image}" alt="${movie.title}" onclick="Click_Movie(${movie.id})">
			<!--
			<div class="previsualisation-card">
			<img src="${url_image}" alt="${movie.title}">
			</div>
			-->
		`;
   	/* dict[movie.id] = movie; */
	}
}



function Fetch_Movies__OLD(movie_container, URL){
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
		response.json().then(movies_list => {
			console.log(movies_list)
		   for (let i_movie = 0; i_movie < movies_list['results'].length; i_movie++) {
            // Créer les cartes de chaque films
		      Create_Card_Movie(movie_container, movies_list['results'][i_movie]);
		   }
		})
	}
   else {
      console.log(`Erreur : Impossible d\'accéder à l\'Api TMDB [${URL}]`);
   }
	})
}








export {Carousel};