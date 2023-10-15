const express = require('express');

const router = express.Router(); //do próprio express

router.get('/', (req, res) => { 
    //parametro da rota, vem na chamada
    console.log("Olá");
    res.end();
})

module.exports = router;