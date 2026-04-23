import { ShoppingBag, Shield, Truck, CreditCard } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <span className="inline-block px-4 py-1 bg-red-600/20 text-red-400 rounded-full text-sm font-medium mb-6">
          Oferta por Tempo Limitado
        </span>

        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-balance">
          Não Perca Esta{" "}
          <span className="text-gold-gradient">Oportunidade Única</span>
        </h2>

        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Aproveite descontos de até 70% em perfumes importados originais.
          Estoque limitado, garanta o seu antes que acabe!
        </p>

        {/* CTA Button */}
        <a
          href="#produtos"
          className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground 
                   font-bold text-lg rounded-xl hover:bg-primary/90 transition-all duration-300
                   shadow-lg shadow-primary/30 animate-pulse-glow"
        >
          <ShoppingBag className="w-6 h-6" />
          Garantir Meu Desconto Agora
        </a>

        {/* Trust badges */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Shield, text: "Compra Segura" },
            { icon: Truck, text: "Frete Grátis*" },
            { icon: CreditCard, text: "12x Sem Juros" },
            { icon: Shield, text: "Garantia 30 Dias" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">{item.text}</span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          *Frete grátis para compras acima de R$ 299,00
        </p>
      </div>
    </section>
  );
}
