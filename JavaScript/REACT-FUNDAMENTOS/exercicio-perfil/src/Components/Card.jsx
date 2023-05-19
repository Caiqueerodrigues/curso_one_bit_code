import styles from '../styles/card.module.css'
import Button from './Button'

export default function Card ({avatar, nome, bio, email, fone, linkGit, nomeG, linkLink, nomeL, linkTwitter, nomeT}) {
    return (
        <div
            className={styles.container}
        >
            <picture>
                <img src={avatar} alt={`Foto de ${nome}`} />
            </picture>
            <h2>
                {nome}
            </h2>
            <hr />
            <p>
                {bio}
            </p>
            <hr />
            <p>
                {fone}
            </p>
            <hr />
            <p>
                {email}
            </p>
            <hr />
            <Button 
                link= {linkGit}
                nome={nomeG}
            />
            <Button 
                link={linkLink}
                nome={nomeL}
            />
            <Button 
                link={linkTwitter}
                nome={nomeT}
            />
        </div>
    )
}