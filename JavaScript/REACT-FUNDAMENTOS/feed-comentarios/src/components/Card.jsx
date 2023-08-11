import { useState } from 'react'
import '../index.css'
import Comments from './Commentario'
import { useEffect } from 'react'
import Commentario from './Commentario'
export default function Card () {
    let [comments, setcomments] = useState([])
    let [email, setEmail] = useState('')
    let [comentario, setComentario] = useState('')
    let [id, setId] = useState(0)
    //coments = {email, data, hr, coments}

    useEffect(() => {
        console.log(comments)
    },[comments])
    const comment = (ev) => {
        ev.preventDefault()

        let novoComentario = {
                id: id,
                email: email,
                date: new Date().toLocaleDateString(),
                hour: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getMinutes()}`,
                comment: comentario
            }
        setcomments(state => [novoComentario, ...state])
        setId(state => state +1)
        setEmail('')
        setComentario('')
    }
    return (
        <div
            className='card'
        >
            <h2>Sessão de Comentários</h2>
            <form>
                <label 
                    htmlFor="email"
                >
                    Email: 
                </label>
                <input 
                    type="email" 
                    placeholder='example@example.com'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label 
                    htmlFor="comentario"
                >
                    Comentário: 
                </label>
                <textarea 
                    id="comentario" 
                    rows="10"
                    placeholder='Seu comentário aqui!'
                    value={comentario}
                    onChange={(e) => setComentario(e.target.value)}
                ></textarea>
                <input 
                    type='submit'
                    id='submit'
                    value='Adicionar Comentário'
                    onClick={comment}
                />
            </form>
            <div 
                className="divider"
            ></div>
            <div>
                {comments.length > 0 ? 
                    comments.map((comentario) =>{
                        <Commentario
                            key={comentario.id}
                            email={comentario.email}
                            date={comentario.date}
                            hour={comentario.hour}
                            comment={comentario.comment}
                        />
                    }) :                    
                    <h3>Seja o primeiro a comentar</h3>
                }
            </div>
        </div>
    )
}