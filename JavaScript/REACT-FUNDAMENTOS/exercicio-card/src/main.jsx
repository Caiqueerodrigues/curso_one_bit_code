import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './Components/Card'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'grid',
        placeContent: 'center'
      }}
    >
      <Card />
    </div>
  </React.StrictMode>,
)
