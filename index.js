const express = require('express')
require('dotenv').config() //Carrega as variáveis de ambiente
const InicializaMongoServer = require('./config/db')
InicializaMongoServer() //Inicializamos o MongoDB
//Definindo as rotas do nosso backend
const rotasCategoria = require('./routes/Categoria')

//Inicializamos o nosso app a partir da biblioteca express
const app = express()
//Removendo o x-powered-by por segurança
app.disable('x-powered-by')

//Porta default do Backend
const PORT = 4000
//Definimos que o backend fará o parse do JSON
app.use(express.json())

//Definimos a nossa primeira rota
app.get('/', (req, res) => {
    res.json({
        mensagem: 'API 100% funcional!👏',
        versao: '1.0.2'
    })
})
//Rotas das Categorias
app.use("/categorias", rotasCategoria)



//Rota para tratar erros 404 (deve ser a última sempre!)
app.use(function(req, res){
    res.status(404).json({
        mensagem: `A rota ${req.originalUrl} não existe!`
    })
})

app.listen(PORT, (req, res) => {
    console.log(`💻 Servidor Web rodando na porta ${PORT}`)
}
)