import { useState } from 'react'
import styles from '../styles/card.module.css'
import Input from './Input/Input'

export default function Card() {
    let senha = ''
    let [senhaMostrar, setSenhaMostrar] = useState('')
    let btnGerar = 'Gerar'
    let [btnCopiar, setBtnCopiar]= useState('Copiar')
    let [sizePassword, setSizePassword] = useState(12)
    let [showInput, setShowInput] = useState(false)

    function password() {
        if(btnCopiar !== 'Copiar') {
            document.getElementById('copy').style.display='inline-flex'
            document.getElementById('copy').style.justifyContent = 'center'
            document.getElementById('divBtn').style.display='none'
            setBtnCopiar('Copiar')
        }

        const caracteresEspeciais = "!@#$%^&*()_+{}[]<>?.,;:/"
        const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz'
        const numeros = "0123456789"
        const caracteresPossiveis = letrasMaiusculas + numeros + caracteresEspeciais + letrasMinusculas
        
    
        senha += caracteresEspeciais.charAt(Math.floor(Math.random() * caracteresEspeciais.length))
        senha += letrasMaiusculas.charAt(Math.floor(Math.random() * letrasMaiusculas.length))
        senha += letrasMinusculas.charAt(Math.floor(Math.random() * letrasMinusculas.length))
        senha += numeros.charAt(Math.floor(Math.random() * numeros.length))
    
        while (senha.length < sizePassword) {
            senha += caracteresPossiveis.charAt(Math.floor(Math.random() * caracteresPossiveis.length));
        }
        setSenhaMostrar(senha)
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
                <div>
                    <label htmlFor="showInput">Customizar o tamanho: </label>
                    <input 
                        type="checkbox" 
                        id="showInput" 
                        value={showInput}
                        onChange={function () {setShowInput(currentState => !currentState), setSizePassword(12)}}
                    />
                    {showInput ? (
                        <div>
                            <label htmlFor="passwordSize">Tamanho: </label>
                            <Input sizePassword={sizePassword} setSizePassword={setSizePassword} />
                        </div>
                    ) : null } 
                </div>
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