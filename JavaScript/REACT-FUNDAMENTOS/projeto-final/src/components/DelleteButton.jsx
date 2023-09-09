import { useNavigate } from 'react-router-dom';
import useStock from '../hooks/useStock'
import './styles/button.css'

export default function DelleteButton ({ itemName, itemId }) {
    const { DeleteItem } = useStock();
    
    const handleDelete = () => {
    const navigate = useNavigate();
        if(confirm(`Tem certeza que deseja excluir ${itemName}?`)) {
            DeleteItem(itemId)
            navigate("/items")
        }
    }

    return (
        <>
            <button 
                className='buttonDellete is-small'
                onClick={handleDelete}
            >
                Excluir
            </button>
        </>
    )
}