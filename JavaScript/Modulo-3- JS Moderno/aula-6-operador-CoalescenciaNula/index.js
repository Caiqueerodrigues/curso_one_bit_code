const a = 0
// 0 = false

const b = null
// null = false 

const c= `Teste`
// string com CONTEUDO = TR

//JS converte 0(zero) e null para FALSE e STRING com conteudo é TRUE

console.log(a || b || c)

console.log(a ?? b ?? c)

//OPERADOR (??) ignora essa conversao
//só será FALSE NULL e UNDEFINED

//------------------------------------------------------------
//atribuições com este operador

let d = 0

let e = d ?? 42

console.log({d,e})