import { Component } from "./component.js"
import { Form } from "./form.js"
import { Input } from "./input.js"
import { Label } from "./label.js"

const title = new Component(`h1`, `body`, { textContent: `Olá, Mundo!`})

console.log(title)