const express = require('express')
require('dotenv').config()
const InicializaMongoServer = require('./config/db')
InicializaMongoServer() 

const rotasCategoria = require('./routes/Categoria')
const rotasUpload = require('./routes/Upload')

const app = express()

app.disable('x-powered-by')


const PORT = process.env.PORT || 4000


app.use(function(req, res, next){
   
    res.setHeader('Access-Control-Allow-Origin', '*')
    
    res.setHeader('Access-Control-Allow-Headers','*')
    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH')
    next()
})

app.use(express.json())


app.get('/', (req, res) => {
    res.json({
        mensagem: '100% funcionando!',
        versao: '1.0.1'
    })
})

app.use("/categorias", rotasCategoria)

app.use('/upload', rotasUpload)



app.use(function(req, res){
    res.status(404).json({
        mensagem: `A rota ${req.originalUrl} não existe!`
    })
})

app.listen(PORT, (req, res) => {
    console.log(` Servidor Web rodando na porta ${PORT}`)
}
)