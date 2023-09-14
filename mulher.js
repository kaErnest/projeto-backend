const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'karoline Ernest',
        imagem:'https://github.com/kaErnest/kaErnest/blob/82746b7e009cc1e14c7a2859edfe94774bea8f1f/Foto%20de%20perfil%20para%20linkedin%20dispon%C3%ADvel%20para%20trabalhar%20moderno%20azul.png',
        minibio: 'Uma Desenvolvedora em desenvolvimento'
    })

}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)