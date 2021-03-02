import { ImportantStore } from "./Store";
import Task from "./Task"

export default class ImportantTask extends Task {

    constructor(name, checked){
         super(name, checked);
    }

    create(li) {

        super.create(li);

        li.setAttribute('data-important', ImportantStore.length)

        document.querySelector('div.impotrant ul').append(li);
       
        this.id = ImportantStore.length;

        ImportantStore.push(this);

        console.log("ImportantStore", ImportantStore);

    }
}