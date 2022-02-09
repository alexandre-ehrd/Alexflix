function Header() {
   return (`
   <header class="header">
      <a href="#" style="display: flex; align-items: center;">
         <img src="Images/Logo.png" id="Logo" alt="">
      </a>
      <a class="header-buton header-buton-active" href="">Accueil</a>
      <a class="header-buton" href="">Séries</a>
      <a class="header-buton" href="">Films</a>
      <a class="header-buton" href="">Nouveautés les plus regardées</a>
      <a class="header-buton" href="">Ma liste</a>
      <div class="header-search-container">
         <div class="header-search-container-button">
            <i class="bi bi-search"></i>
         </div>
         <input type="text" class="header-search-container-input" id="site-search" name="q" aria-label="Search through site content">
         <div class="header-search-container-button">
            <i class="bi bi-x"></i>
         </div>
      </div>
   </header>
   `);
}


document.addEventListener('scroll', (event) => {
   if (window.scrollY === 0) {
      document.querySelector("header").classList.remove("header-black")
   }
   else {
      document.querySelector("header").classList.add("header-black")
   }
});

export {Header};