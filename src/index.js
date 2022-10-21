import './style.css';

import todoBoard from './todoBoard';
import todoForm from './todoform';
import { createTodo, submitTodo } from './todo';



todoBoard()

document.getElementById('addTodo').addEventListener('click',function(){
    this.disabled = true;
    todoForm()
    document.getElementById('saveButton').addEventListener('click', function(){
        submitTodo()
    })
})

