function Billboard(movie){
	return (`
      <img src="https://images.unsplash.com/photo-1644063414496-5e48002d614b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" width="100%">
      <div id="billboard-info">
	      <h1>{movie.title}</h1>
	      <p>{movie.overview}</p>
         <div>
         <p>Ma liste</p>
         <p>Plus d'infos</p>
         </div>
      </div>
      <div id="billboard-shadow"></div>
	`);
	
}


export {Billboard};





/* <img src="https://image.tmdb.org/t/p/original/${movie.backdrop_path}" alt="" width="100%"></img> */