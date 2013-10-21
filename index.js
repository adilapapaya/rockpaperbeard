var express = require('express'),
    app = express();

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;


//express configuration
app.use(express.static(__dirname + '/public'));
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.session({ secret: 'HASKDJRHOQ3NRIUHWNRIUWAHNIUNAHWIEUHNAI' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);

//passport user serializing
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.set('view engine', 'ejs');

//authentication strategy set as username and password (as opposed to Fb connect, etc)
passport.use(new LocalStrategy(
  function(username, password, done) {
    //sample user @TODO load user from the DB
    if(username == 'admin' && password == '123') {
        var user = {username: username, password: password};
        return done(null, user);
    }
    else {
        console.log('wrong login');
    }
}));

//login form
app.get('/loginForm', function(req, res) {
  res.render('index');
});

//login submission
app.post('/login',
  passport.authenticate('local', { successRedirect: '/dashboard',
                                   failureRedirect: '/loginForm'
                                   })
);

//game dashbard..
app.post('dashboard', function(req, res) {
    res.send('dashboard');
});


app.listen(2013);
