import styles from '../Styles/Card.module.css'

export default function Card () {
    return (
        <div
            className={styles.container}
        >
            <picture>
                <img src="./starwars.jpg" alt="Poster de Star Wars" />
            </picture>
            <div
                className={styles.text}
            >
                <h2>
                    Pôster: Star Wars (1977)
                </h2>
                <p>
                    Um pôster decorativo épico da filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dis mais icônicos filmes de todos os tempo. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo.
                </p>
                <button>Compra agora</button>
            </div>
        </div>
    )
}