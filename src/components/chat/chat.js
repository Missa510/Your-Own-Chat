"use client"

import Mensajes from "./mensajes"
import CajaDeTexto from "./caja"
import { useState } from "react"

export default function Chats(props) {

    const [mensajes, setMensajes] = useState([])

    const handleSubmit = (data) => {
        setMensajes([...mensajes, data])
    }

    return (
        <>
            <section className="flex flex-col items-center justify-center gap-y-8 w-full">

                {/* <a href="/">Volver</a> */}
                <section>
                    <span className="text-5xl font-bold">Chat con {props.chatCon}</span>
                </section>

                <section className="flex flex-col items-center gap-y-3 w-full overflow-y-auto">

                    {
                        mensajes.map((mensaje, i) => (

                            <Mensajes key={i} remitente={mensaje.remitente} contenido={mensaje.contenido} />
                        ))
                    }

                </section>

            </section>

            <footer className="flex justify-center sticky bottom-4 pt-4 z-50 w-full">
                <CajaDeTexto onSubmit={handleSubmit} />
            </footer>
        </>
    )
}