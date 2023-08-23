import { createBrowserRouter } from "react-router-dom";
import LayoultDefault from "./layout/LayoutDefault";
import Home from "./pages/Home";
import Item from './pages/items/Item';
import GetItems from "./loader/loadItems";
import ItemBoundary from "./errorBoundary/ItemBoundary";
import ItemsLayoutl from "./layout/ItemsLayoult";
import ListItems from "./pages/items/ListItems";
import AddItem from "./pages/items/AddItem";
import UpdateItem from "./pages/items/UpdateItem";

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
                element: <ItemsLayoutl />,
                children: [
                    {
                        index: true,
                        element: <ListItems />,
                    },
                    {
                        path: "new",
                        element: <AddItem />,
                    },
                    {
                        path: ":id",
                        element: <Item />,
                    },
                    {
                        path: ":id/update",
                        element: <UpdateItem />,
                    },
                ]
            }
        ]
    }
])

export default router