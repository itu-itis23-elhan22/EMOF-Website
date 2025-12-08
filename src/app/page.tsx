import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ProductsPreview from "./components/ProductsPreview";
import Footer from "./components/Footer"
export default function Home() {
  return (
    <main>
      <Hero />
      <ProductsPreview />
      <AboutSection />
      <Footer />   

    </main>
  );
}
