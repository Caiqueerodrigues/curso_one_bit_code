const express = require('express');

const router = express.Router(); //do próprio express

router.get('/', (req, res) => { 
    //parametro da rota, vem na chamada
    console.log("Olá");
    res.end();
})

router.post('/', (req, res) => { 
    //o express diferencia a chamada pelo VERBO
    console.log(req.body);
    res.status(200).send(req.body);
})

module.exports = router;