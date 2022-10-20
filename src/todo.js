
function createTodo(title, description, dueDate){
    return {title, description, dueDate}
}



function addTodo(){
    const board = document.getElementById('board');

    const test = document.createElement('div');
    test.setAttribute('id','test');
    test.textContent = "test"
    board.appendChild(test)

}

export {addTodo, createTodo}