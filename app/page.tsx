import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Products from "@/components/sections/Products";
import Heritage from "@/components/sections/Heritage";
import Booking from "@/components/sections/Booking";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Stats />
      <Products />
      <Heritage />
      <Booking />
      <FAQ />
      <Footer />
    </main>
  );
}
