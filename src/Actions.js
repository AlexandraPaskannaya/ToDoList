import UnimportantTask from "./Un_important.js";
import ImportantTask from "./Important.js";
import VeryimportantTask from "./Very_important.js";

import Task from "./Task";
import { unImportantStore, importantStore, veryImportantStore} from "./Store.js";

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
    text.value = text.value.trim();
    
    li.classList.add('show');

    const { value } = text;
    console.log('createTask', value);

    if(value === '' || findDublicate(value)) {
        console.log('error');
        return;
    }
    

     if (option[1].selected) {
        new UnimportantTask(text.value).create(li);
        text.value = '';
        option[1].selected = false;
        localStor();      
        

    } else if (option[2].selected) {
        new ImportantTask(text.value).create(li);
        text.value = '';
        option[2].selected = false;
        localStor();
        
    } else if (option[3].selected) {
        new VeryimportantTask(text.value).create(li);
        text.value = '';
        option[3].selected = false;
        localStor();
    }  
  
}

export function checkedTask(event) {
    if (event.target.tagName != 'INPUT') {
        return;
    } else {
        console.log('true')
        event.target.setAttribute('checked', event.target.checked);
                
        const taskType = event.target.parentElement.dataset;
        const taskName = Object.keys(taskType)[0];

        console.log(taskType, 'taskType')

    if(taskName === 'unimportant') {

        const unImportantIndex = unImportantStore.findIndex(unimportant => unimportant.id == taskType[taskName]);
        console.log(unImportantIndex, 'unImportantIndex');

        unImportantStore[unImportantIndex].checked = event.target.checked;
        console.log(unImportantStore, 'unImportantStore')

        localStor();

    } else if (taskName === 'important') {

        const importantIndex = importantStore.findIndex(important => important.id == taskType[taskName]);
        console.log(importantIndex, 'importantIndex');

        importantStore[importantIndex].checked = event.target.checked;
        console.log(importantStore, 'importantStore')

        localStor();       
    } else if (taskName === 'veryimportant') {
     
        const veryImportantIndex = veryImportantStore.findIndex(veryimportant => veryimportant.id == taskType[taskName]);
        console.log(veryImportantIndex, 'veryImportantIndex');

        veryImportantStore[veryImportantIndex].checked = event.target.checked;
        console.log(veryImportantStore, 'veryImportantStore')

        localStor();
        }
    }
}

export function removeTask(event) {
    console.log('remove')
       
      if (event.target.classList.contains('deletBtn') && event.target.closest('li').firstElementChild.checked === true) {
     
        const taskType = event.target.parentElement.dataset;
        const taskName = Object.keys(event.target.parentElement.dataset)[0];
        event.target.closest('li').remove();

        if (taskName === 'unimportant') {
            const unImportantIndex = unImportantStore.findIndex(unimportant => unimportant.id == taskType[taskName]);
            unImportantStore.splice(unImportantIndex, 1);
            calculateAttributes(unImportantStore, 'data-unimportant');
            localStor();
            console.log('unImportantStore', unImportantStore);

        } else if (taskName === 'important') {
            const importantIndex = importantStore.findIndex(important => important.id == taskType[taskName]);
            importantStore.splice(importantIndex, 1);
            calculateAttributes(importantStore, 'data-important');
            localStor();
            console.log('importantStore', importantStore);

        } else if (taskName === 'veryimportant') {
            const veryImportantIndex = veryImportantStore.findIndex(veryimportant => veryimportant.id == taskType[taskName]);
            veryImportantStore.splice(veryImportantIndex, 1);
            calculateAttributes(veryImportantStore, 'data-veryimportant');
            localStor();
            console.log('veryImportantStore', veryImportantStore);
        }
    } else {
        return
    }

  
}

function calculateAttributes(store, attribute) {
    const list = document.querySelectorAll(`[${attribute}]`);

    console.log('list', list);
    
    for (let i in store) {
        store[i].id = i;
        list[i].setAttribute(attribute, i);
    }
}

export function hideTasks(event) {

   if (event.target.tagName == 'H3') {
       for(let li of Array.from(event.target.nextElementSibling.children)){
            if(li.firstElementChild.checked == true){
                li.classList.toggle('hide');
               li.classList.add('show');
           }
       }
   } else {
       return;
   }
}

