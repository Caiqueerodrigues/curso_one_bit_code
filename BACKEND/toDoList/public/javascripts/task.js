const setTagAsDone = async (el, id) => {
    event.preventDefault();

    try {
        let headers = new Headers({ 'Content-Type': 'application/json' }); //cabeçalho da requisição
        let body = JSON.stringify({task: {done: el.checked}}); //pegando o elemento e dando CHECKED
        let response = await fetch(`/tasks/${id}?_method=PUT`, {headers: headers, body: body, method: "PUT"}); 
        //chamada ao BACKEND
        let data = await response.json(); //conversão da resposta do back 
        let Task = await data.Task;
        let parent = el.parentNode; // pegando o elemento PAI

        if(Task.done) {
            el.checked = true;
            parent.classList.add('has-text-success');  //cada classe em seu ADD
            parent.classList.add('is-italic');
            //necessário pq se houver alteração após o carregamento, não pegará a classe
        }
        else {
            el.checked = false 
            parent.classList.remove('has-text-success');
            parent.classList.remove('is-italic'); 
        }
    } catch (error) {
        alert('Erro ao atualizar a tarefa')
        console.log(error.message);
    }
}