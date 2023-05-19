import DescricaoLink from './DescricaoLink/DescricaoLink'
import './style.css'

export default function Planet ({nome, descricao, link, img, click, gray}) {
    return (
        <div onClick={() => click(nome)}>
            <h4>{nome}</h4>
            <DescricaoLink 
                descricao = {descricao}
                link = {link}
            />
            <picture>
                <img src={img} className={gray ? 'grayImg' : 'colorImg'} alt="Imagem do planeta" />
            </picture>
            <hr />
        </div>
    )
}