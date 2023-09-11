const express = require('express');
const {getPorId, get} = require('./controladores/imoveis');



const app = express();

app.get('/imoveis',get)

app.get('/imoveis/:id',getPorId)


app.listen(8000,()=>{console.log('server is online');})