import { VeryimportantStore } from "./Store";
import Task from "./Task"

export default class VeryimportantTask extends Task {

    constructor(name, checked){
         super(name, checked);
    }

    create(li) {

        super.create(li);

        li.setAttribute('data-very_important', VeryimportantStore.length);  

        document.querySelector('div.very_impotrant ul').append(li);

        this.id = VeryimportantStore.length;     
       
        VeryimportantStore.push(this);

        console.log("VeryimportantStore", VeryimportantStore);

    }
}
