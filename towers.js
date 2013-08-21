var readline = require('readline');
var reader = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

// function gameloop() {
//    var t1 = [3, 2, 1];
//    var t2 = [];
//    var t3 = [];
//
//    executeGameTurn(t1, t2, t3, gameFinished);
//
//    function gameFinished(){
//       console.log("Game over!");
//       reader.close;
//    }
// }
//
// function executeGameTurn(t1, t2, t3, gamefinished) {
//    askForMove(t1, t2, t3, moveLegal)
//
//    executeMove(t1, t2, t3, move)
//
//    function moveLegal() {
//       // is this a legal move?
//    }
// }
//
// function executeMove(t1, t2, t3, move) {
//    // take from board at move array[0] and move to move array [1]
// }


function gameOver () {
   console.log("Game is over.");
}

function gameLoop () {
   board = [[3,2,1],[],[]];
   executeGame(gameOver);

   function executeGame(gameOver) {
      askForMove(handleMove);

   }

   function askForMove(handleMove) {
      reader.question("Where would you like to move from and to (format: 0,2): ", handleMove)
   }

   function handleMove(answer) {

      var move = answer.split(",");
      console.log(move);
      moveChecker(move);
      console.log(board)
   }

   function moveChecker(move) {

      if (board[move[0]].length === 0) {
         console.log("No disc there.");
         askForMove(handleMove);
      } else if (board[move[0]][board[move[0]].length - 1] > board[move[1]][board[move[1]].length - 1]) {
         console.log("Illegal move.");
         askForMove(handleMove);
      } else {
         var disc = board[move[0]].pop();
         board[move[1]].push(disc)
         askForMove(handleMove);
         checkForWin();
      }
   }

   function checkForWin() {
      if ((board[0].length === 0 && board[1].length === 0) ||
      (board[0].length === 0 && board[2].length === 0)) {
            gameOver();
      }
   }
}

gameLoop();
