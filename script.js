const API_KEY = 'api_key=9589339f8da90a06aed6e3d2b11f4901';
const BASE_URL = 'https://api.themoviedb.org/3';


// Elément parent qui contient toutes les cartes
const container = document.querySelector(".most_popular");


function getMovies(url) {
   fetch(url).then(res => res.json()).then(data => {
      data.results.forEach(movie => {
         //console.log(movie);
         console.log(movie);
         Create_Card_Movie(movie);
      });
   })
}

function Scroll(direction){
   if (direction === 'Left'){
      container.scroll(container.scrollLeft - 160*7, 0);
   }
   else{
      container.scroll(container.scrollLeft + 160*7, 0);
   }
}


function Create_Card_Movie(movie){
   // Créer la carte
   let card = document.createElement('div');
   container.appendChild(card);

   if (movie.backdrop_path !== null){
   // THUMBNAIL
      // Mettre la backdrop_image du film
      let test = document.createElement('img');
      test.src = `https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`
      card.appendChild(test);
      console.log("Test Github")

   // Coup d'oeil
      // Mettre la backdrop_image du film
      /*
      let backdrop_image = document.createElement('img');
      backdrop_image.src = `https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`
      card.appendChild(backdrop_image);
      */

   }
   else{
      // Mettre le poster du film
      let cover = document.createElement('img');
      cover.src = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
      card.appendChild(cover);
   }
}



getMovies(`${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}&language=fr-FR`);
//getMovies(`https://api.themoviedb.org/3/search/movie?api_key=9589339f8da90a06aed6e3d2b11f4901&language=fr-FR&query=Harry Potter`);




