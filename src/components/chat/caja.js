"use client"
// import Script from "next/script"
import SendIcon from "../svg/send"

export default function CajaDeTexto(){
    return(
        <footer className="flex justify-center sticky bottom-4 backdrop-blur-sm p-4 z-50 w-full">
            <form className="flex w-3/4 justify-center items-center text-xl">
                <input className="flex-grow py-2 px-6 outline-none border-none rounded-full text-stone-950" type="text" placeholder="Escribe tu mensaje"/>
                <button disabled >
                    <SendIcon/>
                </button>
            </form>
        </footer>
    )
}