import { useState } from 'react'
import styles from '../styles/card.module.css'

export default function Card() {
    let senha = ''
    let [senhaMostrar, setSenhaMostrar] = useState('')
    let btnGerar = 'Gerar'
    let [btnCopiar, setBtnCopiar]= useState('Copiar')
    function password() {
        if(btnCopiar !== 'Copiar') {
            document.getElementById('copy').style.display='inline-flex'
            document.getElementById('copy').style.justifyContent = 'center'
            document.getElementById('divBtn').style.display='none'
            setBtnCopiar('Copiar')
        }

        const caracteresEspeciais = "!@#$%^&*()_+{}[]<>?"
        const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz'
        const numeros = "0123456789"
        const caracteresPossiveis = letrasMaiusculas + numeros + caracteresEspeciais + letrasMinusculas
        
    
        senha += caracteresEspeciais.charAt(Math.floor(Math.random() * caracteresEspeciais.length))
        senha += letrasMaiusculas.charAt(Math.floor(Math.random() * letrasMaiusculas.length))
        senha += letrasMinusculas.charAt(Math.floor(Math.random() * letrasMinusculas.length))
        senha += numeros.charAt(Math.floor(Math.random() * numeros.length))
    
        while (senha.length < 16) {
            senha += caracteresPossiveis.charAt(Math.floor(Math.random() * caracteresPossiveis.length));
        }
        setSenhaMostrar(senha)
        console.log(senha, `${senhaMostrar} Caracteres: ${senhaMostrar.length}`)
        return senhaMostrar;
    }

    function copy() {
        navigator.clipboard.writeText(senhaMostrar)
        setBtnCopiar('Copiado')
        document.getElementById('copy').style.display='none'
        document.getElementById('divBtn').style.display='inline-block'
    }
    return (
        <div 
            className={styles.container}
        >
            <div
                className={styles.card}
            >
                <h1>Gerador de Senhas Seguras</h1>
                <button
                    onClick={password}
                    className={styles.button}
                >
                    {btnGerar}
                </button>
                <button
                    onClick={copy}
                    className={styles.button}
                    id='copy'
                >
                    {btnCopiar}
                </button>
                <span
                    className={styles.divBtn}
                    id='divBtn'
                >
                    {btnCopiar}
                </span>
                <div
                    id={styles.visor}
                >
                    {`${senhaMostrar} Caracteres: ${senhaMostrar.length}`}
                    
                </div>
            </div>
        </div>
    )
}