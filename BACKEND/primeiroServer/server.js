const http = require('http'); 

const server = http.createServer((req, res) => {
    //tudo aqui dentro é o que o cliente manda, e o que retorna pra ele
    console.log(req.method);
    console.log(req.url); //rota
    res.statusCode = 200; //resolvido
    res.end("<h1> Deu tudo certo</h1>");
    //o retorno final da requisição

});
//req - requisição do cliente
//res - resposta pelo servidor

server.listen(3000, () => {
    console.log("Servido ativo");
})
//3000 - porta que ficará sendo observada
//sempre que algo entrar ou sair por ela, entra no bloco de codigo