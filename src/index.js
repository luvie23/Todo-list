import './style.css';

import todoBoard from './todoBoard';
import todoForm from './todoform';
import {submitTodo } from './todo';



todoBoard()

document.getElementById('addTodo').addEventListener('click',function(){
    this.disabled = true;
    todoForm()
    document.getElementById('saveButton').addEventListener('click', function(){

        submitTodo()
    })
})

