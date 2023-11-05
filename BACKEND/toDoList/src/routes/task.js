const express = require('express');

const checklistdependentRoute = express.Router();
const simpleRouter = express.Router(); //rota que só precisa da TASK para delete

const checklist = require('../models/checklist.js');
const task = require('../models/task.js');

checklistdependentRoute.get('/:id/tasks/new', async (req, res) => {
    const id = req.params.id

    try {
        let Task = new task();
        res.status(200).render('tasks/new', { checklistId: id, task: Task })
    } catch(error) {
        res.status(422).render('pages/error', {error: 'Erro ao carregador o formulário'})
    }
})

checklistdependentRoute.post('/:id/tasks', async (req, res) => {
    const { name } = req.body.task;
    const id = req.params.id;
    const Task = new task({ name, checklist: id });

    try {
        await Task.save();
        let check = await checklist.findById(id);
        check.tasks.push(Task);
        await check.save(); //salva as alterações no DB
        //precisa atualizar e dizer a relação da task com o checklist
        res.redirect(`/checklists/${id}`)
    } catch(error) {
        let errors = error.errors;
        res.status(422).render('tasks/new', {error: {...Task, errors}, id})
    }
})

simpleRouter.delete('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        let Task = await task.findByIdAndDelete(id);
        //ele encontra e já deleta o item que possui o id
        let check = await checklist.findById(Task.checklist); //fazendo relação entre task e checklist
        let taskToRemove = check.tasks.indexOf(Task._id); //encontrando o indice da task a remover
        check.tasks.splice(taskToRemove, 1); //removendo somente a task
        check.save(); //salvando as alterações
        res.redirect(`/checklists/${check.id}`) 
    }catch(error) {
        res.status(422).render('pages/error', {error: 'Erro ao remover a tarefa'})
    }
})

module.exports = { checklistdependent: checklistdependentRoute, simple: simpleRouter }