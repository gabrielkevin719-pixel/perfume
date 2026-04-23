import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const benefits = [
  "Fixacao de ate 24 horas",
  "Frete gratis para todo Brasil",
  "Garantia de 30 dias",
  "Perfumes 100% originais",
  "Atendimento via WhatsApp",
];

export function FinalCTA() {
  return (
    <section className="bg-gradient-to-b from-card to-background py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border border-primary/30 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Pronto para Ser{" "}
            <span className="text-primary">Inesquecivel?</span>
          </h2>

          <p className="text-foreground/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Milhares de brasileiros ja descobriram o poder das fragrancias arabes. 
            Chegou a sua vez de deixar rastros marcantes por onde passar.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-full"
              >
                <Check className="w-4 h-4 text-primary" />
                <span className="text-foreground/80 text-sm">{benefit}</span>
              </div>
            ))}
          </div>

          <Link
            href="#oferta"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary-dark text-background font-bold text-lg px-10 py-5 rounded-full hover:scale-105 transition-all shadow-lg shadow-primary/30"
          >
            QUERO MINHA COLECAO AGORA
            <ArrowRight className="w-5 h-5" />
          </Link>

          <p className="text-foreground/50 text-sm mt-4">
            Pagamento 100% seguro | Parcele em ate 12x
          </p>
        </div>
      </div>
    </section>
  );
}
