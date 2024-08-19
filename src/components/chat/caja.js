// import Script from "next/script"
import SendIcon from "../svg/send"
import Script from "next/script"
// import Mensajes from "./mensajes"
// import { useState } from "react"


export default function CajaDeTexto({ onSubmit }) {

    const handleSubmit = (e) => {

        e.preventDefault()

        // El jquery :3
        const $ = (el) => document.querySelector(el)

        const $input = $("textarea")
        const $texto = $input.value

        const remitente = "Tú"
        const contenido = $texto
        
        // Este viene de los props ({ onSubmit })
        onSubmit({ remitente, contenido })

        $input.value = ""

    }

    return (
        <>
            <form className="flex w-3/4 justify-center items-center text-xl gap-x-2" onSubmit={handleSubmit}>
                <textarea rows={3} className="flex-grow py-2 px-6 rounded-md text-stone-950 border-2 focus:border-sky-400" type="text" placeholder="Escribe tu mensaje... " />
                <button className={`bg-sky-200 rounded-md py-3 px-6 drop-shadow-sm transition ease-in-out hover:bg-sky-400 hover:scale-110`} type="submit">
                    <SendIcon />
                </button>
            </form>

            <Script scr="@/workers/worker_uno.js" strategy="worker" type="module" />
        </>
    )
}