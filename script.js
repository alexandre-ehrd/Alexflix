const API_KEY = 'api_key=9589339f8da90a06aed6e3d2b11f4901';
const BASE_URL = 'https://api.themoviedb.org/3';


// Elément parent qui contient toutes les cartes
const container = document.querySelector(".most_popular");
const billboard = document.getElementById("billboard");;


var dict = {};




function Scroll(direction){
   if (direction === 'Left'){
      container.scroll(container.scrollLeft - 160*7, 0);
   }
   else{
      container.scroll(container.scrollLeft + 160*7, 0);
   }
}

function getMovies(url) {
   fetch(url).then(res => res.json()).then(data => {
      Create_BillBoard(data.results[Math.ceil( Math.random()*10 )]);
      data.results.slice(1).forEach(movie => {
         Create_Card_Movie(movie);
      });
   })
}

function Create_BillBoard(movie){
   billboard.innerHTML = `
      <img src="https://image.tmdb.org/t/p/original/${movie.backdrop_path}" alt="" width="100%">
      <div id="billboard-info">
         <h1>${movie.title}</h1>
         <p>${movie.overview}</p>
      </div>
      <div id="billboard-shadow"></div>`;
}


function Create_Card_Movie(movie){
   // Créer la carte
   let card = document.createElement('div');
   container.appendChild(card);

   if (movie.backdrop_path !== null){
   // THUMBNAIL
   /*
      // Mettre la backdrop_image du film
      let test = document.createElement('img');
      test.src = `https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`
      card.appendChild(test);

      let original = document.createElement('p');
      original.innerHTML = `${movie.original_title}`
      card.appendChild(original);

      let titre = document.createElement('p');
      titre.innerHTML = `${movie.title}`
      card.appendChild(titre);
      */
   // Coup d'oeil
      // Mettre la backdrop_image du film
      /*
      let backdrop_image = document.createElement('img');
      backdrop_image.src = `https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`
      card.appendChild(backdrop_image);
      */
      url_image = `https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`
      
      card.innerHTML = 
      `
      <input type="image" src="${url_image}" alt="${movie.title}" onclick="f(${movie.id})">
      `;

      dict[movie.id] = movie;
      
   }
   else{
      // Mettre le poster du film
      let cover = document.createElement('img');
      cover.src = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
      card.appendChild(cover);
   }
}


function f(movie){
   console.log(dict[movie]);
}


getMovies(`${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}&language=fr-FR`);


//getMovies(`https://api.themoviedb.org/3/search/movie?api_key=9589339f8da90a06aed6e3d2b11f4901&language=fr-FR&query=Harry Potter`);
//getMovies(`http://api.tmdb.org/3/search/person?api_key=9589339f8da90a06aed6e3d2b11f4901&query=Jonathan`);


