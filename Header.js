function Header() {
   console.log("Banner")
   return (`
   <header class="page-header">
      <a href="#" style="display: flex; align-items: center;">
         <img src="Images/Logo.png" id="Logo" alt="">
      </a>

      <ul>
         <li><a href="">Accueil</a></li>
         <li><a href="">Films</a></li>
         <li><a href="">Séries</a></li>
         <li><a href="">Ma liste</a></li>
      </ul>
   </header>
   `);
}


export {Header};