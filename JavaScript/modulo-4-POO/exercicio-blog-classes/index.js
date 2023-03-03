const Author = require("./Author")

const Caique = new Author (`Caique Rodrigues`)

const post = Caique.whitePost(`Título do Post`, 'Lorem ipsum dólo sic...')

post.addComment(`Felipe Souza`, 'Muito Bom')
post.addComment(`Adriano Aguiar`, 'Muito Bem')

console.log(Caique)
console.log(post)