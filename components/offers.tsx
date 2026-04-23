import Image from "next/image";
import Link from "next/link";

const offers = [
  {
    title: "COMPRE 1 E LEVE 4 PERFUMES ARABES - 100 ml (Cada)",
    discount: "49% de desconto",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cBCj2MIRUew201WdUMrJA%20%283%29-vrOuPwZmdvXuGu4M7jkhg1WBaFZC76.png",
    oldPrice: "R$ 899,90",
    newPrice: "R$ 179,90",
    installments: "ou 12x de R$ 17,91",
    highlight: false,
  },
  {
    title: "COMPRE 1 E LEVE 3 PERFUMES ARABES - 100 ml (Cada)",
    discount: "33% de desconto",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cBCj2MIRUew201WdUMrJA%20%283%29-vrOuPwZmdvXuGu4M7jkhg1WBaFZC76.png",
    oldPrice: "R$ 499,90",
    newPrice: "R$ 149,90",
    installments: "ou 12x de R$ 14,92",
    highlight: true,
  },
  {
    title: "COMPRE 1 E LEVE 2 PERFUMES ARABES - 100 ml (Cada)",
    discount: "25% de desconto",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cBCj2MIRUew201WdUMrJA%20%283%29-vrOuPwZmdvXuGu4M7jkhg1WBaFZC76.png",
    oldPrice: "R$ 299,90",
    newPrice: "R$ 119,90",
    installments: "ou 12x de R$ 11,92",
    highlight: false,
  },
];

export function Offers() {
  return (
    <section id="oferta" className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-3xl font-bold text-foreground text-center mb-4">
          SUCESSO DE VENDAS NO BRASIL! SUA CHANCE DE LUXO ACESSIVEL.
        </h2>
        <p className="text-foreground/80 text-center mb-12">
          APROVEITE, OFERTA RELAMPAGO!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`bg-card border-2 rounded-2xl p-6 flex flex-col items-center text-center transition-transform hover:scale-105 ${
                offer.highlight
                  ? "border-primary shadow-lg shadow-primary/20"
                  : "border-border"
              }`}
            >
              <div className="bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
                {offer.discount}
              </div>

              <h3 className="text-sm font-bold text-foreground mb-4 min-h-[60px]">
                {offer.title}
              </h3>

              <div className="relative w-40 h-40 mb-4">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-contain"
                />
              </div>

              <p className="text-muted line-through text-sm">{offer.oldPrice}</p>
              <p className="text-2xl md:text-3xl font-bold text-primary mb-1">
                {offer.newPrice}
              </p>
              <p className="text-foreground/60 text-xs mb-6">
                {offer.installments}
              </p>

              <Link
                href="#"
                className={`w-full py-3 px-6 rounded-full font-bold text-foreground transition-all hover:scale-105 ${
                  offer.highlight
                    ? "bg-gradient-to-r from-primary to-primary-dark"
                    : "bg-gradient-to-r from-accent to-accent-dark"
                }`}
              >
                QUERO COMPRAR AGORA
              </Link>

              <div className="flex items-center gap-2 mt-4 text-xs text-foreground/60">
                <span>Frete Gratis</span>
                <span>|</span>
                <span>Entrega Rapida</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
