// Import the express library here\
const { add, remove, list, get } = require('./pictureManagement/actions/index.js')

const express = require('express');
const apiRouter = require('./api.js');
var minify = require('express-minify');

//const pictures = require('')
// Instantiate the app here
const app = express();

app.use(function(req, res, next) {
  res.header("Content-Type", "application/json");
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Methods", "DELETE, GET, POST")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());

app.use('/api', apiRouter)

const PORT = process.env.PORT || 4242;

// Invoke the app's `.listen()` method below:
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.get('/', (req, res, next) => {
  res.redirect('/index.html')
})

app.use(express.static('public'));
// app.use(minify());
