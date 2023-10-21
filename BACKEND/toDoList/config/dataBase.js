const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const nameDb= 'to-do-list';
const url = 'mongodb://localhost/';

mongoose.connect(`${url}${nameDb}`,{useNewUrlParser: true, useUnifiedTopoLogy: true})
    .then(() => console.log('Conectado ao DATABASE'))
    .catch((err) => console.log(`ERRO: ${err}`))