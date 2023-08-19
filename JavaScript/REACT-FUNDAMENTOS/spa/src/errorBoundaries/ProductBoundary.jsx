import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ProductBoundary () {
    const error = useRouteError()

    //função nativa do REACT que verifica o retorno se HÁ ERROS 
    if(isRouteErrorResponse(error)) {
        switch(error.status) {
            case 404: 
                return <h2>Ooops.... Produto não Encontrado! =( </h2> 
            case 401:
                return <h2>Você não está autorizado a ver esta página.</h2>
            case 400: 
                return <h2>Parece que algo de errado na Requisição</h2>
            case 500:
                return <h2>Erro interno no servidor</h2>
        }
    }
    return <h2>Algo deu errado</h2>
}