const express = require('express');
require('express-async-errors');

const cors = require('./app/middleware/cors');
const errorHandler = require('./app/middleware/errorHandler');
const routes = require('./routes');

const door = 3001;

const app = express();

app.use(express.json()); //isso aqui faz o body parse direto pelo express.(receber o body da requisição)
app.use(cors);
app.use(routes);
app.use(errorHandler);

app.listen(door, () =>{
    console.log(`Server running in ${door}`);
})
