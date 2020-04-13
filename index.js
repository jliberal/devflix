const express = require('express');
const config = require('./config');

const app = express();

app.use('/hello', (req,res) => {
    res.send('Hola tú');
});

app.listen(config.port,() => {
    console.log(`API Server listening on http://localhost:${config.port}`);
});


