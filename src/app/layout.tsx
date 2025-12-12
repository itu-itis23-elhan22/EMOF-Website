import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { LanguageProvider } from "./i18n/LanguageContext";
import type { ReactNode } from "react";

export const metadata = {
  title: "EMOF Teknoloji",
  description: "CNC & Havacılık Üretim Teknolojileri",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="bg-slate-950 text-white">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>

      </body>
    </html>
  );
}
