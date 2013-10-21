// logic.js
// ========

exports.winnerWinnerChickenDinner = function (u1n, u1m, u2n, u2m) {
   u1m = score(u1m);
   u2m = score(u2m);
  if (u1m > u2m) {
    //user 1 wins!
    winner = u1n;
  }
  else if (u1m < u2m) {
    //user 2 wins!
    winner = u2n;
  }
  else {
    // both are losers!
    winner = "";
  }
  return winner;
};

score = function (move) {
    // assign value to move
    // rock = 1
    // paper = 2
    // scissors = 3
    var result;
    move = move.toLowerCase();
    switch (move) {
      case "rock":
        result = 1;
        break;
      case "paper":
        result = 2;
        break;
      case "scissors":
        result = 3;
        break;
      default:
        result = 0
        break;
    } 
    return result;
};