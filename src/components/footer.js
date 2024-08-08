import Link from "next/link"

export default function Footer() {
    return(
        <footer className="mt-4 grid placer-center container mx-auto bg-slate-500 py-2 rounded-md">
            <span className="text-xl"> Sitio creado por <Link href={`https://github.com/Missa510`} target="_blank" rel="noopener noreferrer nofollow"> Missa510 </Link> | Gracias a Midudev ❤️ </span>
        </footer>
    )
}