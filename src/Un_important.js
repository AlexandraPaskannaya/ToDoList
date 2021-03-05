import { unImportantStore } from "./Store";
import Task from "./Task";

export default class UnimportantTask extends Task {

    create(li) {

        super.create(li);

        li.setAttribute('data-un_important', unImportantStore.length);

        document.querySelector('div.un_impotrant ul').append(li);

        this.id = unImportantStore.length;

        unImportantStore.push(this);

        console.log("unImportantStore", unImportantStore)

    }
}
