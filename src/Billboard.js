function Fetch_Billboard(URL) {
   var min = 0;
   var max = 9;
   var popularity_rank = Math.round(Math.random() * (max - min) + min);

   return new Promise((resolve, reject) => {
      fetch(URL).then(response => {
         if (response.ok){
            response.json().then(movies_list => {
               Billboard(movies_list['results'][popularity_rank], popularity_rank)
               console.log("Billboard")
               resolve();
            })
         }
         else{
            console.error(`L\'Api TMDB renvoie une erreur pour la requête ${Carousel_Request}`);
            reject();
         }
      })
   })
}


function Billboard(movie, popularity_rank){
   var title = function() {
      return (movie.title ? movie.title : movie.name);
   }

   const BODY = document.body;
	BODY.innerHTML += (`
      <section class="billboard">
         <img src="https://image.tmdb.org/t/p/original/${movie.backdrop_path}" alt="${title()}" width="100%"></img>
         <div class="billboard-informations">
            <div class="billboard-movie-title">
               <h1>${title()}</h1>
            </div>
   
            <div class="billboard-movie-rank">
               <i class="bi bi-award"></i>
               <p>N°${popularity_rank+1} en France aujourd'hui </p>
            </div>
   
            <div class="billboard-movie-synopsis">
               <p>${movie.overview}</p>
            </div>
   
            <div class="billboard-movie-buttons-container">
               <div class="billboard-movie-button" id="billboard-movie-button-liste">
                  <i class="bi bi-bookmark-plus"></i>
                  <p>Ma liste</p>
               </div>
               <div class="billboard-movie-button" id="billboard-movie-button-information">
                  <i class="bi bi-info-circle"></i>
                  <p>Plus d'infos</p>
               </div>
            </div>
         </div>
         <div class="billboard-shadow-bottom"></div>
      </section>
	`);
}

export {Fetch_Billboard};