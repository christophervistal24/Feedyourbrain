/* jshint esversion :6 */

let express = require('express');
let app     = express();

app.set('view engine','ejs');

app.get('/contact', (req,res)         => res.render('contact'));
app.get('/showimage/:name', (req,res) => res.render('showimage',{name:req.params.name}));
app.get('/',(req,res)                 => res.render('index'));
app.get('/index',(req,res)            => res.render('index'));

app.listen(3000);