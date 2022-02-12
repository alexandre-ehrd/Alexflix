const API_KEY = '9589339f8da90a06aed6e3d2b11f4901';

const requests = [
   {
      name: 'Seulement sur Netflix',
      request: `/discover/tv?api_key=${API_KEY}&language=fr-FR&with_networks=213`
   },
   {
      name: 'Action',
      request: `/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=28`
   },
   {
      name: 'Aventure',
      request: `/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=12`
   },
   {
      name: 'Animation',
      request: `/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=16`
   },
   {
      name: 'Comédie',
      request: `/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=35`
   },
   {
      name: 'Crime',
      request: `/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=80`
   },
   {
      name: 'Documentaire',
      request: `/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=99`
   },
   {
      name: 'Drame',
      request: `/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=18`
   },
   {
      name: 'Familial',
      request: `/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=10751`
   },
   {
      name: 'Fantastique',
      request: `/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=14`
   },
   {
      name: 'Histoire',
      request: `/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=36`
   },
   {
      name: 'Horreur',
      request: `/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=27`
   },
   {
      name: 'Musique',
      request: `/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=10402`
   },
   {
      name: 'Mystère',
      request: `/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=9648`
   },
   {
      name: 'Romance',
      request: `/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=10749`
   },
   {
      name: 'Science-Fiction',
      request: `/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=878`
   },
   {
      name: 'Téléfilm',
      request: `/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=10770`
   },
   {
      name: 'Thriller',
      request: `/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=53`
   },
   {
      name: 'Guerre',
      request: `/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=10752`
   },
   {
      name: 'Western',
      request: `/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=37`
   }
]

export {requests};