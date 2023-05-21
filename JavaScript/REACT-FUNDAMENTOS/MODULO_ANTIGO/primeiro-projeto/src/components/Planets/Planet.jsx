import { useState } from 'react'
import React from 'react'
import DescricaoLink from './DescricaoLink/DescricaoLink'
import './style.css'
import Form from './Form/Form'

export default function Planet ({nome, descricao, link, img, click, gray}) {
    const names = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    
    return (
        <div onClick={() => click(nome)}>
            <h4>{nome}</h4>
            <DescricaoLink 
                descricao = {descricao}
                link = {link}
            />
            <picture>
                <img src={img} className={gray ? 'grayImg' : 'colorImg'} alt="Imagem do planeta" />
            </picture>
            <hr />
            <h4>Satélites</h4>
            <ul>
                {names.map((n) =>
                    <li>Satélite {n}</li>
                )}
            </ul>
            <Form />
            <hr />
        </div>
    )
}