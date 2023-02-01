function registro(element) {
    const usuarioName  = element.children.name.value
    const senha = element.children.password.value
    const confirmSenha = element.children.confirmacao.value

    if (senha === confirmSenha) {
        alert(`Usuário Registrado`)
    } else {
        alert(`As senhas nao Conferem`)
    }
    console.log({usuarioName, senha, confirmSenha})
}