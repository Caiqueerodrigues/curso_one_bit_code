import { useState } from 'react'
import './index.css'

export default function App() {
  let [author, setAuthor] = useState('')
  let [content, setContent] = useState('')
  let [comments, setComments] = useState([])

  const handleSubmit = (ev) => {
    ev.preventDefault()
    
    const newComment = {
      id: Math.floor(Math.random() * 1000000),
      email: author,
      date: `Em ${new Date().toLocaleDateString()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getMinutes()}`,
      comment: content,
    }

    setComments((state) => [newComment, ...state])
    setAuthor('')
    setContent('')
  }
  return (
    <div 
      id="app"
    >
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
            value={author}
            onChange={(ev) => setAuthor(ev.target.value)}
            required
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
            value={content}
            onChange={(ev) => setContent(ev.target.value)}
            required
          ></textarea>
          <input
            type='submit'
            id='submit'
            value='Adicionar Comentário'
            onClick={handleSubmit}
          />
        </form>
        <div 
          className="divider"
        ></div>
        <section 
          id="comments"
        >
          {comments.length > 0 
            ? (
              comments.map((comment) => (
                <div
                  key={comment.id}
                >
                  <h4
                    className='py-10'
                  >
                    {comment.email}
                  </h4>
                  <p
                    className='py-10'
                  >
                    {comment.date}
                  </p>
                  <p
                    className='py-10'
                  >
                    {comment.comment}
                  </p>
                  <div 
                    className="divider"
                  ></div>
                </div> 
              ))
            ) : (
              <h4
                className='center'
              >
                Seja o primeiro a adcionar um comentário
              </h4>
            ) 
          }
        </section>
      </div>
    </div>
  )
}