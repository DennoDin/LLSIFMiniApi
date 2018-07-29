const express = require('express');
const expApp = express();
expApp.use(express.json());
const path = require('path');

const OK = 200;
const FAIL = 404;

// const sifExpress = () => {

//add GET, POST, PUT, DELETE, ETC here
expApp.get("/", (req, res) => {
  res.status(OK).sendFile('homePage.html', { root: path.join(__dirname, '../') });
})
// }
expApp.get('/idol', (req, res) => {
  res.status(FAIL).send();
})

expApp.listen(21192);