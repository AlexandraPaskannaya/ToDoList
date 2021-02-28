import Task from "./Task.js";
import deleteBtn from "./assets/images/delete.png";


const addBtn_button = document.querySelector('button[data-action="addBtn"]');
const add_hide = document.querySelector('.add_container');

addBtn_button.addEventListener("click", function() {
console.log('add Button');

if (add_hide.classList.contains("hide_input")) {
 add_hide.classList.toggle("show_input");
} 
this.classList.toggle("active");
})