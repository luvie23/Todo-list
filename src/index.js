import './style.css';
import todoBoard from './todoBoard';
import todoForm from './todoform';

todoBoard()

document.getElementById('addTodo').addEventListener('click',function(){
    this.disabled = true;
    todoForm()
})