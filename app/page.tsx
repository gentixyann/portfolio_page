import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Values from "@/components/Values";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Profile from "@/components/Profile";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Values />
        <Work />
        <Skills />
        <Profile />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
