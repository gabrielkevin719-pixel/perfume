import { Hero } from "@/components/hero";
import { Benefits } from "@/components/benefits";
import { Products } from "@/components/products";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <Products />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
