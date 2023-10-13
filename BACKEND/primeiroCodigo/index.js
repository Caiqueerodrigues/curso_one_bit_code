const moment = require('moment'); //necessário importar a lib

function SendMyName(name) {
    console.log(name);
    console.log(moment().format('HH:mm'))
};

SendMyName('Caíque Rodrigues');