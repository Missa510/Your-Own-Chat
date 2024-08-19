export default function Mensajes({remitente, contenido}) {
    return (
        <div className={
            remitente === "Tú" ? 
            `flex flex-col justify-center bg-gray-800 p-4 rounded-lg max-w-max self-end items-end text-end` :
            `flex flex-col justify-center bg-slate-600 p-4 rounded-lg max-w-max self-start items-start`
        }>
            <h3 className="text-stone-300 text-md">{remitente}</h3>
            <p className="text-[20px]">{contenido}</p>
        </div>
    )
}