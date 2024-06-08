// Board
let board;
let boardWidth = 500;
let boardHeight = 500;
let context;

// Player
let playerWidth = 80;
let playerHeight = 10;

let player = {
    x : boardWidth/2 - playerWidth/2,
    y :  boardHeight - playerHeight - 5,
    width : playerWidth,
    height : playerHeight
}

window.onload = function(){
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d");  // Used for Drawing on the Board

    // Draw Initial Player
    context.fillStyle = "lightgreen";
    context.fillRect(player.x, player.y, player.width, player.height);

    requestAnimationFrame(update);
}

function update(){
    requestAnimationFrame(update);

    // Player
    context.fillStyle = "lightgreen";
    context.fillRect(player.x, player.y, player.width, player.height);
}