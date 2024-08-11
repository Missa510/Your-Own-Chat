import { ModelosYEspecificaciones } from "@/data/modelos"
import Chats from "@/components/chat/chat"
import { redirect } from "next/navigation"

export default function Chat({ params }) {

    const modelo = ModelosYEspecificaciones.find(modelo => modelo.model_id === params.slug)

    if (!modelo) redirect('/404')

    return (
        <>
            <Chats chatCon={modelo.model_name} />
        </>
    )

}