export default function Mensajes(props) {
    return (
        <div className={
            props.remitente === "Tú" ? 
            `flex flex-col justify-center bg-gray-600 p-4 rounded-lg w-max max-w-[75ch] self-end items-end` :
            `flex flex-col justify-center bg-slate-800 p-4 rounded-lg w-max max-w-[75ch] self-start items-start`
        }>
            <h3 className="text-stone-300 text-md">{props.remitente}</h3>
            <p className="text-lg">{props.contenido}</p>
        </div>
    )
}