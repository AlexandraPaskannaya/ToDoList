import { veryImportantStore } from "./Store";
import Task from "./Task"

export default class VeryimportantTask extends Task {

    create(li) {

        super.create(li);

        li.setAttribute('data-very_important', veryImportantStore.length);  

        document.querySelector('div.very_impotrant ul').append(li);

        this.id = veryImportantStore.length;     
       
        veryImportantStore.push(this);

        console.log("veryImportantStore", veryImportantStore);

    }
}
