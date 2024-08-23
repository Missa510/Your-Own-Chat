import { ModelosYEspecificaciones } from "@_$data/modelos"
import Chats from "@_$comp/chat/chat"
import { redirect } from "next/navigation"
import ComponenteWorker from "@_$comp/workers/componenteWorker"

export async function generateMetadata({ params }) {

    const modelo = ModelosYEspecificaciones.find(modelo => modelo.model_id === params.slug)

    return {

        title: `Chat con ${modelo.model_name}`,
        description: `Chat con ${modelo.model_name} de manera local`,

    }
}

export default function Chat({ params }) {

    const modelo = ModelosYEspecificaciones.find(modelo => modelo.model_id === params.slug)

    if (!modelo) redirect('/404')

    return (
        <>
        <ComponenteWorker/>
        <Chats chatCon={modelo.model_name} />
        </>
    )

}
