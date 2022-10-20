export default function todoForm(){


    const content = document.getElementById('content');

    const form = document.createElement('form');
    form.setAttribute('id','form')

    const title = document.createElement('input');
    title.setAttribute('id', 'title');
    const titleLabel = document.createElement('label')
    titleLabel.innerText = 'Title:'
    titleLabel.setAttribute('for', 'title');


    const description = document.createElement('input');
    description.setAttribute('id', 'description');
    const descriptionLabel = document.createElement('description')
    descriptionLabel.innerText = 'Description:'
    descriptionLabel.setAttribute('for', 'description');


    const dueDate = document.createElement('input');
    dueDate.setAttribute('id', 'dueDate');
    dueDate.setAttribute('type', 'date');
    const dueDateLabel = document.createElement('label')
    dueDateLabel.innerText = 'Due Date:'
    dueDateLabel.setAttribute('for', 'dueDate');

    if (form.parentElement === document.body){
        document.body.removeChild(form)
    } 


    content.appendChild(form);
    form.appendChild(titleLabel)
    form.appendChild(title);
    form.appendChild(descriptionLabel)
    form.appendChild(description);
    form.appendChild(dueDateLabel)
    form.appendChild(dueDate);

    

}