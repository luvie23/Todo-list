export default function todoForm(){


    const content = document.getElementById('content');

    const form = document.createElement('form');
    form.setAttribute('id','form');

    const title = document.createElement('input');
    title.setAttribute('id', 'title');
    title.setAttribute('type', 'text');
    const titleLabel = document.createElement('label');
    titleLabel.innerText = 'Title:';
    titleLabel.setAttribute('for', 'title');


    const description = document.createElement('textarea');
    description.setAttribute('id', 'description');
    description.setAttribute('type', 'text');
    const descriptionLabel = document.createElement('label');
    descriptionLabel.innerText = 'Description:';
    descriptionLabel.setAttribute('for', 'description');


    const dueDate = document.createElement('input');
    dueDate.setAttribute('id', 'dueDate');
    dueDate.setAttribute('type', 'date');
    const dueDateLabel = document.createElement('label');
    dueDateLabel.innerText = 'Due Date:';
    dueDateLabel.setAttribute('for', 'dueDate');

    const buttons = document.createElement('div');
    buttons.setAttribute('id', 'buttonDiv');

    const saveButton = document.createElement('button');
    saveButton.setAttribute('id', 'saveButton');
    saveButton.setAttribute('type', 'button');
    saveButton.textContent = 'Save';

    const closeButton = document.createElement('button');
    closeButton.setAttribute('id', 'closeButton');
    closeButton.setAttribute('type', 'button');
    closeButton.textContent = 'X';

    buttons.appendChild(closeButton);
    buttons.appendChild(saveButton);
    content.appendChild(form);
    form.appendChild(titleLabel);
    form.appendChild(title);
    form.appendChild(descriptionLabel);
    form.appendChild(description);
    form.appendChild(dueDateLabel);
    form.appendChild(dueDate);
    form.appendChild(buttons);



    document.getElementById('closeButton').addEventListener('click',function(){
        const element = document.getElementById('form');
        element.parentNode.removeChild(element);
        const element2 = document.getElementById('addTodo');
        element2.disabled = false;

    })   
}


