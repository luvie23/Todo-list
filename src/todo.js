
function createTodo(title, description, dueDate){
    return {title, description, dueDate}
}

function submitTodo(){
    let title = document.getElementById('title');
    let description = document.getElementById('description');
    let dueDate = document.getElementById('dueDate');

    
    addTodo(createTodo(title.value, description.value, dueDate.value));

}


function addTodo(todo){
    if (todo !== undefined){
    const board = document.getElementById('board');
    const test = document.createElement('div');
    test.innerText = todo.title

    board.appendChild(test)
    }
    

}

export {addTodo, createTodo, submitTodo}