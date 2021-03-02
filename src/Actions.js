import UnimportantTask from "./Un_important.js";
import ImportantTask from "./Important.js";
import VeryimportantTask from "./Very_important.js";

import Task from "./Task";

export function show_hide(addBtn){
    console.log('add Button');

    let   add_hide = document.querySelector('div.add_container');
    if (add_hide.classList.contains("hide_input")) {
    add_hide.classList.toggle("show_input");
    } 
}

export function createTask(event) {
      event.preventDefault();

    let text = document.querySelector('input[type="text"]');
    let option = document.querySelectorAll('option');
    let li = document.createElement('li');

    if (option[1].selected) {
        new UnimportantTask(text.value).create(li);
        text.value = '';
        option[1].selected = false;

    } else if (option[2].selected) {
        new ImportantTask(text.value).create(li);
        text.value = '';
        option[2].selected = false;
        
    } else if (option[3].selected) {
        new VeryimportantTask(text.value).create(li);
        text.value = '';
        option[3].selected = false;
    }
    
    if(text.value === '') return ;

    console.log(text.value)
}