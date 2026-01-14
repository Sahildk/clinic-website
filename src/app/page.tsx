import { Navbar } from "@/components/custom/Navbar";
import { Hero } from "@/components/custom/Hero";
import { Services } from "@/components/custom/Services";
import { About } from "@/components/custom/About";
import { Contact } from "@/components/custom/Contact";
import { Footer } from "@/components/custom/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
