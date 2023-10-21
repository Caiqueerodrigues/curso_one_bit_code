const express = require('express');

const router = express.Router(); //do próprio express


router.get('/', (req, res) => { 
    //parametro da rota, vem na chamada
    console.log("Olá");
    res.end();
})

const Checklist = require("../models/checklist.js");
router.post('/', async (req, res) => { 
    //o express diferencia a chamada pelo VERBO
    let { name } = req.body;
    
    try {
        let checkList = await Checklist.create({ name });
        res.status(200).json(checkList);
    } catch(e) {
        res.status(422).json(e)
    }
})

router.get('/:id', (req, res) => {
    //dois pontos indica parametro
    console.log(req.params.id)
    res.send(`ID: ${req.params.id}`)
})

router.put('/:id', (req, res) => {
    console.log(req.params.id)
    res.send(`PUT ID: ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
    console.log(req.params.id)
    res.send(`DELETE ID: ${req.params.id}`)
})

module.exports = router;