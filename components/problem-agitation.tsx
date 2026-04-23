import { X } from "lucide-react";

const problems = [
  "Voce aplica o perfume de manha e ele some antes do almoco?",
  "As pessoas nunca comentam sobre sua fragrancia?",
  "Voce ja gastou fortunas em perfumes que nao impressionam ninguem?",
  "Sente que seu perfume e igual ao de todo mundo?",
];

export function ProblemAgitation() {
  return (
    <section className="bg-card py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <p className="text-primary uppercase tracking-widest text-sm mb-4">
            A Verdade Que Ninguem Te Conta
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground leading-tight">
            Por Que 90% dos Perfumes Te Deixam na{" "}
            <span className="text-primary">Invisibilidade?</span>
          </h2>
        </div>

        <div className="space-y-4 mb-10">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-red-950/30 border border-red-900/50 p-4 rounded-lg"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-900/50 flex items-center justify-center">
                <X className="w-5 h-5 text-red-400" />
              </div>
              <p className="text-foreground/90">{problem}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary p-6 rounded-r-lg">
          <p className="text-foreground/90 text-lg leading-relaxed">
            A maioria dos perfumes no mercado tem{" "}
            <strong className="text-foreground">baixa concentracao de oleos</strong>, 
            fragrancias sinteticas baratas e nenhuma personalidade. O resultado? 
            Voce paga caro para ser <strong className="text-foreground">esquecido</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
