require('./config/dataBase.js');
const express = require('express');

const path = require('path');

const checkListsRouter = require("./src/routes/checkList.js");
const taskRouter = require('./src/routes/task.js')
const rootRouter = require("./src/routes/index.js");
const methodOverride = require('method-override');


const app = express();

app.use(methodOverride('_method', { methods: ['POST', 'GET']})); 
//para as rotas PUT e DELETE (params é da própria lib)

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))
//dizendo ao app que os arquivos estaticos estarão em PUBLIC
app.use(express.urlencoded({extended: true})); //serve para pegar os valores do FORM e deixar disponivel para o BACK


app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs') //mostrar o engine
//serve para inserir dados mais facil


app.use('/checklists', checkListsRouter) //rota externa
app.use('/', rootRouter) //rota externa
app.use('/checklists', taskRouter.checklistdependent)  //rota interna dependente de checklists
app.use('/tasks', taskRouter.simple) //rota interna independente

app.listen(3000, () => {
    console.log("Servidor iniciou");
})