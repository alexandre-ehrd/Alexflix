function Billboard(movie, popularity_rank){
	return (`
      <section class="billboard">
         <img src="https://image.tmdb.org/t/p/original/${movie.backdrop_path}" alt="" width="100%"></img>
         <div class="billboard-informations">
            <div class="billboard-movie-title">
               <h1>${movie.title}</h1>
            </div>
   
            <div class="billboard-movie-rank">
               <i class="bi bi-award"></i>
               <p>N°${popularity_rank} en France aujourd'hui </p>
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


export {Billboard};





/* <img src="https://image.tmdb.org/t/p/original/${movie.backdrop_path}" alt="" width="100%"></img> */