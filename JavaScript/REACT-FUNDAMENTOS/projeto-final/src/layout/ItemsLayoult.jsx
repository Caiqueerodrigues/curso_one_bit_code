import { Link, Outlet, useLocation } from "react-router-dom";

export default function ItemsLayoutl () {
    const { pathname } = useLocation()

    return (
        <main>
            <h1>Stock Items</h1>
            <div>
                <Link to="/items">
                    <button className={`tabs ${pathname === '/items' && 'active'}`}>
                        Todos os Items
                    </button>
                </Link>
                <Link to="/items/new">
                    <button className={`tabs ${pathname === '/items/new' && 'active'}`}>
                        Novo Item
                    </button>
                </Link>
                <hr />
            </div>
            <Outlet />
        </main>
    )
}