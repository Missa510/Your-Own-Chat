import Link from "next/link"

export const metadata = {
    title: '404',
    description: 'Página no encontrada',
}

export default function CuatroCientosCuatro() {
    return (
        <div className="flex items-center justify-center mt-28 gap-y-4 flex-col">
            <h1 className="text-4xl font-bold">
                Error 404 la página no existe, bro :\
            </h1>
            <Link className="text-blue-600 font-bold bg-sky-200 py-2 px-6 rounded-lg hover:scale-125 transition-all duration-300 hover:bg-sky-300" href={'/'}> Click aquí para volver al inicio </Link>
        </div>
    )
}