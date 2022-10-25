import sidebar from './sidebar';



export default function todoBoard(){
    
    sidebar()
    const content = document.getElementById('content');

    const board = document.createElement('div');
    board.setAttribute('id', 'board');



    content.appendChild(board);


}