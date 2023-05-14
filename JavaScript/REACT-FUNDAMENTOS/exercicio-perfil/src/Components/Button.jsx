import '../styles/button.module.css'

export default function Button ({link, nome}) {
    return (
        <div>
            <button>
                <a 
                    href={link}
                    target='_blank'
                >
                    {nome}
                </a>
            </button>
            <br />
        </div>
    )
}