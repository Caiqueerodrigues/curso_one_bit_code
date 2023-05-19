import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import Card from './Components/Card'

import foto from './assets/eu.jpg'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Card 
        avatar={foto}
        nome="Caíque Rodrigues"
        bio='Nascido em 05/12/1996 em Birigui-SP'
        email="caiquerodriguesalmeida@gmail.com"
        fone="+55 (18) 99715-2961"
        linkGit='https://github.com/Caiqueerodrigues'
        nomeG='GitHub'
        linkLink='https://www.linkedin.com/in/caique-rodrigues-a113ab249/'
        nomeL='LinkedIn'
        linkTwitter='https://github.com/Caiqueerodrigues'
        nomeT='Twitter'
      />
    </>
  </React.StrictMode>,
)
