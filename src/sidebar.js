
export default function sidebar(){

    const content = document.getElementById('content');

    const sidebar = document.createElement('div');
    sidebar.setAttribute('id','sidebar');

    const buttons = document.createElement('div');
    buttons.setAttribute('id','buttons');

    const projects = document.createElement('button');
    projects.textContent = "COMPLETED";
    projects.setAttribute('id','completed');
    projects.classList.add('button');

    const addTodo = document.createElement('button');
    addTodo.textContent = "+ TODO";
    addTodo.setAttribute('id','addTodo');
    addTodo.classList.add('button');

    const logo = document.createElement('h1');
    logo.textContent = 'TODO LIST';

    buttons.appendChild(projects);
    buttons.appendChild(addTodo);
    sidebar.appendChild(logo);
    sidebar.appendChild(buttons);
    content.appendChild(sidebar);
    
}