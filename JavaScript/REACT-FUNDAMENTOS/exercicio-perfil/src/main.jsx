import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import Card from './Components/card'

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
      />
    </>
  </React.StrictMode>,
)
