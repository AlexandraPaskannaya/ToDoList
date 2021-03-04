import UnimportantTask from "./Un_important.js";
import ImportantTask from "./Important.js";
import VeryimportantTask from "./Very_important.js";

import Task from "./Task";
import { UnimportantStore, ImportantStore, VeryimportantStore} from "./Store.js";

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

    if(text.value === '') return ;
    console.log(text.value)

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
}

export function checkedTask(event) {
   
    if (event.target.tagName != 'INPUT') {
        return;
    } else {
        console.log('true')
        event.target.setAttribute('checked', event.target.checked);
                
        let taskType = event.target.nextElementSibling.parentElement.dataset;
        let taskName = Object.keys(taskType)[0];

    if(taskName === 'un_impotrant') {

        findCheckedStore(UnimportantStore, taskType, taskName, event.target.checked) 
        
    } else if (taskName === 'impotrant') {

        findCheckedStore(ImportantStore, taskType, taskName, event.target.checked) 
       
    } else if (taskName === 'very_impotrant') {
     
        findCheckedStore(VeryimportantStore, taskType, taskName, event.target.checked) 

        }
    }
}

function findCheckedStore(store, type, name, checkedStatus) {
    const storeElement = store.findIndex(element => element.id.toString() === type[name]);
    store[storeElement].checked = checkedStatus;
    console.log('store', store);
}

export function removeTask(event) {
    if (event.target.tagName === 'IMG' && event.target.closest('li').firstElementChild.checked === true) {
        let taskType = event.target.parentElement.dataset;
        let taskName = Object.keys(event.target.parentElement.dataset)[0];
        event.target.closest('li').remove();

        if (taskName === 'un_impotrant') {
            const UnimpotrantIndex = UnimportantStore.findIndex(un_impotrant => un_impotrant.id.toString() === taskType[taskName]);
            UnimportantStore.splice(UnimpotrantIndex, 1);
            calculateAttributes(UnimportantStore, 'data-un_important');

            console.log('UnimportantStore', UnimportantStore);

        } else if (taskName === 'impotrant') {
            const ImpotrantIndex = ImportantStore.findIndex(impotrant => impotrant.id.toString() === taskType[taskName]);
            ImportantStore.splice(ImpotrantIndex, 1);
            calculateAttributes(ImportantStore, 'data-important');

            console.log('ImportantStore', ImportantStore);

        } else if (taskName === 'very_impotrant') {
            const VetyimpotrantIndex = VeryimportantStore.findIndex(very_impotrant => very_impotrant.id.toString() === taskType[taskName]);
            VeryimportantStore.splice(VetyimpotrantIndex, 1);
            calculateAttributes(VeryimportantStore, 'data-very_important');

            console.log('VeryimportantStore', VeryimportantStore);
        }
    } else {
        return
    }
}

function calculateAttributes (store, attribute) {
    const list = document.querySelectorAll(`[${attribute}]`);

    for (let i in store) {
        list[i].setAttribute(attribute, 1);
    }
}