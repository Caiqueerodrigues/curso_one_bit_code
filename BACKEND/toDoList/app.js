const express = require('express');
const checkListsRouter = require("./src/routes/checkList.js");

const app = express();

app.use(express.json());

app.use('/checklists', checkListsRouter) //rota externa

app.listen(3000, () => {
    console.log("Servidor iniciou");
})