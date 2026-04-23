import Image from "next/image";
import { Check } from "lucide-react";
import { CTAButton } from "./cta-button";

const benefits = [
  {
    title: "Fixacao de ate 24h:",
    description:
      "gruda na pele e na roupa. Voce aplica de manha e ainda sente a noite.",
  },
  {
    title: "Projecao marcante:",
    description:
      'deixa rastro e "presenca" — as pessoas percebem quando voce chega.',
  },
  {
    title: "Cheiro de luxo:",
    description:
      "perfil mais sofisticado, com sensacao de perfume caro/importado.",
  },
  {
    title: "Exclusividade:",
    description:
      'fragrancias menos "comuns" (voce foge do cheiro igual a todo mundo).',
  },
  {
    title: "Assinatura olfativa:",
    description:
      'ajuda voce a ter um "cheiro que te identifica" e fica na memoria.',
  },
  {
    title: "Custo-beneficio:",
    description:
      "voce paga menos e leva um perfume que entrega performance de alto nivel — fixacao e projecao fortes, rendendo muito mais que muitos perfumes caros.",
  },
];

export function Benefits() {
  return (
    <section className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            A DECISAO IDEAL PARA TRANSFORMAR SUA VIDA COMO HOMEM
          </h2>
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-primary text-xl">
                ★
              </span>
            ))}
          </div>
          <p className="text-foreground/80 text-base md:text-lg">
            Veja porque mais de 86 mil clientes confiam na{" "}
            <strong>Importadora Megacy</strong>
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-card/50 p-4 rounded-lg"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-bold text-foreground">
                    {benefit.title}
                  </span>{" "}
                  <span className="text-foreground/80">
                    {benefit.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 mt-16">
          <div className="w-full md:w-1/2">
            <Image
              src="https://cdn.rockty.com.br/cdn-cgi/image/quality=80,width=600,format=webp/tenants/UENhtV2BkVNeOEFrXxQ/images/g5pggquVH0S6rYROXgX4w.jpeg"
              alt="Perfumes Árabes Importados"
              width={600}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              GANHE <span className="text-primary">50% DE DESCONTO</span>
              <br />
              POR TEMPO LIMITADO!
            </h3>
            <p className="text-foreground/80 mb-6">
              Esta oferta e valida por tempo limitado devido a alta demanda e o
              estoque continua esgotando.
            </p>
            <CTAButton />
            <p className="text-foreground/60 text-sm mt-4 font-bold">
              ESSA OFERTA TERMINA EM BREVE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
