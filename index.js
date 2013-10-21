var express = require('express'),
    app = express();

app.use(express.bodyParser());
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(2013);