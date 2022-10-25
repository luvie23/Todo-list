let todos = [];


import { addCompleted } from "./completed";
import createCards from "./todoDOM";


function createTodo(title, description, dueDate){
    return {title, description, dueDate}
}
    //sample todo
const sample = createTodo('sample withadadasdasd long title', 'quick description on sample todo', '2022-09-28')

todos.push(sample);

function submitTodo(){
    let title = document.getElementById('title');
    let description = document.getElementById('description');
    let dueDate = document.getElementById('dueDate');





    if (title.value === '' || description.value ==='' || dueDate.value === ''){
        alert('Please enter the complete details')
    } else{
        todos.push(createTodo(title.value, description.value, dueDate.value));

        createCards(todos)
    }
    
}

function remove(index){
    addCompleted(todos.splice(index,1));
    createCards(todos);
}

function initialize(){
    createCards(todos)
}



export {submitTodo, remove, initialize}