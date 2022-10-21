let todos = [];

import createCards from "./todoDOM";

function createTodo(title, description, dueDate){
    return {title, description, dueDate}
}

function submitTodo(){
    let title = document.getElementById('title');
    let description = document.getElementById('description');
    let dueDate = document.getElementById('dueDate');

    
    todos.push(createTodo(title.value, description.value, dueDate.value));

    createCards(todos)
}





export {submitTodo}