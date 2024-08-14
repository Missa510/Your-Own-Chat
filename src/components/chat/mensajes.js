export default function Mensajes(props) {
    return (
        <div className={
            props.remitente === "Tú" ? 
            `flex flex-col justify-center bg-gray-800 p-4 rounded-lg max-w-max self-end items-end text-end` :
            `flex flex-col justify-center bg-slate-600 p-4 rounded-lg max-w-max self-start items-start`
        }>
            <h3 className="text-stone-300 text-md">{props.remitente}</h3>
            <p className="text-[20px]">{props.contenido}</p>
        </div>
    )
}