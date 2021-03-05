import {show_hide, createTask, checkedTask, removeTask} from "./Actions.js";
import Task from "./Task.js";


const addBtn = document.querySelector('button[data-action="addBtn"]');
const createBtn = document.querySelector('button[data-action="create"]');
const titles = document.querySelector('div.select_list');

//show form
addBtn.addEventListener('click', (event) => show_hide(event.target));

//create a new task
createBtn.addEventListener('click', (event) => createTask(event));

//mark a checked task
titles.addEventListener('click', checkedTask);

//remove Task
titles.addEventListener('click', removeTask);

//show-hide titles
//titles.addEventListener('click', new Task().hideColumn);