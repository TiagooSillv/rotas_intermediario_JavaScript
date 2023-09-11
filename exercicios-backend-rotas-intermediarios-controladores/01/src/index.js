const express = require('express');
const {soma, subtrair, multiplicar, dividir} = require('./controladores/calculadores')
const app = express();


app.get('/soma', soma);
app.get('/subtrair', subtrair);
app.get('/multiplicar', multiplicar);
app.get('/dividir', dividir);

app.listen(3000,()=>{
 console.log('The server is online');

});