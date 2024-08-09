import Link from "next/link"

export default function Footer() {
    return(
        <footer className="mt-4 grid place-items-center container mx-auto bg-slate-500 py-2 rounded-md">
            <span className="text-xl inile-block"> Sitio creado por <Link className="
            hover:underline
            focus:underline
            hover:uniderline-offset-4
            focus:uniderline-offset-4
            hover:decoration-red-500
            focus:decoration-red-500
            " href={`https://github.com/Missa510`} target="_blank" rel="noopener noreferrer nofollow"> Missa510 </Link> | Gracias a Midudev ❤️ </span>
        </footer>
    )
}