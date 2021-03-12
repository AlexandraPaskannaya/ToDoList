import { unImportantStore } from "./Store";
import Task from "./Task";

export default class UnimportantTask extends Task {

    create(li) {

        super.create(li);

        li.setAttribute('data-unimportant', unImportantStore.length);

        document.querySelector('div.unimportant ul').append(li);

        this.id = unImportantStore.length;

        unImportantStore.push(this);

        console.log("unImportantStore", unImportantStore)

    }
}
