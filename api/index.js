require('./config/connection')

const express = require('express');
const port = (process.env.port || 3000)

const app = express();

app.use(express.json())

app.set('port', port);

app.use('/api',require('./router'))

app.listen(app.get('port'), (error) => {
    if (error) {
        console.log(`Error al iniciar el servidor: ${error}`)
    }else{
        console.log(`Servidor iniciado en el puerto ${port}`)
    }
})