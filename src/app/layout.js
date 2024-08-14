import { Nunito } from "next/font/google";
import "./globals.css";

const inter = Nunito({
  subsets: ["latin"],
  display: 'swap'
});

export const metadata = {
  generator: 'Next.js',
  applicationName: 'Your Own Chat',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript', 'IA', 'Chat', 'Chat IA', 'Chat local IA'],
  title: "Your Own Chat",
  description: "Chat en tiempo real con un modelo de IA de manera local",
  creator: 'Missa510UwU',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">

      <body className={inter.className}>
        <main className="min-h-dvh bg-backgraun bg-no-repeat bg-cover bg-center mx-auto my-0 p-4 text-white">
          {children}
        </main>

      </body>
    </html>
  );
}
