const API_KEY = 'api_key=9589339f8da90a06aed6e3d2b11f4901';
const BASE_URL = 'https://api.themoviedb.org/3';


// Elément parent qui contient toutes les cartes
const billboard = document.getElementById("billboard");;

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

function getMovies(movie_container, url) {
   fetch(url).then(res => res.json()).then(data => {
      Create_BillBoard(data.results[Math.ceil( Math.random()*10 )]);
      data.results.slice(1).forEach(movie => {
         Create_Card_Movie(movie_container, movie);
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


function Create_Card_Movie(movie_container, movie){
   // Créer la carte
   let card = document.createElement('div');
   movie_container.appendChild(card);

   if (movie.backdrop_path !== null){
   // THUMBNAIL
      url_image = `https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`
      card.classList.add("card")
      card.innerHTML = 
      `
         <input type="image" src="${url_image}" alt="${movie.title}" onclick="f(${movie.id})">
         <!-- 
         <div class="previsualisation-card">
            <img src="${url_image}" alt="${movie.title}">
         </div> 
         -->
      `;

      dict[movie.id] = movie;
      
   }
}


function f(movie){
   console.log(dict[movie]);
}


getMovies(most_popular, `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}&language=fr-FR`);

getMovies(harry_potter, `https://api.themoviedb.org/3/search/movie?api_key=9589339f8da90a06aed6e3d2b11f4901&language=fr-FR&query=Harry Potter`);
//getMovies(`http://api.tmdb.org/3/search/person?api_key=9589339f8da90a06aed6e3d2b11f4901&query=Jonathan`);


