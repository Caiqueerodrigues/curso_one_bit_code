import styles from '../styles/card.module.css'
import Button from './Button'

export default function Card ({avatar, nome, bio, email, fone}) {
    return (
        <div
            className={styles.container}
        >
            <picture>
                <img src={avatar} />
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
                link='https://github.com/Caiqueerodrigues'
                nome='GitHub'
            />
            <Button 
                link='https://www.linkedin.com/in/caique-rodrigues-a113ab249/'
                nome='LinkedIn'
            />
            <Button 
                link='https://github.com/Caiqueerodrigues'
                nome='Twitter'
            />
        </div>
    )
}