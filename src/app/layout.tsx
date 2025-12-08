// app/layout.tsx
import "./globals.css";
import Navbar from "./components/Navbar";
import { LanguageProvider } from "./i18n/LanguageContext";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
                <LanguageProvider>

        <Navbar />
        <div className="pt-20">
          {children}
        </div>
                </LanguageProvider>

      </body>
    </html>
  );
}
