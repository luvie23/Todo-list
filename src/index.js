import './style.css';
import { createTodo, addTodo, submitTodo } from './todo';
import todoBoard from './todoBoard';
import todoForm from './todoform';



todoBoard()

document.getElementById('addTodo').addEventListener('click',function(){
    this.disabled = true;
    todoForm()
    document.getElementById('saveButton').addEventListener('click', function(){
        console.log(submitTodo())
    })
})

