import Header from "@/components/header";
import InfoPagina from "@/components/info";
import Footer from "@/components/footer";

export const metadata = {
  title: "Your Own Chat",
  description: "Chat en vivo con un modelo de IA de manera local",
};

export default function Home() {
  return (
    <>
      <Header/>
      <InfoPagina/>
      <Footer/>
    </>
  );
}
