import { UnimportantStore } from "./Store";
import Task from "./Task";

export default class UnimportantTask extends Task {

    constructor(name, checked){
         super(name, checked);
    }

    create(li) {

        super.create(li);

        li.setAttribute('data-un_important', UnimportantStore.length);

        document.querySelector('div.un_impotrant ul').append(li);

        this.id = UnimportantStore.length;

        UnimportantStore.push(this);

        console.log("UnimportantStore", UnimportantStore)

    }
}
