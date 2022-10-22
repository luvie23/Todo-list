
export default function createCards(todos){
    console.log(todos)
    let board = document.getElementById('board');
    board.innerHTML = ""

    for (let i = 0; i < todos.length; i++){
        let element = document.createElement('div');
        element.setAttribute('id', 'card' + i);
        element.className = "cards";
        element.innerHTML = `${todos[i].title} this nuts`

        let buttons = document.createElement('div');
        buttons.className = "buttons";

        let button = document.createElement('button');
        button.setAttribute('id','remove-button'+i);
        button.textContent = 'Done';
        button.className = "card-button";
        button.onclick = function(){
            remove(button.getAttribute('id').charAt(button.getAttribute('id').length - 1)) ;
        }

        element.appendChild(button)
        board.appendChild(element)
    }

}

function remove(index){
    myLibrary.splice(index,1);
    setupShelf();
}