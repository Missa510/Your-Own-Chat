import { Nunito } from "next/font/google";
import "../../globals.css";

const inter = Nunito({
  subsets: ["latin"],
  display: 'swap'
});

export const metadata = {
  title: "Chat con modelos IA (pronto con el nombre)",
  description: "Chatea",
  icons: {
    icon: "../favicon.ico",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">

      <body className={inter.className}>
        <main className="relative min-h-dvh bg-backgraun bg-no-repeat bg-cover bg-center mx-auto my-0 p-4 text-white overflow-y-auto scroll-smooth">
          {children}
        </main>
      </body>
    </html>
  );
}
