import { Sparkles, Clock, Heart, Award } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Fragrância Premium",
    description:
      "Ingredientes selecionados das melhores casas de perfumaria do Oriente Médio.",
  },
  {
    icon: Clock,
    title: "Longa Duração",
    description:
      "Até 12 horas de fixação intensa que acompanha você o dia todo.",
  },
  {
    icon: Heart,
    title: "Aroma Irresistível",
    description:
      "Notas envolventes que conquistam elogios por onde você passar.",
  },
  {
    icon: Award,
    title: "Qualidade Certificada",
    description:
      "Produtos 100% originais com certificação internacional de qualidade.",
  },
];

export function Benefits() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Por Que Escolher <span className="text-gold-gradient">Lattafa</span>
            ?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A marca que revolucionou o mercado de perfumaria com fragrâncias
            árabes de alta qualidade e preços acessíveis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-2xl border border-border 
                       hover:border-primary/50 transition-all duration-300
                       hover:shadow-lg hover:shadow-primary/10"
            >
              <div
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6
                          group-hover:bg-primary/20 transition-colors"
              >
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
