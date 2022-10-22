import { remove } from "./todo";

export default function createCards(todos){
    let list = todos;
    console.log(list)
    let board = document.getElementById('board');
    board.textContent = ""

    for (let i = 0; i < list.length; i++){
        let element = document.createElement('div');
        element.setAttribute('id', 'card' + i);
        element.className = "cards";
        element.textContent = `${list[i].title} `

        let buttons = document.createElement('div');
        buttons.className = "buttons";

        let button = document.createElement('button');
        button.setAttribute('id','remove-button'+i);
        button.textContent = 'Done';
        button.className = "card-button";
        button.onclick = function(){
            remove(button.getAttribute('id').charAt(button.getAttribute('id').length - 1)) ;
            
            // remove(button.getAttribute('id').charAt(button.getAttribute('id').length - 1)) ;
        }

        element.appendChild(button)
        board.appendChild(element)
        
    }

}

