import Image from "next/image";
import { Sparkles, Crown, Clock } from "lucide-react";

const secrets = [
  {
    icon: Clock,
    title: "Concentracao 3x Superior",
    description:
      "Enquanto perfumes ocidentais tem 10-15% de oleo, os arabes chegam a 40%. Resultado: fixacao de ate 24 horas.",
  },
  {
    icon: Sparkles,
    title: "Materias-Primas Raras",
    description:
      "Oud, ambar, almiscar e incenso. Ingredientes usados pela realeza do Oriente Medio ha seculos.",
  },
  {
    icon: Crown,
    title: "Exclusividade Absoluta",
    description:
      "Menos de 3% da populacao brasileira conhece essas fragrancias. Voce nao cruzara com ninguem usando o mesmo perfume.",
  },
];

export function BigIdea() {
  return (
    <section className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary uppercase tracking-widest text-sm mb-4">
            O Segredo dos Sheiks e Princesas
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground leading-tight max-w-3xl mx-auto">
            Descubra a Arte da Perfumaria que Conquistou a{" "}
            <span className="text-primary">Realeza Arabe</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-square max-w-md mx-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cBCj2MIRUew201WdUMrJA%20%283%29-vrOuPwZmdvXuGu4M7jkhg1WBaFZC76.png"
                alt="Colecao de Perfumes Arabes Premium"
                fill
                className="object-contain"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-background px-4 py-2 rounded-lg font-bold">
                Importados de Dubai
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            {secrets.map((secret, index) => (
              <div
                key={index}
                className="flex gap-4 bg-card p-5 rounded-xl border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <secret.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {secret.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {secret.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
