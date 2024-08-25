import Header from "@_$comp/header";
import InfoPagina from "@_$comp/info";

export default function Home() {
  return (
    <main className="min-h-dvh bg-backgraun bg-no-repeat bg-cover bg-center mx-auto my-0 p-4 text-white ">
      <Header />
      <InfoPagina />
    </main>
  );
}
