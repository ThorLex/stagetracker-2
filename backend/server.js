require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const Routes = require('./routes/route')
const auth = require('./routes/account')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/route', Routes)
app.use('/api/user', auth)
app.get('/api/google', function(req, res) {
  

  var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
  const GOOGLE_CLIENT_ID = 'our-google-client-id';
  const GOOGLE_CLIENT_SECRET = 'our-google-client-secret';
  
  passport.use(new GoogleStrategy({
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        userProfile=profile;
        return done(null, userProfile);
    }
  ));

  res.render('user');
});



// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connecté a la base de donnees ')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('on ecoute sur le port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 