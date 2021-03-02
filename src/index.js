import {show_hide, createTask} from "./Actions.js";
import {Task} from "./Task.js";


const addBtn = document.querySelector('button[data-action="addBtn"]');
const createBtn = document.querySelector('button[data-action="create"]');

//show form
addBtn.addEventListener('click', (event) => show_hide(event.target));

//create a new task
createBtn.addEventListener('click', (event) => createTask(event));

