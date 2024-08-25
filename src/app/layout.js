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
  icons: {
    icon: "./favicon.ico",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">

      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
