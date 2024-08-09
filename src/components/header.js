import Image from "next/image"

export default function Header() {

    return (
        <header id="key_header" className="grid place-items-center h-[100dvh] font-[system-ui]">
            <section className="flex flex-col-reverse sm:flex-col xl:flex-row items-center justify-center gap-y-1 lg:gap-x-2">
                <div className="relative self-start lg:self-center">
                    <Image
                        src={`/chat-header.webp`}
                        alt="Loguito"
                        width={200}
                        height={200}
                        quality={85}
                        className="aspect-square w-[95px] h-[95px] lg:w-[200px] lg:h-[200px]"
                    />
                    <span className="animate-pulse text-xs p-[5px] lg:text-xl absolute bg-red-500 top-0 right-0 lg:p-2 rounded-full"> +99 </span>
                </div>
                <div className="relative bg-slate-600 items-start justify-center flex-grow overflow-hidden px-6 py-5 flex flex-col gap-y-1 lg:gap-y-2 rounded-xl">
                    <h1 className="p-3 text-4xl lg:text-[56px] font-bold uppercase"> Your Own Chat </h1>
                    <span className="mt-2 text-2xl italic font-semibold"> <span className="text-red-300"> ~ </span> Tus asistentes locales </span>
                    <code className="text-slate-300"> By Missa510 </code>
                </div>
            </section>
        </header>
    )
}