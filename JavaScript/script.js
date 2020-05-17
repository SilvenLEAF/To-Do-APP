//JavaScript
let navOpen = false;
let searchInputVisible = false;

//++++++++++++++CONTAINER PAGE
const container = document.querySelector('.container');

//add button (Page Change)
const addBtn = document.querySelector('.add-btn');

//nav related
const hamPlate = document.querySelector('.ham-plate');
const ham = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

//footer elements
const quickTaskInput = document.querySelector('.quick-task');
const subAddBtn = document.querySelector('.sub-add-btn');
const copyright = document.querySelector('.copyright');

//search related
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');
const appBanner = document.querySelector('.app-banner');





//++++++++++++++NEW TASK PAGE
const newTaskPage = document.querySelector('.new-task-page');

//back button (Page Change)
const newTaskPageBackBtn = document.querySelector('.new-task-page-back-btn');

//save button
const saveBtn = document.querySelector('.save-btn');
const taskTitleInput = document.querySelector('.task-title-input');
const taskDateInput = document.querySelector('.task-date-input');
const taskTimeInput = document.querySelector('.task-time-input');








/* ***********************************
.              REAL JavaScript STARTS
*********************************** */

/* -----------------------------------------------------
.                    CONTAINER PAGE
----------------------------------------------------- */

//--------------------------ADD Button
addBtn.addEventListener('click', ()=>{

     setTimeout(()=>{
          newTaskPage.style.display = 'block';
          container.style.display = 'none';
     }, 100)

})



// ---------------Hamburger
hamPlate.addEventListener('click', ()=>{

     if(navOpen){
          navOpen = false;
          ham.classList.remove('clicked');

          nav.classList.remove('nav-open');
          quickTaskInput.style.display = 'flex';
          subAddBtn.style.display = 'flex';
          copyright.style.display = 'none';


     }else{
          navOpen = true;
          ham.classList.add('clicked');

          nav.classList.add('nav-open');
          quickTaskInput.style.display = 'none';
          subAddBtn.style.display = 'none';
          copyright.style.display = 'flex';

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





/* -----------------------------------------------------
.                    NEW TASK PAGE
----------------------------------------------------- */

//--------------------------New Task Back Button
newTaskPageBackBtn.addEventListener('click', ()=>{

     setTimeout(()=>{
          newTaskPage.style.display = 'none';
          container.style.display = 'block';
     }, 100)

})
