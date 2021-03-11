import { veryImportantStore } from "./Store";
import Task from "./Task"

export default class VeryimportantTask extends Task {

    create(li) {

        super.create(li);

        li.setAttribute('data-veryimportant', veryImportantStore.length);  

        document.querySelector('div.veryimportant ul').append(li);

        this.id = veryImportantStore.length;     
       
        veryImportantStore.push(this);

        console.log("veryImportantStore", veryImportantStore);

    }
}
