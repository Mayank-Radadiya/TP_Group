import Hero from "@/components/home/Hero";
import ClientStrip from "@/components/home/ClientStrip";
import Intro from "@/components/home/Intro";
import ProductsIndex from "@/components/home/ProductsIndex";
import ProcessSection from "@/components/home/ProcessSection";
import AwardBand from "@/components/home/AwardBand";
import VideoBand from "@/components/home/VideoBand";
import NetworkBand from "@/components/home/NetworkBand";

const HomePage = () => {
  return (
    <main className="overflow-x-clip">
      <Hero />
      <ClientStrip />
      <Intro />
      <ProductsIndex />
      <ProcessSection />
      <AwardBand />
      <VideoBand />
      <NetworkBand />
    </main>
  );
};

export default HomePage;
