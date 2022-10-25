import './style.css';

import todoBoard from './todoBoard';
import todoForm from './todoform';
import {submitTodo,initialize } from './todo';


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


