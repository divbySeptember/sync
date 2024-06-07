import Cta from "./components/cta/cta";
import Hero from "./components/hero/hero";
import Pricing from "./components/pricing/pricing";
import Status from "./components/status/status";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Status />
      <Cta />
      <Pricing />
    </main>
  );
}
