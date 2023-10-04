const express = require('express');
const morgan = require('morgan');
var { engine } = require('express-handlebars');
var path = require('path');
const app = express();
const port = 3000;

const Router = require('./routes/index');

// xu ly du lieu voi post
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// template engine views
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));
console.log(path.join(__dirname, 'resource/views'));

// ghi ra cac log
// app.use(morgan('combined'));

// file static
app.use(express.static(path.join(__dirname, 'public')));

Router(app);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
