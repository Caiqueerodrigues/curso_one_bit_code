const express = require('express');

const router = express.Router(); //do próprio express

const Checklist = require("../models/checklist.js");

router.get('/', async (req, res) => { 
    //parametro da rota, vem na chamada
    try {
        let checklists = await Checklist.find({});
        res.status(200).json(checklists);
    } catch(e) {
        res.status(500).json(e)
    }
})

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

router.get('/:id', async (req, res) => {
    //dois pontos indica parametro
    const id = req.params.id;
    try {
        let checkList = await Checklist.findById(id);
        res.status(200).json(checkList);
    } catch (error) {
        res.status(422).json(error)
    }
})

router.put('/:id', async (req, res) => {
    let { name } = req.body;
    const id = req.params.id;
    
    try {
        //findByIdAndUpdate - encontra e já modifica
        let checkList = await Checklist.findByIdAndUpdate(id, { name }, {new: true});
        //objeto new: true é ára retornar o objeto modificado
        //sem ele, retorna antes de modificar
        res.status(200).json(checkList);
    } catch (er) {
        res.status(422).json(e)
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    
    try {
        //findByIdAndRemove - encontra e já remove
        let checkList = await Checklist.findByIdAndRemove(id);
        res.status(200).json(checkList);
    } catch (e) {
        res.status(422).json(e)
    }
})

module.exports = router;