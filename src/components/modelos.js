"use client"

import Image from "next/image"
import { ModelosYEspecificaciones } from "@_$data/modelos"
import Link from "next/link"
import { useState, useEffect } from 'react'

function VerificarFirefox() {

    const [usaFirefox, setUsaFirefox] = useState(false)

    useEffect(() => {
        if (typeof navigator !== "undefined") {
            navigator.userAgent.includes('Firefox') && setUsaFirefox(true)
        }
    }, [])

    return (
        usaFirefox ? 
        <h3 className="text-xl xl:text-2xl text-orange-700 bg-orange-300 py-2 px-6 rounded-md">
            Veo que usas Firefox para chatear con los modelos, no hay problema. La sugerencia de compatibilidad no te aparecerá. <span className="font-bold">ATTE: Missa510</span>
        </h3> : null
    )
}

function VerficarRAM(RAM) {

    if (typeof navigator !== "undefined") {
        if ('deviceMemory' in navigator) {
            const RAM_DISPOSITIVO = navigator.deviceMemory
            if (RAM_DISPOSITIVO <= RAM) return (<span className="text-stone-300 italic">~ No recomendado para tú dispositivo</span>)
            else return (<span className="text-green-300">~ Recomendado para tu dispositivo</span>)
        }
    }

}

export default function ModelosCard() {

    return (
        <section>
            <h2 className="text-3xl text-white xl:text-5xl font-bold mb-2"> ¿Te gustó? Empieza ahora </h2>
            <p className="text-slate-300 text-lg xl:text-xl">
                Elije uno de los modelos integrados para comenzar
            </p>

            {VerificarFirefox()}

            <section className="grid place-items-center xl:place-items-stretch grid-cols-1 gap-y-3 2xl:gap-3 2xl:grid-cols-3">
                {
                    ModelosYEspecificaciones.map((modelo) => {
                        return (
                            <Link key={modelo.model_id} href={`/chat/${modelo.model_id}`}
                                className="
                            bg-stone-600 
                            border-sky-500
                            p-4
                            w-3/4
                            xl:w-full
                            xl:self-auto
                            rounded-lg 
                            border-2
                            flex
                            flex-col
                            md:flex-row
                            items-center
                            transition
                            ease-in-out
                            hover:bg-stone-700
                            focus:bg-stone-700
                            hover:scale-105
                            focus:scale-105
                        ">
                                <div className="flex justify-center w-1/4">
                                    <Image
                                        src={`/${modelo.logo}`}
                                        width={200} height={200}
                                        alt={modelo.owner}
                                        quality={90}
                                        className="h-[60px] w-[60px] sm:h-[85px] sm:w-[85px] aspect-square"
                                    />
                                </div>
                                <div className="flex flex-col w-3/4">
                                    <h3 className="text-3xl">{modelo.model_name}</h3>
                                    <h6 className="mb-2 text-slate-300"> Modelo creado por <span className="text-sky-400">{modelo.owner}</span> </h6>
                                    <span className="text-lg text-stone-300"> Requisitos </span>
                                    <div>
                                        <span> RAM: {Number(modelo.vram_required_MB / 1024).toFixed(2)}<span className="text-red-400">GB</span>
                                        </span>
                                        {
                                            VerficarRAM(modelo.vram_required_MB / 1024)
                                        }
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </section>
        </section>
    )
}