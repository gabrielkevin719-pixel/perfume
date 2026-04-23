import { Header } from "@/components/header";
import { PromoBanner } from "@/components/promo-banner";
import { Hero } from "@/components/hero";
import { Comparison } from "@/components/comparison";
import { Benefits } from "@/components/benefits";
import { Testimonials } from "@/components/testimonials";
import { Offers } from "@/components/offers";
import { Guarantees } from "@/components/guarantees";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <PromoBanner />
      <Hero />
      <Comparison />
      <Benefits />
      <Testimonials />
      <Offers />
      <Guarantees />
      <FAQ />
      <Footer />
    </main>
  );
}
