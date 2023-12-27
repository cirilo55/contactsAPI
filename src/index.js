const express = require('express');
require('express-async-errors');

const routes = require('./routes');

const door = 3000;

const app = express();

app.use(express.json());//isso aqui faz o body parse direto pelo express.(receber o body da requisição)
app.use(routes);

app.use((error, req, res, next) =>{
  console.log('####Error Hendler###')

  console.log(error)
  res.sendStatus(500);
})

app.listen(door, () =>{
    console.log(`Server subiu nos ${door}`);
})
