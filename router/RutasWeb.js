const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // console.log(__dirname)
    res.render("index")
})

router.get('/servicios', (req, res) => {
    res.render("servicios", {tituloServicios: "Este es un mensaje dinámico de servicios"})
})

module.exports = router;