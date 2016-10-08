var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var exphbs = require('express-handlebars');
var passport = require('passport');
var session = require('express-session');
// have to pass on a Store object on to the session
var SequelizeStore = require('connect-session-sequelize')(session.Store);
// using local strategy, and setting it up here to give options.
var mysql = require('mysql');
var LocalStrategy = require('passport-local').Strategy;
var _ = require('underscore');
var bcrypt = require('bcryptjs');
var userInfo;

// this is used to sync the data
var models = require('./models');
var db = models.sequelize;

db.sync();

var app = express();
app.use(express.static('public'));

// passport.serializeUser(function(user,done){
//   done(null, user);
//  });

// passport.deserializeUser(function(obj,done){
//   done(null, obj);
//  });

// module.exports = 
// passport.use('local', new LocalStrategy(
//   function(username, password, done){
//     models.User.findOne({ where: {username: username}}).then(function(user){
//         if (!user){
//           return done(null, false, {message: 'Incorrect Username'});
//         }
//         if (!bcrypt.compareSync(password, user.get('password_hash'))){
//           return done(null, false, {message: 'incorrect password'});
//         }
//         return done(null, user)
//       });
//     }
// ));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// app.use(cookieParser())
// app.use(session({
//  secret: 'jobtroll is the ticket to success',
//   store: new SequelizeStore({
//    db: db
//  }),
//  resave: true,
//  saveUninitialized: true
// }));
// app.use(passport.initialize());
// app.use(passport.session());

  app.get('/home', function (req, res){
          models.User.findOne({ where: {username: userInfo.username}}).then(function(currentUser){
          var data = {
            currentUser: currentUser
          }
          res.json(data);
        });
  });

  // app.post('/users/login', 
  //   passport.authenticate('local', {
  //     successRedirect: '/home',
	 //    failureRedirect: '/'
  //   })
  // );

// ----- Registration GET Request ------ //
  app.get('/register', function(req, res) {
   	res.render('register'); // uses register.handlebars
  });

app.post('/users/login', function(req,res) {
  var body = _.pick(req.body, 'username', 'password');

  if(typeof body.username !== 'string' || typeof body.password !== "string") {
    return res.status(400).send();
  }
  models.User.findOne({
    where: {
      username: body.username
    }
  }).then(function(user){ 
    if (!user || !bcrypt.compareSync(body.password, user.get('password_hash'))){
      return res.status(401).send();
    }
    userInfo = user;
    res.json(user);
  }, function(e){
    res.status(500).send();
  })
});

     //Register user
  app.post('/users/create',function(req,res){
      models.User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      }).then(function(success) {
        res.json(success);
      }).catch(function(err){
        res.json(err);
      });
  });


 app.get('/logout', function(req, res){
  req.logout();
  req.session.destroy();
  res.redirect('/');
 });

var PORT = process.env.PORT || 8000;

app.listen(PORT, function () {
  console.log('database operation on port: ' + PORT);
});