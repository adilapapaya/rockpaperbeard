var express = require('express'),
    app = express();

app.use(express.bodyParser());
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(2013);

var logic = require('./logic.js');

// Example Calls
// console.log(logic.winnerWinnerChickenDinner("Player One", "ROCK", "Player Two", "PAPER"));
// console.log(logic.winnerWinnerChickenDinner("Player One", "scissors", "Player Two", "PAPER"));
