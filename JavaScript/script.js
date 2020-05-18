function closeNav() {
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

}

function closeSettings() {
     customChosen = false;
     settingsNavOpen = false;
     settingsNav.classList.remove('settings-nav-open');
}

const settingsBtn = document.querySelector('.settings');
const settingsNav =  document.querySelector('.settings-nav');
const custom = document.querySelector('.custom');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const color3 = document.querySelector('.color3');
const color4 = document.querySelector('.color4');
const customInput = document.querySelector('.custom-input');
const customSave = document.querySelector('.custom-save');

let color1BG =getComputedStyle(document.documentElement).getPropertyValue('--color1');
let color2BG =getComputedStyle(document.documentElement).getPropertyValue('--color2');
let color3BG =getComputedStyle(document.documentElement).getPropertyValue('--color3');
let color4BG =getComputedStyle(document.documentElement).getPropertyValue('--color4');

     let customColor ;
     let customChosen = false;




     
/* ***********************************
.        ALL TO BE USED FUNCTIONS
*********************************** */
setInterval(()=>{
     timeBomb();
}, 500)

function  timeBomb(){
     let timerStroageArr = document.querySelectorAll('.timer-storage');
     let timerArr = document.querySelectorAll('.timer');

     for(let i=0; i<timerStroageArr.length; i++){
          if(timerStroageArr[i].textContent){
               let targetDate = new Date(timerStroageArr[i].textContent);
               let today = new Date();
               let diff = targetDate.getTime() - today.getTime();


          let daysRem = diff%dayDivisor;
          let hrsRem = daysRem% hrsDivisor;
          let minsRem = hrsRem%minsDivisor;

          let days = Math.floor(diff/dayDivisor);
          let hrs = Math.floor(daysRem/hrsDivisor);
          let mins = Math.floor((hrsRem%hrsDivisor)/minsDivisor);
          let secs = Math.floor((minsRem%hrsDivisor)/1000);

          days = (days<10) ? `0${days}` : days;
          hrs = (hrs<10) ? `0${hrs}` : hrs;
          secs = (secs<10) ? `0${secs}` : secs;

          if(diff>0){
               timerArr[i].textContent = `${days}d ${hrs}h ${mins}m ${secs}s`;
          }else{
               timerArr[i].textContent = `Time Expired`;
          }
          }
     }

}
function createTask() {


     //creating Task Div
     const taskDivBorn = document.createElement('div');
          taskDivBorn.classList.add('task-div');

     const taskUpperPartBorn = document.createElement('div');
          taskUpperPartBorn.classList.add('task-upper-part');

     const taskSlBorn = document.createElement('div');
          taskSlBorn.classList.add('sl');
     const taskTitleBorn = document.createElement('div');
          taskTitleBorn.classList.add('task-title');

     const taskCheckHolderBorn = document.createElement('div');
          taskCheckHolderBorn.classList.add('task-check-holder');
     const taskCheckBorn = document.createElement('input');
          taskCheckBorn.setAttribute('type', 'checkbox');
          taskCheckBorn.classList.add('task-check');

     const taskLowerPartBorn = document.createElement('div');
          taskLowerPartBorn.classList.add('task-lower-part');
     const taskTimeBorn = document.createElement('div');
          taskTimeBorn.classList.add('time')
     const taskDateBorn = document.createElement('div');
          taskDateBorn.classList.add('date');
     const taskTimerBorn = document.createElement('div');
          taskTimerBorn.classList.add('timer');
          const taskTimerStorageBorn = document.createElement('div');
               taskTimerStorageBorn.classList.add('timer-storage');



     //appending themselves
     taskDivBorn.appendChild(taskUpperPartBorn);
     taskDivBorn.appendChild(taskLowerPartBorn);

     taskLowerPartBorn.appendChild(taskTimeBorn);
     taskLowerPartBorn.appendChild(taskDateBorn);
     taskLowerPartBorn.appendChild(taskTimerBorn);
     taskLowerPartBorn.appendChild(taskTimerStorageBorn);


     taskUpperPartBorn.appendChild(taskSlBorn);
     taskUpperPartBorn.appendChild(taskCheckHolderBorn);
     taskUpperPartBorn.appendChild(taskTitleBorn);

     taskCheckHolderBorn.appendChild(taskCheckBorn);

     //giving inputs
     taskSlBorn.textContent = 00;
     taskDateBorn.textContent = taskDateInput.value;
     taskTimeBorn.textContent = taskTimeInput.value;


     //-----------task title input
     if(taskTitleInput.value){
          taskTitleBorn.textContent = taskTitleInput.value;
     }else{
          let randomSuggestionsNum = Math.floor(Math.random() * suggestions.length);
          let randomSuggestions = suggestions[randomSuggestionsNum];

          taskTitleBorn.style.fontStyle = 'italic';
          taskTitleBorn.style.fontSize = '80%';
          taskTitleBorn.textContent = randomSuggestions;
     }

     if(taskDateInput.value === '' && taskTimeInput.value === ''){
          taskTimerBorn.value = '';
     }else{
          taskTimerStorageBorn.textContent = taskDateInput.value;
          timeBomb();
     }

     //appending in the DOM
     tasksHolder.insertBefore(taskDivBorn, tasksHolder.firstChild);

     taskTimeInput.value = '';
     quickTaskInput.value = '';

}

