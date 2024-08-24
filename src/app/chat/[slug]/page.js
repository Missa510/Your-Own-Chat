"use client"

import { ModelosYEspecificaciones } from "@_$data/modelos"
import { redirect } from "next/navigation"
import ComponenteWorker from "@_$comp/workers/componenteWorker"
import Mensajes from "@_$comp/chat/mensajes"
import CajaDeTexto from "@_$comp/chat/caja"
import React, { useState } from "react"

// export async function generateMetadata() {

//     const modelo = ModelosYEspecificaciones.find(modelo => modelo.model_id === params.slug)

//     return {

//         title: `Chat con ${modelo.model_name}`,
//         description: `Chat con ${modelo.model_name} de manera local`,

//     }
// }

export default function Chat({ params }) {

    const modelo = ModelosYEspecificaciones.find(modelo => modelo.model_id === params.slug)

    const [mensajes, setMensajes] = useState([])

    const handleSubmit = (data) => {
        setMensajes([...mensajes, data])
    }

    if (!modelo) redirect('./')

    return (
        <>
            <section className="flex flex-col items-center justify-center gap-y-8 w-full">

                {/* <a href="/">Volver</a> */}
                <section>
                    <span className="text-5xl font-bold">Chat con {modelo.model_name}</span>
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
            <ComponenteWorker />
        </>
    )

}
