
export default function createCards(todos){
    console.log(todos)
    let board = document.getElementById('board');
    board.innerHTML = ""

    for (let i = 0; i < todos.length; i++){
        let element = document.createElement('div');
        element.setAttribute('id', 'card' + i);
        element.className = "cards";
        element.textContent = todos[i].title
        board.appendChild(element)
    }

}