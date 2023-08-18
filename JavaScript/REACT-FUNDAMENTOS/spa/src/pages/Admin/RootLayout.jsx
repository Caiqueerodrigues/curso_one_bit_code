import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

export default function RootLayout () {
    return (
        <>
            <Header />
            <main>
                <p>Esse é o layout principal. Abaixo está o conteudo dinâmico de cada rota.</p>
                <hr />
                <Outlet />
            </main>
            <footer>
                <p>Feito com React Router DOM</p>
            </footer>
        </>
    )
}