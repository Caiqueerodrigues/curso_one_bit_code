import { createBrowserRouter } from "react-router-dom";
import LayoultDefault from "./layout/LayoutDefault";
import Home from "./pages/Home";
import AllItems from "./pages/AllItems";
import Item from './pages/Item';
import GetItems from "./loader/loadItems";
import ItemBoundary from "./errorBoundary/ItemBoundary";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoultDefault />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "items",
                element: <AllItems />
            },
            {
                path: "items/:itemId",
                element: <Item /> ,
                loader: GetItems,
                errorElement: <ItemBoundary />
            }
        ]
    }
])

export default router