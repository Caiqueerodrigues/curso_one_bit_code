import { useParams } from "react-router-dom";
import ItemForm from "../../components/ItemForm";
import useStock from "../../hooks/useStock";

export default function UpdateItem () {
    const { GetItem } = useStock()
    const { id } = useParams()
    const item = GetItem(id)

    return (
        <>
            <ItemForm itemToUpdate={item} />
        </>
    )
}