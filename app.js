/* jshint esversion :6 */

let express = require('express');
let app     = express();

app.set('port',(process.env.PORT || 5000));
app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/index',(req,res) => res.render('index'));
app.get('/about', (req,res) => res.render('about'));
app.get('/post',(req,res) => res.render('post'));
app.get('/login', (req,res) => res.render('login'));
app.get('/',(req,res) => res.render('index'));

app.listen(app.get('port'),function(){
    console.log('Node app is running on port ' + app.get('port'));
});