function findDublicate(name){

    let unImportantIndex = unImportantStore.findIndex(elem => elem.name === name);
    let importantIndex = importantStore.findIndex(elem => elem.name === name);
    let veryImportantIndex = veryImportantStore.findIndex(elem => elem.name === name);

    console.log('findDublicate', unImportantIndex, importantIndex, veryImportantIndex);

    if(unImportantIndex === -1 && importantIndex === -1 && veryImportantIndex === -1) {
        return false;
    } else {
        return true;
    }
}

function localStor(){

    localStorage.setItem('unImportantStore', JSON.stringify(unImportantStore));

    localStorage.setItem('importantStore', JSON.stringify(importantStore));   

    localStorage.setItem('veryImportantStore', JSON.stringify(veryImportantStore));

}

export function tasksfromlocal() {

    let lsUnImpt = JSON.parse(localStorage.getItem('unImportantStore'));
    let lsImpt = JSON.parse(localStorage.getItem('importantStore'));
    let lsVeryImpt = JSON.parse(localStorage.getItem('veryImportantStore'));
    
    console.log('loading all tasks', lsUnImpt, lsImpt, lsVeryImpt);

    if (lsUnImpt.length >= 0) {
               
       for (let i = 0; i < lsUnImpt.length; i++) {
            
            let li = document.createElement('li');
            li.classList.add('show');

            new UnimportantTask(lsUnImpt[i].name, lsUnImpt[i].checked).create(li);
            }          
    }
    
    if (lsImpt.length >= 0) {
               
        for (let i = 0; i < lsImpt.length; i++) {
             
             let li = document.createElement('li');
             li.classList.add('show');
 
             new ImportantTask(lsImpt[i].name, lsImpt[i].checked).create(li);
             }          
    }

      
    if (lsVeryImpt.length >= 0) {
               
        for (let i = 0; i < lsVeryImpt.length; i++) {
             
             let li = document.createElement('li');
             li.classList.add('show');
 
             new VeryimportantTask(lsVeryImpt[i].name, lsVeryImpt[i].checked).create(li);
             }          
    }
}


export function editTasks(event) {
    console.log('edit');

    let add_hide = document.querySelector('div.add_container');

    if (add_hide.classList.contains("hide_input")) {
        add_hide.classList.add("show_input");
    } 
    

    if (event.target.classList.contains('editBtn') && event.target.parentElement.firstElementChild.checked === false) {
             
        const inputText = document.querySelector('input[type="text"]');
        inputText.value = event.target.previousElementSibling.textContent;
        const select = document.querySelector('select'); 
        /*const listContainer = Array.from(document.querySelector('.select_list').children);
        const editTask = Array.from(listContainer[0].lastElementChild.children).find(el => el.classList.contains('edit'));*/

        if( inputText.value = event.target.previousElementSibling.textContent) {

            console.log(inputText.value);
            
            event.target.previousElementSibling.textContent = inputText.value;

        }

       if (event.target.closest('div').className === 'unimportant') {

            select.value = 'unimportant';
            event.target.parentElement.classList.add('edit');
            event.target.closest('.unimportant').classList.add('edit');
            console.log('unimportant edit');
           
           
        } else if (event.target.closest('div').className === 'important') {

            select.value = 'important';
            event.target.parentElement.classList.add('edit');
            event.target.closest('.important').classList.add('edit');
            
            console.log('important edit')

        } else if (event.target.closest('div').className === 'veryimportant') {

            select.value = 'veryimportant';
            event.target.parentElement.classList.add('edit');
            event.target.closest('.veryimportant').classList.add('edit');

            console.log('veryimportant edit')

        }

    } else return 

}

/*
 function changeSelect(inputText) {

    const listContainer = Array.from(document.querySelector('.select_list').children);
    const select = document.querySelector('select');

    if (listContainer[0].classList.contains('edit')){
        const editTask = Array.from(listContainer[0].lastElementChild.children).find(el => el.classList.contains('edit'));
        const taskType = editTask.dataset;
        const taskTypeName = Object.keys(editTask.dataset)[0];

        if(select.value === 'unimportant') {

            Array.from(editTask.children)[1].textContent = inputText.value.trim();   

        } else {
            editTask.remove();
        }


    } else return

}*/

