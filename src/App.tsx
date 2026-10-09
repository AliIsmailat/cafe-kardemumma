import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Location } from "./components/Location";
import { Menu } from "./components/Menu";
import { OpeningHours } from "./components/OpeningHours";

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <Menu />
        <OpeningHours />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
