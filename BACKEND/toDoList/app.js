require('./config/dataBase.js');
const express = require('express');

const path = require('path');

const checkListsRouter = require("./src/routes/checkList.js");
const rootRouter = require("./src/routes/index.js");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))
//dizendo ao app que os arquivos estaticos estarão em PUBLIC
app.use(express.urlencoded({extended: true})); //serve para pegar os valores do FORM e deixar disponivel para o BACK

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs') //mostrar o engine
//serve para inserir dados mais facil

app.use('/checklists', checkListsRouter) //rota externa
app.use('/', rootRouter) //rota externa

app.listen(3000, () => {
    console.log("Servidor iniciou");
})