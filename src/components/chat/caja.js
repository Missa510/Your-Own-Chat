"use client"
// import Script from "next/script"
import SendIcon from "../svg/send"
import Script from "next/script"
// import Mensajes from "./mensajes"
// import { useState } from "react"

function Chatear(e){

    e.preventDefault()

    // El jquery :3
    const $ = (el) => document.querySelector(el)

    const $input = $("textarea")
    const $texto = $input.value
    
    window.alert($texto)
}

export default function CajaDeTexto() {

    return (
        <>
            <footer className="flex justify-center sticky bottom-4 backdrop-blur-sm pt-4 z-50 w-full">
                <form className="flex w-3/4 justify-center items-center text-xl gap-x-2" onSubmit={Chatear}>
                    <textarea rows={3} className="flex-grow py-2 px-6 outline-none border-none rounded-md text-stone-950" type="text" placeholder="Escribe tu mensaje... " />
                    <button className={`bg-sky-200 rounded-md py-3 px-6 drop-shadow-sm transition ease-in-out hover:bg-sky-400 hover:scale-110`} type="submit">
                        <SendIcon />
                    </button>
                </form>
            </footer>
            <Script scr="@/workers/worker_uno.js" strategy="worker" type="module"/>
        </>
    )
}