const dayjs = require("dayjs")

function dataDeNascimento (data) {
    const aniversario = [...data]
    const anoNascimento = `${aniversario[6]}${aniversario[7]}${aniversario[8]}${aniversario[9]}`
    const diaAtual = dayjs().format('DD/MM/YYYY')
    const anoAtual = dayjs().year()
    const idade = `Você tem ` + dayjs(anoAtual).subtract(anoNascimento) + ` anos.`

    const proximoNiver = ` Faltam ` + dayjs(`${dayjs().year()}/${aniversario[3]}${aniversario[4]}/${anoNascimento}`).diff(dayjs(), `day`) + ` dias para o seu Aníversario`
    const dataProximoNiver = `${aniversario[0]}${aniversario[1]}/${aniversario[3]}${aniversario[4]}/`+ dayjs().year()

    console.log(`${idade}
    ${proximoNiver}
    ${dataProximoNiver}`)

}


dataDeNascimento(`05/12/1996`)