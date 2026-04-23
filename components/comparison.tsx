import Image from "next/image";
import { CTAButton } from "./cta-button";

export function Comparison() {
  return (
    <section className="bg-gradient-to-b from-card to-background py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <p className="text-foreground/80 text-lg mb-2">
          NOS vs <span className="line-through">OUTROS</span>
        </p>
        <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
          O QUE NOS TORNA UNICOS?
        </h2>
        <p className="text-foreground/80 text-base md:text-lg mb-8 max-w-2xl mx-auto">
          Chegou a hora de mudar seu jogo com nossa Fragrancias Arabes
          Importadas
        </p>

        <div className="max-w-lg mx-auto mb-8">
          <Image
            src="https://cdn.rockty.com.br/cdn-cgi/image/quality=80,width=486,format=webp/tenants/UENhtV2BkVNeOEFrXxQ/images/cBCj2MIRUew201WdUMrJA.png"
            alt="Comparativo de perfumes - Nós vs Outros"
            width={486}
            height={486}
            className="w-full h-auto rounded-lg"
          />
        </div>

        <CTAButton />

        <p className="text-foreground/60 text-sm mt-6">
          Garantia de reembolso de 30 dias
        </p>
      </div>
    </section>
  );
}
