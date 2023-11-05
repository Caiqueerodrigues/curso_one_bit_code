const express = require('express');

const router = express.Router(); //do próprio express

const checklist = require('../models/checklist.js');

router.get('/', async (req, res) => { 
    //parametro da rota, vem na chamada
    try {
        let checklists = await checklist.find({});
        // res.status(200).json(checklists);
        res.status(200).render('checklists/index',{ checklists: checklists})
    } catch(e) {
        // res.status(500).json(e)
        res.status(500).render('pages/error',{ error:'Erro ao exibir as listas de tarefas'})
    }
})

router.post('/', async (req, res) => { 
    //o express diferencia a chamada pelo VERBO
    let { name } = req.body.checklist;
    let Checklist = new checklist({name});
    
    try {
        await Checklist.save();
        res.redirect('/checklists'); //redireciona a rota
    } catch(e) {
        res.status(422).render('pages/error', {error: 'Erro ao criar Checklist'})
    }
})

router.get('/new', async (req, res) => {
    try {
        let checklist = new checklist();
        res.status(200).render('checklists/new', { checklist: checklist});
    } catch(err) {
        res.status(422).render('checklists/new', { checklist: {...checklist, err}});
    }
})

router.get('/:id', async (req, res) => {
    //dois pontos indica parametro
    const id = req.params.id;
    try {
        // res.status(200).json(checkList);
        let Checklist = await checklist.findById(id);
        res.status(200).render('checklists/show',{ checklist: Checklist });
    } catch (error) {
        // res.status(422).json(error)
        res.status(422).render('pages/error',{ error:'Erro ao exibir as listas de tarefas'});
    }
})

router.get('/:id/edit', async (req, res) => {
    const id = req.params.id;
    
    try {
        //findByIdAndUpdate - encontra e já modifica
        let checkList = await checklist.findById(id);
        //objeto new: true é ára retornar o objeto modificado
        //sem ele, retorna antes de modificar
        res.status(200).render('checklists/edit', { checklist: checkList });
    } catch (error) {
        es.status(500).render('pages/error',{ error:'Erro ao exibir a página de edição de tarefas'});
    }
})

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const { name } = req.body.checklist;
    let check = await checklist.findById(id);

    try {
        await checklist.findByIdAndUpdate(id, { name }, { new: true });
        //ele entra e já modifica
        //new:True -> Retorna o obj já modificado
        //sem ele retorna sem modificar
        res.redirect('/checklists');
    } catch (er) {
        let errors = er.errors;
        console.log(er.message)
        res.status(422).render('checklists/edit', { checklist: { ...check, errors } })
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    
    try {
        //findByIdAndRemove - encontra e já remove
        let CheckList = await checklist.findByIdAndRemove(id);
        res.status(200).json(CheckList);
    } catch (e) {
        res.status(422).json(e)
    }
})

module.exports = router;