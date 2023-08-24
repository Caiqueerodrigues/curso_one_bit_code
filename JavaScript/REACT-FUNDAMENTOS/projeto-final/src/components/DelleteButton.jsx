import './styles/button.css'

export default function DelleteButton () {

    const handleDelete = () => {
        if(confirm('Tem certeza que deseja excluir o item?')) {
            
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