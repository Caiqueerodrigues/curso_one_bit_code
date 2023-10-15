const express = require('express');

const app = express();

app.get('/',(req, res) => { //1° arg é a rota, 2° requisição, 3° resposta
    res.send('<h1>Minha lista de tarefas :D</h1>'); // enviando a resposta da req
})

app.get('/json', (req, res) => {
    //só acrescentar o JSON
    res.json({title: "Tarefa X", done: true}) //retorna OBJ.
})

app.listen(3000, () => {
    console.log("Servidor iniciou")
})