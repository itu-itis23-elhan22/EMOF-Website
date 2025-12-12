import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ProductsPreview from "./components/ProductsPreview";
import PageTransition from "./components/PageTransition";

export default function Home() {
  return (
    <PageTransition>

    <main>
      <Hero />
      <ProductsPreview />
      <AboutSection />

    </main>
        </PageTransition>
    
  );
}
