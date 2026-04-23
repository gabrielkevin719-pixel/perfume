import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mariana Silva",
    location: "São Paulo, SP",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Simplesmente apaixonada pelo Yara! A fixação é incrível, recebo elogios o dia todo. Já é meu terceiro frasco!",
    product: "Yara EDP",
  },
  {
    name: "Rafael Costa",
    location: "Rio de Janeiro, RJ",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Khamrah é sensacional! Cheiro sofisticado e marcante. Minha esposa adora e sempre perguntam qual perfume estou usando.",
    product: "Khamrah EDP",
  },
  {
    name: "Ana Beatriz",
    location: "Belo Horizonte, MG",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Entrega super rápida e o perfume é original mesmo! Qualidade impressionante por um preço justo. Super recomendo!",
    product: "Yara Moi EDP",
  },
  {
    name: "Lucas Mendes",
    location: "Curitiba, PR",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Asad virou meu perfume favorito! Amadeirado na medida certa, perfeito para o trabalho e eventos. Duração excepcional.",
    product: "Asad EDP",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Depoimentos Reais
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-balance">
            O Que Nossos <span className="text-gold-gradient">Clientes</span>{" "}
            Dizem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mais de 2.500 clientes satisfeitos em todo o Brasil. Veja o que eles
            têm a dizer sobre nossos perfumes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl border border-border p-6 hover:border-primary/30 transition-colors"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />

              <p className="text-muted-foreground mb-6 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs text-primary">{testimonial.product}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "2.500+", label: "Clientes Satisfeitos" },
            { value: "4.9", label: "Avaliação Média" },
            { value: "99%", label: "Recomendam" },
            { value: "24h", label: "Envio Rápido" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