function clearAll() {
     taskTitleInput.value = '';
     taskDateInput.value = '';
     taskTimeInput.value = '';
     quickTaskInput.value ='';
}

function clearAllTasks() {
     let allTasksArr = document.querySelectorAll('.task-div');
     for(let i=0; i<allTasksArr.length; i++){
          allTasksArr[i].remove();
     }
}

function numbering() {
     let allSlArr = document.querySelectorAll('.sl');
     for(let i=0; i<allSlArr.length; i++){
          let slNum = i + 1;
          slNum = (slNum < 10) ? `0${slNum}` : slNum;

          allSlArr[i].textContent = slNum;
     }
}

function newTaskPageToContainerPage() {
     setTimeout(()=>{
          newTaskPage.style.display = 'none';
          container.style.display = 'block';
          clearAll();
     }, 100)

}

function searchFilter() {
     const searchTerm = searchInput.value.toLowerCase();
     const allTitlesArr = document.querySelectorAll('.task-title');
     for(let i=0; i<allTitlesArr.length; i++){
          const title = allTitlesArr[i].textContent.toLowerCase();

          const searchTargetDiv = allTitlesArr[i].parentElement.parentElement;
          if(title.indexOf(searchTerm) != -1){
               searchTargetDiv.style.display = 'flex';
          } else{
               searchTargetDiv.style.display = 'none';
          }
     }
}




/* ***********************************
.              ALL GLOBAL VARIABLES
*********************************** */
//JavaScript
let navOpen = false;
let searchNavOpen = false;
let searchInputVisible = false;

const dayDivisor = 1000*60*60*24;
const hrsDivisor = 1000*60*60;
const minsDivisor = 1000*60;

const suggestions = ['How about hiking?', 'How about exercise?', 'How about studying?', 'How about crafting?', 'How about travelling?', 'How about fishing?', 'How about Golf?', 'How about boating?', 'How about  a stroll?']

//++++++++++++++CONTAINER PAGE
const container = document.querySelector('.container');
const main = document.querySelector('.main');
const tasksHolder = document.querySelector('.tasks-holder');

//add button (Page Change)
const addBtn = document.querySelector('.add-btn');

//nav related
const hamPlate = document.querySelector('.ham-plate');
const ham = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

//--------navs buttons
const clearAllTasksBtn = document.querySelector('.clear-all-tasks-btn');
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

//clear all button
const clearAllBtn = document.querySelector('.clear-all-btn');






/* ***********************************
.              REAL JavaScript STARTS
*********************************** */

/* -----------------------------------------------------
.                    CONTAINER PAGE
----------------------------------------------------- */

//--------------------------ADD Button
addBtn.addEventListener('click', ()=>{

          newTaskPage.style.display = 'block';
          container.style.display = 'none';


})



// ---------------Hamburger
hamPlate.addEventListener('click', ()=>{
     closeNav();
     closeSettings();
})










// ---------------Settings
settingsBtn.addEventListener('click', ()=>{
          settingsNavOpen = true;
          settingsNav.classList.add('settings-nav-open');
})

custom.addEventListener('click', ()=>{
     if (customChosen) {
          customColor = customInput.value;
          customChosen = false;
          document.documentElement.style.setProperty('--mainColor', customColor);
          closeSettings();
          closeNav();
          customInput.style.visibility = 'visible';
          customSave.style.visibility = 'hidden';
     }else{
          customChosen = true;
          customInput.style.visibility = 'hidden';
          customSave.style.visibility = 'visible';

     }
})

color1.addEventListener('click', ()=>{
     closeSettings();
     closeNav();
     document.documentElement.style.setProperty('--mainColor', color1BG);
})

color2.addEventListener('click', ()=>{
     closeSettings();
     closeNav();
     document.documentElement.style.setProperty('--mainColor', color2BG);
})

color3.addEventListener('click', ()=>{
     closeSettings();
     closeNav();
     document.documentElement.style.setProperty('--mainColor', color3BG);
})

color4.addEventListener('click', ()=>{
     closeSettings();
     closeNav();
     document.documentElement.style.setProperty('--mainColor', color4BG);
})


































// -------------------Search Button
searchBtn.addEventListener('click', ()=>{
     searchInput.value ='';
     searchFilter();

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

//---------------------Search Filter
searchInput.addEventListener('keyup', ()=>{
          searchFilter();
})


//--------------------------Quick Add Button
subAddBtn.addEventListener('click', ()=>{
     taskTitleInput.value = quickTaskInput.value;
     createTask();
     numbering();
});



//----------------------Clear All Tasks btn
clearAllTasksBtn.addEventListener('click', ()=>{
     clearAllTasks();
})



//-------------------------Remove Task
tasksHolder.addEventListener('click', (e)=>{
     if(e.target.className === 'task-check'){
          let targetTaskDiv = e.target.parentElement.parentElement.parentElement;
          targetTaskDiv.remove();

          numbering();
     }
})




/* -----------------------------------------------------
.                    NEW TASK PAGE
----------------------------------------------------- */

//--------------------------New Task Back Button
newTaskPageBackBtn.addEventListener('click', ()=>{

     newTaskPageToContainerPage();

})



//--------------------------New Task Save Button
saveBtn.addEventListener('click', ()=>{
     createTask();
     numbering();
     newTaskPageToContainerPage();
});



//--------------------------Clear All
clearAllBtn.addEventListener('click', ()=>{
     clearAll();
});
