const express = require('express');
const app = express();
const server = http.createServer(app);

require('dotenv').config()

app.set('port', process.env.PORT || 3400);

// Conexión a Base de datos
const mongoose = require('mongoose');


const uri = `mongodb+srv://${process.env.USUARIO}:${process.env.PASSWORD}@cluster0.b8v7n.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log(e))

// motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.use(express.static(__dirname + "/public"));

// Rutas Web
app.use('/', require('./router/RutasWeb'));
app.use('/mascotas', require('./router/Mascotas'));

app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "Título del sitio web"
    })
})


server.listen(app.get('port', () => {
    console.log(`servidor en el puerto ${app.get('port')}`);
})