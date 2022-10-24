const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const Usuario = require('./models/Usuario');

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
 app.post('/editar_users', (req, res) =>{
    var id = req.body.id;
    Usuario.findByPk(id).then((dado) =>{
        return res.render('editar_users', {error:false, id: dado.id, nome:dado.nome, email:dado.email, senha: dado.senha});
    }).catch((err) => {
        console.log(err)
        return res.render('editar_users', {error:true, problema: "Não é possivel editar este registro"});
    })
})
// rota renderizada
app.get("/exibir_users", (req, res) => {
    Usuario.findAll().then((valores)=>{
    if(valores.length>0) {
     return res.render('exibir_users', {NavActiveUsers:true, table:true, 
    usuarios:valores.map(valores => valores.toJSON())});
    } else{
    res.render('exibir_users', {NavActiveUsers:true, table:true});
    }
    }).catch((err)=>{
        console.log(`Houve um problema: ${err}`);
    })
})
app.post("/update_users", (req, res) => {
    var nome = req.body.nome;
    var email = req.body.email;
    var senha = req.body.senha;

    Usuario.update({
        nome: nome,
        email: email.toLowerCase(),
        senha: senha,
    }, 
    { where: {
     id: req.body.id }
    }).then((resultado) => {
    console.log(resultado);
    return res.redirect('/exibir_users');
    }).catch((er) => {
        console.log(err);
    })
})
app.post('/insert_users',(req, res) => {
    var nome = req.body.nome;
    var email = req.body.email;
    var senha = req.body.senha;
    Usuario.create({
        nome: nome,
        email: email.toLowerCase(),
        senha: senha
    }).then(function(){
        console.log('Cadatro realizando com sucesso');

        return res.redirect('/exibir_users');
    }).catch(function(erro){
        console.log(`ops, deu erro: ${erro}`);
        res.send("Deu erro");

    })
})
// ativar o sistema
app.listen(PORT,()=>{
    console.log('Servidor rodando em http:localhost:' + PORT);
})
 


