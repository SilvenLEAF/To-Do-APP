const ham = document.querySelector('.hamburger');

const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');
const appBanner = document.querySelector('.app-banner');

let searchInputVisible = false;

const newTaskBackBtn = document.querySelector('.new-task-back-btn');
const addBtn = document.querySelector('.add-btn');
const container = document.querySelector('.container');
const newTaskPage = document.querySelector('.new-task-page');

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
