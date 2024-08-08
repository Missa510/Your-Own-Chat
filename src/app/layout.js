import { Nunito } from "next/font/google";
import "./globals.css";

const inter = Nunito({
  subsets: ["latin"],
  display: 'swap'
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">

      <body className={inter.className}>
        <main className="bg-backgraun bg-no-repeat bg-cover bg-center mx-0 my-auto p-4 text-white">
          {children}
        </main>
      </body>
    </html>
  );
}
