import { useRouteError } from "react-router-dom";

export default function ItemBoundary () {
    const error = useRouteError()

    if(error.status === 1) {
        return <h2>Ooops.. Nenhum produto cadastrado. =( </h2>
    }
}