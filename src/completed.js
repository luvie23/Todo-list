let done = [];

function addCompleted(item){
    var currentDate = new Date().toISOString().slice(0, 10)
    done.push(item[0].title + ' Description: ' + item[0].description + ' Was due on: ' + item[0].dueDate + ' Completed on: ' + currentDate);


}

function createDom(){
    const completedPage = document.getElementById('completedPage');
    const board = document.createElement('div');
    board.textContent = '';

    for (let i = 0; i < done.length; i++){
        const element = document.createElement('p');
        element.classList.add('cards');
        element.textContent = done[i];

        board.appendChild(element);
    }


    completedPage.appendChild(board);

}


function showCompleted(){

    const completedPage = document.createElement('div')
    completedPage.setAttribute('id', 'completedPage');

    const content = document.getElementById('content');
    const closeButton = document.createElement('button');
    closeButton.setAttribute('id','completePageClose')
    closeButton.textContent = 'X';
    closeButton.classList.add('card-button');


    content.appendChild(completedPage);
    completedPage.appendChild(closeButton);
    createDom();

    //closeButton function
    document.getElementById('completePageClose').addEventListener('click', function(){
        completedPage.parentNode.removeChild(completedPage);
    })


}






export {addCompleted, showCompleted}