const express = require('express');
const ejs = require('ejs');
const auth_routes = require('./routes/auth');
const ppConfig = require('./config/passport');

const app = express();
app.set('view engine', 'ejs');

app.use('/auth', auth_routes);

app.get('/', (req, res) => {
  return res.render('home');
})

app.listen(3003, () => {
  console.log('listening at 3003');
})