import { Nunito } from "next/font/google";
import "./globals.css";

const inter = Nunito({
  subsets: ["latin"],
  display: 'swap'
});

export const metadata = {
  title: "Your Own Chat",
  description: "Chat en tiempo real con un modelo de IA de manera local",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">

      <body className={inter.className}>
        <main className="bg-backgraun bg-no-repeat bg-cover bg-center mx-auto my-0 p-4 text-white">
          {children}
        </main>
      </body>
    </html>
  );
}
