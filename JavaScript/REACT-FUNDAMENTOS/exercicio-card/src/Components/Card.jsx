import styles from '../Styles/Card.module.css'
import Button from './Button'

export default function Card ({title, poster}) {
    return (
        <div
            className={styles.container}
        >
            <picture>
                <img src={poster} alt={title} />
            </picture>
            <div
                className={styles.text}
            >
                <h2>
                    {title}
                </h2>
                <p>
                    Um pôster decorativo épico da filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dis mais icônicos filmes de todos os tempo. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo.
                </p>
                <Button />
            </div>
        </div>
    )
}