
function createTodo(title, description, dueDate){
    return {title, description, dueDate}
}

function submitTodo(){
    let title = document.getElementById('title');
    let description = document.getElementById('description');
    let dueDate = document.getElementById('dueDate');

    return createTodo(title.value, description.value, dueDate.value);
}

function addTodo(){
    const board = document.getElementById('board');

    const test = document.createElement('div');
    test.setAttribute('id','test');
    test.textContent = "test"
    board.appendChild(test)

}

export {addTodo, createTodo, submitTodo}