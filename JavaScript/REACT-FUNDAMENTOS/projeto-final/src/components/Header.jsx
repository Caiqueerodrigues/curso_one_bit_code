import { Link } from 'react-router-dom'
import './styles/layout.css'

export default function Header () {
    return (
        <>
            <div className='row'>
                <div className='logo'>
                    <Link to="/">
                        <h2>
                            Projeto Final
                        </h2>
                        <p>
                            Controle de estoque
                        </p>
                    </Link>
                </div>
                <div>
                    <Link to="/">
                        <button>
                            Inicío
                        </button>
                    </Link>
                    <Link to="items">
                        <button>
                            Items
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}