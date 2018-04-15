/* jshint esversion :6 */

let express = require('express');
let app     = express();

app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/index',(req,res) => res.render('index'));
app.get('/about', (req,res) => res.render('about'));
app.get('/post',(req,res) => res.render('post'));
app.get('/contact', (req,res) => res.render('contact'));
app.get('/',(req,res) => res.render('index'));

app.listen(3000);