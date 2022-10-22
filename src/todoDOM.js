import { remove } from "./todo";

export default function createCards(todos){
    let list = todos;

    let board = document.getElementById('board');
    board.textContent = ""

    for (let i = 0; i < list.length; i++){
        let element = document.createElement('div');
        element.setAttribute('id', 'card' + i);
        element.className = "cards";
        element.textContent = list[i].title

        let description = document.createElement('p');
        description.textContent = list[i].description

        let dueDate = document.createElement('span');
        dueDate.textContent = `Finish by: ${list[i].dueDate}`

        let button = document.createElement('button');
        button.setAttribute('id','remove-button'+i);
        button.textContent = 'Done';
        button.className = "card-button";
        button.onclick = function(){
            remove(button.getAttribute('id').charAt(button.getAttribute('id').length - 1)) ;
            
            // remove(button.getAttribute('id').charAt(button.getAttribute('id').length - 1)) ;
        }

        element.appendChild(description);
        element.appendChild(dueDate);
        element.appendChild(button);
        board.appendChild(element);
        
    }

}

// ${list[i].description} <br><br> Finish by ${list[i].dueDate