import Mensajes from "@/components/chat/mensajes"
import CajaDeTexto from "./caja"

export default function Chats(props) {
    return (
        <>
            <section className="flex flex-col items-center justify-center gap-y-8 w-full">

                <section>
                    <span className="text-5xl font-bold">Chat con {props.chatCon}</span>
                </section>

                <section className="flex flex-col items-center gap-y-3 w-full overflow-y-auto">

                    <Mensajes remitente="Tú" contenido={`Aquí va la consulta`} />
                    <Mensajes remitente={props.chatCon} contenido={`Aquí va la respuesta`} />
                    <Mensajes remitente={props.chatCon} contenido={`Una respuesta`} />
                    <Mensajes remitente="Tú" contenido={`Una pregunta`} />
                    <Mensajes remitente="Tú" contenido={`NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA NIGGA `} />

                </section>

            </section>

            <CajaDeTexto />
        </>
    )
}