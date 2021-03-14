import {show_hide, createTask, checkedTask, removeTask, hideTasks} from "./Actions.js";

const addBtn = document.querySelector('button[data-action="addBtn"]');
const createBtn = document.querySelector('button[data-action="create"]');
const titles = document.querySelector('div.select_list');


window.addEventListener('load', () => {
    console.log("load all tasks")

    //let list = document.querySelector('div.select_list');

    /*if (localStorage.getItem('unImportantStore') !== null) {
        JSON.parse(localStorage.getItem('unImportantStore'))
    } else if (localStorage.getItem('importantStore') !== null) {
       JSON.parse(localStorage.getItem('importantStore'))
    } else if (localStorage.getItem('veryImportantStore') !== null){
        JSON.parse(localStorage.getItem('veryImportantStore'));
        }*/
});
   

//show form
addBtn.addEventListener('click', (event) => show_hide(event.target));

//create a new task
createBtn.addEventListener('click', (event) => createTask(event));

//mark a checked task
titles.addEventListener('click', checkedTask);

//remove Task
titles.addEventListener('click', (event) => removeTask(event));

//show-hide titles
titles.addEventListener('click', hideTasks);