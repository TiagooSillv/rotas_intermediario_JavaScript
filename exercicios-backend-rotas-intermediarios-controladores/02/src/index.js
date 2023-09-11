const express = require('express');
const app = express();
const {vezDeQuem,removerJogadores, adicionarJogadores} = require('./controladores/jogadas')

app.get('/home',vezDeQuem);
app.get('/remover',removerJogadores);
app.get('/adicionar',adicionarJogadores);


app.listen(8000,()=>{
    console.log('My server are online');
});



