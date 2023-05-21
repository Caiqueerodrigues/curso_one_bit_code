import { Fragment } from "react";
import React from "react";
import { useState } from "react";

export default function Form() {
    const [name, setName] = useState('')
    function handlechange (ev) {
        setName(ev.target.value)
    }

    return (
        <>
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" name="name" value={name} onChange={handlechange}/>
            </div>
            <br />
            <button>Enviar</button>
            <span>{name}</span>
        </>
    )
}