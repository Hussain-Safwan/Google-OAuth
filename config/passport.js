const passport = require('passport');

var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: '887125122883-jsba3nm3r7pei13lttvh9bvoifu4vbot.apps.googleusercontent.com',
    clientSecret: 'EuXF134L9w84RETN3Eo3yYlJ',
    callbackURL: '/auth/google/redirect'
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile.displayName);
    return cb();
  }
));

// callbackURL: '/auth/google/redirect',