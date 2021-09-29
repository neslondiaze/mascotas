const express = require('express');
const router = express.Router();

const Mascota = require('../models/mascota')

router.get('/', async (req, res) => {
    
    try {        
        const arrayMascotasDB = await Mascota.find()
        res.render("mascotas", {
            arrayMascotas: arrayMascotasDB
        })
    } catch (error) {
        console.log(error)
    }  
})

router.get('/crear', (req, res) => {
    res.render('crear')
})

router.post('/', async(req, res) =>{
    const body = req.body
    try {
        await Mascota.create(body)
        res.redirect('/mascotas')
    } catch (error) {
        console.log('Error', error)
    }
})

module.exports = router;