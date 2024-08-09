"use client"
import Image from "next/image"
import { ModelosYEspecificaciones } from "../data/modelos"
import Link from "next/link"

function VerficarRAM(RAM) {
    if ('deviceMemory' in navigator) {
        const RAM_DISPOSITIVO = navigator.deviceMemory
        if (RAM_DISPOSITIVO <= RAM) return (<span className="text-stone-300 italic">~ No recomendado para tú dispositivo</span>)
        else return (<span className="text-green-300">~ Recomendado para tú dispositivo</span>)
    } else {
        return 0
    }
    console.log()
}

export default function ModelosCard() {
    return (
        <section className="grid place-items-center xl:place-items-stretch grid-cols-1 gap-y-3 2xl:gap-3 2xl:grid-cols-3">
            {
                ModelosYEspecificaciones.map((modelo) => {
                    return (
                        <Link key={modelo.model_id} href={`/${modelo.model_id}`}
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
                                    <span> RAM: { Number(modelo.vram_required_MB / 1024).toFixed(2) }<span className="text-red-400">GB</span> 
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
    )
}