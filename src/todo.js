let todos = [];
let done = [];

import createCards from "./todoDOM";

function createTodo(title, description, dueDate){
    return {title, description, dueDate}
}

const sample = createTodo('sample withadadasdasd long title', 'quick description on sample todo', '2022-09-28')

todos.push(sample);

function submitTodo(){
    let title = document.getElementById('title');
    let description = document.getElementById('description');
    let dueDate = document.getElementById('dueDate');

    //sample todo



    if (title.value === '' || description.value ==='' || dueDate.value === ''){
        alert('Please enter the complete details')
    } else{
        todos.push(createTodo(title.value, description.value, dueDate.value));

        createCards(todos)
    }
    
}

function remove(index){
    done.push(todos.splice(index,1));
    createCards(todos);
    console.log(done)
}

function initialize(){
    createCards(todos)
}



export {submitTodo, remove, initialize}