function Header() {
   return (`
   <header class="header">
      <a href="#" style="display: flex; align-items: center;">
         <img src="Images/Logo.png" id="Logo" alt="">
      </a>
      <a class="header-buton header-buton-active" href="">Accueil</a>
      <a class="header-buton" href="">Films</a>
      <a class="header-buton" href="">Séries</a>
      <a class="header-buton" href="">Ma liste</a>
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