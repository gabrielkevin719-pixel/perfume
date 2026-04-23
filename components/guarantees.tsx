import { Shield, RefreshCw, Clock, Headphones } from "lucide-react";
import { CTAButton } from "./cta-button";

const guarantees = [
  {
    icon: Shield,
    title: "Garantia Incondicional",
    description:
      "30 dias para testar. Se nao amar, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.",
  },
  {
    icon: RefreshCw,
    title: "Troca Facilitada",
    description:
      "Nao gostou da fragrancia? Trocamos por outra do seu gosto. Simples assim.",
  },
  {
    icon: Clock,
    title: "Entrega Garantida",
    description:
      "Rastreamento em tempo real. Se atrasar, voce recebe um bonus exclusivo.",
  },
  {
    icon: Headphones,
    title: "Suporte Premium",
    description:
      "Equipe especializada disponivel via WhatsApp para tirar todas suas duvidas.",
  },
];

export function Guarantees() {
  return (
    <section className="bg-gradient-to-b from-background to-card py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Sua Compra <span className="text-primary">100% Protegida</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Compramos diretamente dos fabricantes em Dubai e garantimos a 
            autenticidade de cada perfume. Se voce nao ficar satisfeito, 
            devolvemos seu dinheiro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <guarantee.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {guarantee.title}
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30 rounded-2xl p-8 max-w-4xl mx-auto text-center">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
            Por Que Confiamos Tanto Assim?
          </h3>
          <p className="text-foreground/80 mb-6 leading-relaxed">
            Ja atendemos mais de <strong className="text-primary">86.000 clientes</strong> em 
            todo o Brasil. Nossa taxa de satisfacao e de{" "}
            <strong className="text-primary">97.8%</strong>. Os numeros falam por si.
          </p>
          <CTAButton />
        </div>
      </div>
    </section>
  );
}
