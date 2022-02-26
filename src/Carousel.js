var dict = {};
var carousel_Pages = {};

function Carousel(name, URL) {
	carousel_Pages[URL] = 1;
	// Section
	let section_movies = document.createElement('section');
	document.body.appendChild(section_movies);
	
	// Titre
	let title = document.createElement('h3');
	title.innerHTML = name;
	section_movies.appendChild(title);
	
	// Carousel
	let carousel_movies = document.createElement('div');
	carousel_movies.classList.add('carousel-movies');
	/* carousel.id = `${genre['name']}-${genre['id']}`; */
	section_movies.appendChild(carousel_movies);

	// Bouton scroll gauche
	let scroll_boutton_left = document.createElement('span');
	scroll_boutton_left.classList.add('scroll-btn' ,'scroll-left');
	scroll_boutton_left.addEventListener('click', event => {
		Scroll_Carousel(carousel_movies, 'Left', URL)
	});
	scroll_boutton_left.innerHTML = (`<i class="bi bi-chevron-compact-left"></i>`);
	carousel_movies.appendChild(scroll_boutton_left)

	// Bouton scroll droite
	let scroll_boutton_right = document.createElement('span');
	scroll_boutton_right.classList.add('scroll-btn', 'scroll-right');
	scroll_boutton_right.addEventListener('click', event => {
		Scroll_Carousel(carousel_movies, 'Right', URL)
	});
	scroll_boutton_right.innerHTML = (`<i class="bi bi-chevron-compact-right"></i>`);
	carousel_movies.appendChild(scroll_boutton_right)

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
			});
		}
		else{
			console.error(`L\'Api TMDB renvoie une erreur pour la requête ${URL}`);
		}
	});
}


function Create_Card_Movie(movie_container, movie){
   if (movie.id in dict){
		return;
   }

	var title = function() {
      return (movie.title ? movie.title : movie.name);
   }

	if (movie.backdrop_path !== null){
		// Créer la carte
		let card = document.createElement('div');
		movie_container.appendChild(card);
		// THUMBNAIL
		let url_image = `https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`
		card.classList.add("card")
		card.innerHTML = `
			<input type="image" src="${url_image}" alt="${title()}">
			<!--
			<div class="previsualisation-card">
			<img src="${url_image}" alt="${movie.title}">
			</div>
			-->
		`;
		card.addEventListener('click', event => {
			Click_Movie(movie)
		});
   	dict[movie.id] = movie;
	}
}


function Scroll_Carousel(scroll_view, direction, URL){
   let window_width = window.innerWidth - 80;
   let movie_card_width = 265;
   let nb_element_to_scroll = window_width / movie_card_width;
	if (nb_element_to_scroll > 1){
		nb_element_to_scroll = Math.floor(nb_element_to_scroll);
	}

   console.log(`Scroll de ${nb_element_to_scroll}`)
	if (direction === 'Left'){
	   scroll_view.scroll(scroll_view.scrollLeft - movie_card_width*nb_element_to_scroll, 0);
	}
	else{
		scroll_view.scroll(scroll_view.scrollLeft + movie_card_width*nb_element_to_scroll, 0);
	}
	t(scroll_view, URL);
}

function t(scroll_view, URL){
	var height = scroll_view.scrollWidth;
	var sLeft = scroll_view.scrollLeft;
	var pourcentage = (sLeft/height)*100;

	if (pourcentage > 40){
		carousel_Pages[URL] += 1;
		URL +=`&page=${carousel_Pages[URL]}`;
		console.log(`Load movies : ${URL}`)
		Fetch_Movies(scroll_view, URL)
	}
	/* console.log(`${pourcentage}% (${sLeft}, ${height})`); */
}

function Click_Movie(movie){
	var title = function() {
      return (movie.title ? movie.title : movie.name);
   }
	console.log(title())
}

export {Carousel, dict, carousel_Pages};