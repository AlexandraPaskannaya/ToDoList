import deleteImg from "./assets/images/delete.png";
import editImg from "./assets/images/pen.png";


import "./assets/styles/style.css";

export default class Task{

    constructor(name, checked = false) {
        this.name = name;
        this.checked = checked;
    }

    create(li) {
        const input = document.createElement('input');
        input.type = 'checkbox';
        li.append(input);
   
        const label = document.createElement('label');
        label.textContent = this.name;
        li.append(label);

        const editBtn = document.createElement('img');
        editBtn.src = editImg;
        editBtn.classList.add('editBtn');
        li.append(editBtn);

        const deleteBtn = document.createElement('img');
        deleteBtn.src = deleteImg;
        deleteBtn.classList.add('deletBtn');
        li.append(deleteBtn);

        const ul = document.querySelector('ul');
        ul.append(li);
    }

}