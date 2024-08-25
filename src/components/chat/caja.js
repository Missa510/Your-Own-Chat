// import Script from "next/script"
import SendIcon from "@_$comp/svg/send"
import Script from "next/script"
// import Mensajes from "./mensajes"
// import { useState } from "react"


export default function CajaDeTexto({ onSubmit }) {

    const handleSubmit = (e) => {

        e.preventDefault()

        // El jquery :3
        const $ = (el) => document.querySelector(el)

        const $input = $("textarea")
        const $texto = $input.value.trim()
        const $mensaje_section = $("#mensajes_section")
        // const $mensaje = $mensaje_section.querySelector(".flex")
        const $main = $("main")

        const remitente = "Tú"
        const contenido = $texto

        // Este viene de los props ({ onSubmit })
        if ($texto === "" || $texto === null) return

        onSubmit({ remitente, contenido })
        $input.value = ""

        // $mensaje_section.scrollIntoView({ behavior: "smooth" })

        $main.scrollTop = $main.scrollHeight
        // $main.scrollIntoView({ behavior: "smooth", block: "end" })

    }

    return (
        <form className="flex w-3/4 justify-center items-center text-xl gap-x-2" onSubmit={handleSubmit}>
            <textarea rows={3} className="flex-grow py-2 px-6 rounded-md text-stone-950 border-2 focus:border-sky-400" type="text" placeholder="Escribe tu mensaje... " />
            <button className={`bg-sky-200 rounded-md py-3 px-6 drop-shadow-sm transition ease-in-out hover:bg-sky-400 hover:scale-110`} type="submit">
                <SendIcon />
            </button>
        </form>
    )
}