const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');

//Configuração do HandleBars

app.engine('hbs', hbs.engine({
    extname:'hbs',
    defaultLayout: 'main'
}));
app.set('view engine','hbs');

app.use( express.static('public'));

app.use(bodyParser.urlencoded({extended:false}));

//rota inicial
//renderiza o home.hbs para abrir dentro da tag {{{body}} no layout
app.get('/',(req, res)=> {
    res.render('home');
});
app.get('/cad_users',(req, res) => {
    res.render('cad_users');
});

// rota renderizada
app.get('/editar_users',(req, res) => {
    res.render('editar_users');
})

// rota renderizada
app.get('/exibir_users',(req, res) => {
    res.render('exibir_users');
})
app.post('/insert_users',(req, res) => {
    console.log(req.body);
    res.send("Pegando");
})
// ativar o sistema
app.listen(PORT,()=>{
    console.log('Servidor rodando em http:localhost:' + PORT);
})
 


