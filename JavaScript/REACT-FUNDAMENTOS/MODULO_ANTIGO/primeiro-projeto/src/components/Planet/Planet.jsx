import DescricaoLink from './DescricaoLink/DescricaoLink'
import './style.css'

export default function Planet ({nome, descricao, link, img, click}) {
    return (
        <div onClick={() => click(nome)}>
            <h4>{nome}</h4>
            <DescricaoLink 
                descricao = {descricao}
                link = {link}
            />
            <picture>
                <img src={img} alt="Imagem do planeta" />
            </picture>
            <hr />
        </div>
    )
}