"use client"

import { useState } from "react"

export default function Contacto(){
    const [active, setActive] = useState<string | null>(null);

    const handleInput = (input: string) => {
        if(active === null){
            setActive(input)
        }
        else setActive(null)
    }

    return(
        <div className="contact-form">
            <h2 className="form-title">Contactanos!</h2>
            <p className="form-text">Puedes enviarnos tu consulta, agradecimiento o duda por este formulario:</p>
            <form className="form" onSubmit={(e) => e.preventDefault()}>
                <label className={`label ${active === "nombre" ? "active-label" : ""}`} onClick={() => handleInput("nombre")}>
                    <p className="label-text">Nombre</p>
                    <input
                        type="text"
                        name="nombre"
                        className="input"
                    />
                </label>
                <label className={`label ${active === "mail" ? "active-label" : ""}`} onClick={() => handleInput("mail")}>
                    <p className="label-text">E-mail</p>
                    <input
                        type="e-mail"
                        name="mail"
                        className="input"
                    />
                </label>
                <label className={`label ${active === "telefono" ? "active-label" : ""}`} onClick={() => handleInput("telefono")}>
                    <p className="label-text">Teléfono</p>
                    <input
                        type="number"
                        name="telefono"
                        className="input"
                    />
                </label>
                <label className={`label ${active === "mensaje" ? "active-label" : ""}`} onClick={() => handleInput("mensaje")}>
                    <p className="label-text">Mensaje</p>
                    <textarea
                        name="mensaje"
                        maxLength={450}
                        className="input text-area"
                    />
                </label>
                <button className="button primary-btn" type="button">
                    enviar
                </button>
            </form>
        </div>
    )
}