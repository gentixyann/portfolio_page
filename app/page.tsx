import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Values from "@/components/Values";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
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
        <Experience />
        <Profile />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
