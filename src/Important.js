import { importantStore } from "./Store";
import Task from "./Task"

export default class ImportantTask extends Task {

    create(li) {

        super.create(li);

        li.setAttribute('data-important', importantStore.length)

        document.querySelector('div.impotrant ul').append(li);
       
        this.id = importantStore.length;

        importantStore.push(this);

        console.log("importantStore", importantStore);

    }
}