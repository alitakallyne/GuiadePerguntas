const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Estou dizendo para o Express usar o EJS como View engine
app.set('view engine','ejs');
app.use(express.static('public'));

//Decodificada os dados enviados pelo formulario
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/",(req, res) => {
    res.render("index");
})

app.get("/perguntar",(req, res) => {
    res.render("perguntar");
})

app.post("/salvarpergunta",(req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    res.send("Formulario Recebido! titulo: " + titulo + " descricao: " + descricao);
})

app.listen(8080,()=>{console.log("App rodando!");});

/*
app.get("/:nome/:lang",(req, res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = false;

    var produtos = [
        {nome: "Doritos",preco: 3.14},
        {nome: "Coca-cola",preco:5},
        {nome: "Leite",preco:1.45},
        {nome: "Carne", preco:15},
        {nome: "Redbull", preco: 6},
        {nome: "Nescau", preco: 4}
    ]

    res.render("index",{
        nome: nome,
        lang: lang,
        empresa: "Guia do programador",
        inscritos: 8040,
        msg: exibirMsg,
        produtos: produtos
    });
});
*/
