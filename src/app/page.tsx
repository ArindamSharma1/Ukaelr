import Hero from "@/components/hero";
import Benefits from "@/components/benefits";
import HowItWorks from "@/components/how-it-works";
import Features from "@/components/features";
import Metrics from "@/components/metrics";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Benefits />
      <HowItWorks />
      <Features />
      <Metrics />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
