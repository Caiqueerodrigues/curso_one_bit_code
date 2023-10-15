const express = require('express');

const app = express();

app.use(express.json()); //processa o json que retornou, e 
//acrescenta ele ao corpo da resposta

const log = (req, res, next) => { 
    //obeigatório ter o NEXT()
    //next serve para passar para o proximo midware
    console.log(req.body); //json vindo da req
    console.log(`Data: ${Date.now()}`);
    next(); // permiti fazer varias "coisas"
}

app.use(log);

app.get('/',(req, res) => { //1° arg é a rota, 2° requisição, 3° resposta
    res.send('<h1>Minha lista de tarefas :D</h1>'); // enviando a resposta da req
})

app.get('/json', (req, res) => {
    //só acrescentar o JSON
    res.json({title: "Tarefa X", done: true}); //retorna OBJ.
})

app.listen(3000, () => {
    console.log("Servidor iniciou");
})