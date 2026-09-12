import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Categories from "@/app/components/Categories";
import Awards from "@/app/components/Awards";
import EventDetails from "@/app/components/EventDetails";
import Partners from "@/app/components/Partners";
import RegisterCta from "@/app/components/RegisterCta";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Categories />
        <Awards />
        <EventDetails />
        <Partners />
        <RegisterCta />
      </main>
      <Footer />
    </>
  );
}
