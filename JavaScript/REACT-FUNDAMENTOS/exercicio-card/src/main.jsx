import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './Components/Card'
import posterStarWars from './assets/starwars.jpg'
import posterEmpite from './assets/empire.jpg'
import posterReturn from './assets/return.jpg'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div
      style={{
        display: 'grid',
        placeContent: 'center'
      }}
    >
      <Card 
        title="Pôster: Star Wars (1977)"
        poster={posterStarWars}
      />
      <br />
      <Card 
        title="Pôster: Empire Stikes Back (1980)"
        poster={posterEmpite}
      />
      <br />
      <Card 
        title="Pôster: Return os the Jadi (1983)"
        poster={posterReturn}
      />    
    </div>
  </React.StrictMode>,
)
