import deleteImg from "./assets/images/delete.png";

import "./assets/styles/style.css";


 
export default class Task{

    constructor(name, checked = false) {
        this.name;
        this.checked = checked;
    }

    create(li) {
        console.log("add li");
        let text = document.querySelector('input[type="text"]');

        const input = document.createElement('input');
        input.type = 'checkbox';
        li.append(input);

        const label = document.createElement('label');
        label.textContent = text.value;
        li.append(label);
        
        const deleteBtn = document.createElement('img');
        deleteBtn.src = deleteImg;
        deleteBtn.classList.add('deletBtn');
        li.append(deleteBtn);

        const ul = document.querySelector('ul');
        ul.append(li);
    }
}

