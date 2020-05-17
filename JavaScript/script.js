const main = document.querySelector('.main');

const hamPlate = document.querySelector('.ham-plate');
const ham = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

const quickTaskInput = document.querySelector('.quick-task');
const subAddBtn = document.querySelector('.sub-add-btn');
const copyright = document.querySelector('.copyright');
let navOpen = false;

const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');
const appBanner = document.querySelector('.app-banner');

let searchInputVisible = false;

const newTaskBackBtn = document.querySelector('.new-task-back-btn');
const addBtn = document.querySelector('.add-btn');
const container = document.querySelector('.container');
const newTaskPage = document.querySelector('.new-task-page');











// ---------------Hamburger

hamPlate.addEventListener('click', ()=>{
     if(navOpen){
          navOpen = false;
          ham.classList.remove('clicked');

          nav.classList.remove('nav-open');
          quickTaskInput.style.display = 'flex';
          subAddBtn.style.display = 'flex';
          copyright.style.display = 'none';

          main.style.zIndex = '0';

     }else{
          navOpen = true;
          ham.classList.add('clicked');

          nav.classList.add('nav-open');
          quickTaskInput.style.display = 'none';
          subAddBtn.style.display = 'none';
          copyright.style.display = 'flex';

          main.style.zIndex = '15';
     }

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



//--------------------------New Task Back Button
newTaskBackBtn.addEventListener('click', ()=>{

     setTimeout(()=>{
          newTaskPage.style.display = 'none';
          container.style.display = 'block';
     }, 100)

})



//--------------------------ADD Button
addBtn.addEventListener('click', ()=>{

     setTimeout(()=>{
          newTaskPage.style.display = 'block';
          container.style.display = 'none';
     }, 100)

})
