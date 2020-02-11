require('dotenv').config();
const express = require('express');
const path = require('path');

const db = require('./db/config');
const router = require('./routes');

const port = process.env.PORT;
const app = express();

db.sync();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname + '/public'));
app.use(router);

app.listen(port, () => {
  console.log('🚀 ready on port: ', port);
});
