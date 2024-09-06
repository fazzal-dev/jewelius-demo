import { Monda, Hind } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const monda = Monda({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--monda-font",
});
const hind = Hind({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Jewelius",
  description: "Official website of Jewelius - Music, Merch, and More",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${hind.className} ${monda.variable}`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
