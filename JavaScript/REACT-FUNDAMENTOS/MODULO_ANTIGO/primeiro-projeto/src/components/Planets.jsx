import { Fragment } from "react"
import Planet from "./Planet/Planet.jsx"

function click (nome) {
    console.log(`Um Click no planeta ${nome}`);
}

export default function Planets() {
    return (
        <>
            <h3>Planets List</h3>
            <button>Mostrar Mensagem</button>
            <hr />
            <Planet 
                nome="Mercúrio"
                // descricao='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore maiores corporis, a at repudiandae quibusdam!'
                img='https://upload.wikimedia.org/wikipedia/commons/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg'
                link='https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)'
                click={click}
                gray={true}
            />
            <Planet 
                nome="Plutão"
                descricao='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore maiores corporis, a at repudiandae quibusdam!'
                img='https://upload.wikimedia.org/wikipedia/commons/e/ef/Pluto_in_True_Color_-_High-Res.jpg'
                // link='https://pt.wikipedia.org/wiki/Plut%C3%A3o'
                click={click}
                gray={false}

            />
        </>
    )
}