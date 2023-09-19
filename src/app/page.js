import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Newlettet from "./components/Newlettet";
import Card from "./components/Card";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="max-w-[1240px]  mx-auto">
      <Hero />
      <Analytics />
      <Newlettet />
      <Card />
      <Footer />
    </div>
  );
}
