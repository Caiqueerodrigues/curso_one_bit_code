const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const nameDb= 'to-do-list';
const user = 'caiquerodrigues';
const password = 'um2tres4'
const url = `mongodb+srv://${user}:${password}@cluster0.uvrcnay.mongodb.net/`;

mongoose.connect(`${url}${nameDb}`,{useNewUrlParser: true, useUnifiedTopoLogy: true})
    .catch((err) => console.log(`ERRO: ${err}`))