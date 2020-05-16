const ham = document.querySelector('.hamburger');

const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');
const appBanner = document.querySelector('.app-banner');

let searchInputVisible = false;

// ---------------Hamburger
ham.addEventListener('click', ()=>{
     ham.classList.toggle('clicked');
})


// -------------------Search Button
searchBtn.addEventListener('click', ()=>{
     if(searchInputVisible){
          searchInput.style.display = 'none';
          appBanner.style.display = 'block';

          searchInputVisible = false;
     }else{
          searchInput.style.display = 'block';
          appBanner.style.display = 'none';

          searchInputVisible = true;
     }
})
