const router = require('express').Router();
const passport = require('passport');

router.get('/login', (req, res) => {
  return res.render('login');
});

router.get('/logout', (req, res) => {
  res.send('logging out');
});

router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));

router.get('/google/redirect', 
passport.authenticate('google'),
function(req, res) {
  console.log('over');
  res.render('home');
});

// router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
//   res.redirect('/');
// })

module.exports = router;