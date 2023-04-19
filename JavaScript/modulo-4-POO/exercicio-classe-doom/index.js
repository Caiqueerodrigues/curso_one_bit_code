import { Component } from "./component.js"
import { Form } from "./form.js"
import { Input } from "./input.js"
import { Label } from "./label.js"

const title = new Component(`h1`, `body`, { textContent: `Olá, Mundo!`})
title.render()
console.log(title)

title.tag='h4'
title.build().render()

const form  = new Form ('body')

const label = new Label('Nome', form, {htmlfor: 'inputName'})

const input = new Input(form, {id: 'nameInput', name: 'name'})

form.render()
label.render()
form.addChildren(new Component('br'),new Component('br'),input)

form.addChildren(
    new Component('br'),
    new Component('br'),
    new Label('Data de Nascimento', {htmlfor:'birthday'}),
    new Component('br'),
    new Component('br'),
    new Input(form, {id:'birthday', type:'date'})
)