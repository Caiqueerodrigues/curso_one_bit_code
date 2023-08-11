export default function Game({title, cover, onRemove}) {
    return (
        <div>
            <img 
                src={cover}
            />
            <div>
            <h2>
                {title}
            </h2>
            <button
                onClick={onRemove}
            >
                Remover Jogo
            </button>
            </div>
        </div>
    )
}