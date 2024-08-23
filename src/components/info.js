import Footer from "@_$comp/footer";
import dynamic from "next/dynamic";

const ModelosCard = dynamic(() => import('@/components/modelos'), { ssr: false })

const Agradecimientos = [
    {
        key: 1,
        name: "Midudev",
        mensaje: "Sin tus enseñanzas y consejos, esta página no hubiese visto la luz"
    }, {
        key: 2,
        name: "Vladimir",
        mensaje: "Tus consejos me ayudaron a crecer youtcomo desarrollador"
    },
]

export default function InfoPagina() {
    return (
        <article className="mt-4 xl:mt-auto container mx-auto px-6 grid gap-y-10 [&>section]:bg-slate-700 [&>section]:px-4 [&>section]:xl:px-28 [&>section]:py-8 [&>section]:rounded-xl [&>section]:grid [&>section]:gap-y-4 [&>section]:mx-3">

            <section className="[&>p]: text-slate-300 [&>p]:text-lg [&>p]:xl:text-xl">
                <h2 className="text-3xl text-white xl:text-5xl font-bold mb-2">Bienvenido a Your Own Chat</h2>
                <p>
                    Descubre el poder de la inteligencia artificial en la palma de tu mano, con la seguridad y privacidad que mereces. <code className="text-sky-400 uppercase">Sin conexiones a API's externas, sin preocuparte por la privacidad de tus datos</code>.
                </p>
                <p>
                    Tienes la posibilidad de <code className="text-sky-400 uppercase">chatear con varios modelos de IA optimizados </code> para tu dispositivo. Mientras más los usas, más aprenden de tí y tus necesiades.
                </p>
            </section>

            <section className="[&>ol>li]:text-slate-300 [&>ol>li]:text-lg [&>ol>li]:xl:text-xl">
                <h2 className="text-3xl text-white xl:text-5xl font-bold mb-2"> Ventajas </h2>
                <ol className="grid gap-y-2">
                    <li>
                        <code className="text-sky-400 uppercase">Privacidad Garantizada:</code> Toda la inteligencia de Your Own Chat está integrada en tu dispositivo. Nunca se envían datos a servidores externos, lo que garantiza que tus conversaciones sean completamente privadas y seguras.
                    </li>
                    <li>
                        <code className="text-sky-400 uppercase">Diferentes modelos:</code> Puedes cambiar el modelo de IA en esta página para tener la experiencia más óptima a la hora de chatear.
                    </li>
                    <li>
                        <code className="text-sky-400 uppercase">Fácil de usar:</code> Una interfaz intuitiva y amigable que te permite interactuar con la IA de manera natural y sin complicaciones.
                    </li>
                    <li>
                        <code className="text-sky-400 uppercase">¡¡¡GRATIS!!!</code> Chatear con las IA's es completamente grautito para todos lo modelos de IA que viene integrados (proximamente más modelos)
                    </li>
                </ol>
            </section>

            <ModelosCard />

            <section className="[&>ol>li>span]:text-sky-300 [&>ol>li>span]:text-lg [&>ol>li>span]:xl:text-xl">
                <h2 className="text-3xl text-white xl:text-5xl font-bold mb-2"> Agradecimientos </h2>
                <ol className="grid gap-y-2">
                    {
                        Agradecimientos.map((agradecimiento) => {
                            return (
                                <li key={agradecimiento.key}>
                                    <span>{agradecimiento.name} ❤️</span>
                                    <p>
                                        {agradecimiento.mensaje}
                                    </p>
                                </li>
                            )

                        })
                    }
                </ol>
            </section>

            <Footer />
        </article>
    )
}