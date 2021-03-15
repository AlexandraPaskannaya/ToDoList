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
   console.log('checked')
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
    console.log('loading all tasks');

    let lsUnImpt = localStorage.getItem('unImportantStore').length;
    let lsImpt = localStorage.getItem('importantStore').length;
    let lsVeryImpt = localStorage.getItem('veryImportantStore').length;
    let li = document.createElement('li');
    li.classList.add('show');


   if (lsUnImpt >= 0) {
        
       for (let i = 0; i < lsUnImpt; i++) {
            const key = localStorage.key(i);

             if(key == 'unImportantStore') {

                const value = JSON.parse(localStorage.getItem('unImportantStore'));
                console.log(value, key, 1);
                new UnimportantTask(value).create(li);;
                //document.querySelector('div.unimportant ul').innerHTML = value;
            }
        }
    }

   if (lsImpt >= 0) {
        
        for (let i = 0; i < lsImpt; i++) {
            const key = localStorage.key(i);

             if(key == 'importantStore') {

                const value = JSON.parse(localStorage.getItem('importantStore'));
                console.log(value, key, 2);
                document.querySelector('div.important ul').innerHTML = value;
                 //new ImportantTask(text.value).create(li);
             }
        }
    }

   if (lsVeryImpt >= 0) {

        for (let i = 0; i < lsVeryImpt; i++) {
            const key = localStorage.key(i);
            
             if(key == 'veryImportantStore') {
               
                const value = JSON.parse(localStorage.getItem('veryImportantStore'));
                console.log(value, key, 3);
                document.querySelector('div.veryimportant ul').innerHTML = value;
                //new VeryimportantTask(text.value).create(li);
             }
        }
    } 
}
