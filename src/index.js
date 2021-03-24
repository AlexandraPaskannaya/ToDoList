import {show_hide, createTask, checkedTask, removeTask, hideTasks, tasksfromlocal, editTasks} from "./Actions.js";

const addBtn = document.querySelector('button[data-action="addBtn"]');
const createBtn = document.querySelector('button[data-action="create"]');
const titles = document.querySelector('div.select_list');
//const editBtn = document.getElementsByClassName('editBtn');

window.addEventListener('load', () => tasksfromlocal());
   

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

//edit tasks
titles.addEventListener('click', (event) => editTasks(event, addBtn));


