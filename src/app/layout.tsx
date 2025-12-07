import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "EMOF Teknoloji",
  description: "CNC & Havacılık Üretim Teknolojileri",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <Navbar />
        <div className="pt-20"> {/* Navbar yüksekliği kadar boşluk */}
          {children}
        </div>
      </body>
    </html>
  );
}
