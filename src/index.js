import './style.css';

import todoBoard from './todoBoard';
import todoForm from './todoform';
import {submitTodo,initialize } from './todo';
import {showCompleted} from './completed';


todoBoard()

initialize()
document.getElementById('addTodo').addEventListener('click',function(){
    initialize()

    this.disabled = true;
    todoForm()
    document.getElementById('saveButton').addEventListener('click', function(){

        submitTodo()
    
        
    })
})


document.getElementById('completedButton').addEventListener('click', function(){
    showCompleted()
})

