// "use client"
import Image from "next/image"
import { ModelosYEspecificaciones } from "../data/modelos"
import Link from "next/link"

export default function ModelosCard() {
    return (
        <section className="grid place-items-center xl:place-items-stretch grid-cols-1 gap-y-3 2xl:gap-3 2xl:grid-cols-3">
            {
                ModelosYEspecificaciones.map((modelo) => {
                    return (
                        <Link key={modelo.model_id} href={`#`}
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
                            items-center

                        ">
                            <div className="flex justify-center w-1/4">
                                <Image
                                    src={`/${modelo.logo}`}
                                    width={200} height={200}
                                    alt={modelo.owner}
                                    quality={90}
                                    className="h-[50px] w-[50px] sm:h-[85px] sm:w-[85px] aspect-square"
                                />
                            </div>
                            <div className="flex flex-col w-3/4 gap-y-2">
                                <h3 className="text-2xl">{modelo.model_name}</h3>
                                <h6 className="text-slate-400"> Modelo creado por {modelo.owner} </h6>
                                <span> Requisitos </span>
                                <div>
                                    <span> RAM: {modelo.vram_required_MB / 1024}GB </span>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </section>
    )
}