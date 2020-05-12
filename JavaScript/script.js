/* *******************************
.          ALL GLOBAL VARIABLES
******************************* */

const addItemInput = document.querySelector('.add-item-input');
const addItemBtn = document.querySelector('.add-item-btn');
const hideAllCheck = document.querySelector('.hide-all-check');
const clearAllBtn = document.querySelector('.clear-all-btn');

const itemsHolder = document.querySelector('.items-holder');

const randomDefault = ['Let\'s do something', 'How about learning a new skill?', 'Wanna set a goal?', 'Nothing added! You forgot!!', 'How about reading a new book', 'How about going on hiking?', 'How about hanging out with friends?', 'How about exercise?', 'How about traveling abroad?', 'How about rating us in the Play Store?']

/* *******************************
.         FUNCTIONS TO-BE-USED
******************************* */
function numbering(){
     const itemsArr = document.querySelectorAll('.item');
     for(let i=0; i<itemsArr.length; i++){
          itemsArr[i].children[0].textContent = i+1;
     }
}

/* --------------------------------------------------------
.              REAL JavaScript STARTS
--------------------------------------------------------- */

// -------------------Adding Items----------------------
addItemBtn.addEventListener('click', ()=>{
     let inputTitle = addItemInput.value;
     addItemInput.value = '';


     //creating the Item elements
     let itemClone = document.createElement('div');
     itemClone.classList.add('item');

     let slClone = document.createElement('div')
     slClone.classList.add('sl');

     let titleClone = document.createElement('div')
     titleClone.classList.add('title');

     let deteltBtnClone = document.createElement('div');
     deteltBtnClone.classList.add('delete-btn');

     //Appending them
     itemClone.appendChild(slClone);
     itemClone.appendChild(titleClone);
     itemClone.appendChild(deteltBtnClone);

     if(inputTitle){
          titleClone.textContent = inputTitle;
     } else{
          let randomDefaultNum = Math.floor(Math.random()* randomDefault.length);
          titleClone.style.fontStyle = 'italic';
          titleClone.style.fontSize = '90%';
          titleClone.textContent = randomDefault[randomDefaultNum];
     }
     deteltBtnClone.textContent = 'Delete';

     //Adding in the DOM (same)
     itemsHolder.appendChild(itemClone);

     numbering();

})
// --------------------------------------------------------



// ----------------Removing Items---------------------
itemsHolder.addEventListener('click', (e)=>{
     if(e.target.className === 'delete-btn'){
          const targetItem = e.target.parentElement;

          targetItem.parentElement.removeChild(targetItem);
          numbering();
     }
})
// --------------------------------------------------------



// --------------------Hide Items-----------------------
hideAllCheck.addEventListener('change', ()=>{
     if(hideAllCheck.checked){
          itemsHolder.style.display ='none';
     } else{
          itemsHolder.style.display ='flex';
          }
     })
// --------------------------------------------------------



// -----------------Clear All Items---------------------
clearAllBtn.addEventListener('click', ()=>{
     const itemsArr = document.querySelectorAll('.item');

     for(let i=0; i<itemsArr.length; i++){
          itemsArr[i].remove();
     }
})
// --------------------------------------------------------
