export default function CajaDeTexto(){
    return(
        <footer className="flex items-center">
            <form className="fixed bottom-4 flex items-center">
                <input className="flex-grow" type="text" placeholder="Escribe tu mensaje"/>
                <button>
                    Enviar
                </button>
            </form>
        </footer>
    )
}