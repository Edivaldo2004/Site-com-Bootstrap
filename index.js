const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const PORT = process.env.PORT || 3000;

//Configuração do HandleBars

app.engine('hbs', hbs.engine({
    extname:'hbs',
    defaultLayout: 'main'
}));
app.set('view engine','hbs');

app.use( express.static('public'))


//rota inicial
//renderiza o home.hbs para abrir dentro da tag {{{body}} no layout
app.get('/',(req, res)=> {
    res.render('home');
});

// ativar o sistema
app.listen(PORT,()=>{
    console.log('Servidor rodando em http:localhost:' + PORT);
})