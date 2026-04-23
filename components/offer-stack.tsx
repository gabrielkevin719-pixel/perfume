"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Crown, Sparkles, Gift, Truck, Shield } from "lucide-react";

const offers = [
  {
    id: "premium",
    badge: "Melhor Custo-Beneficio",
    title: "Colecao Completa",
    subtitle: "4 Perfumes Premium",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cBCj2MIRUew201WdUMrJA%20%283%29-vrOuPwZmdvXuGu4M7jkhg1WBaFZC76.png",
    originalPrice: 899.9,
    price: 179.9,
    pricePerUnit: "R$ 44,97 por perfume",
    installments: "ou 12x de R$ 17,91",
    discount: 80,
    savings: "Economia de R$ 720,00",
    benefits: [
      "4 fragrancias exclusivas de 100ml cada",
      "Fixacao de ate 24 horas garantida",
      "Frete gratis para todo Brasil",
      "Garantia incondicional de 30 dias",
      "Embalagem premium para presente",
    ],
    highlight: true,
    popular: true,
  },
  {
    id: "standard",
    badge: "Mais Vendido",
    title: "Trio Essencial",
    subtitle: "3 Perfumes Premium",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cBCj2MIRUew201WdUMrJA%20%283%29-vrOuPwZmdvXuGu4M7jkhg1WBaFZC76.png",
    originalPrice: 599.9,
    price: 149.9,
    pricePerUnit: "R$ 49,97 por perfume",
    installments: "ou 12x de R$ 14,92",
    discount: 75,
    savings: "Economia de R$ 450,00",
    benefits: [
      "3 fragrancias exclusivas de 100ml cada",
      "Fixacao de ate 24 horas garantida",
      "Frete gratis para todo Brasil",
      "Garantia incondicional de 30 dias",
    ],
    highlight: false,
    popular: false,
  },
  {
    id: "starter",
    badge: "Para Comecar",
    title: "Dupla Impactante",
    subtitle: "2 Perfumes Premium",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cBCj2MIRUew201WdUMrJA%20%283%29-vrOuPwZmdvXuGu4M7jkhg1WBaFZC76.png",
    originalPrice: 399.9,
    price: 119.9,
    pricePerUnit: "R$ 59,95 por perfume",
    installments: "ou 12x de R$ 11,92",
    discount: 70,
    savings: "Economia de R$ 280,00",
    benefits: [
      "2 fragrancias exclusivas de 100ml cada",
      "Fixacao de ate 24 horas garantida",
      "Frete gratis para todo Brasil",
    ],
    highlight: false,
    popular: false,
  },
];

const valueStack = [
  { icon: Gift, text: "Embalagem Premium de Presente", value: "R$ 49,90" },
  { icon: Truck, text: "Frete Expresso Gratis", value: "R$ 39,90" },
  { icon: Shield, text: "Garantia Total de 30 Dias", value: "Sem Risco" },
];

export function OfferStack() {
  return (
    <section id="oferta" className="bg-gradient-to-b from-card to-background py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
            <Crown className="w-4 h-4" />
            Oferta Exclusiva por Tempo Limitado
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Escolha Sua <span className="text-primary">Colecao Premium</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Todos os kits incluem perfumes de 100ml com fixacao superior. 
            Quanto mais voce leva, maior o desconto.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className={`relative bg-card rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] ${
                offer.highlight
                  ? "border-2 border-primary shadow-lg shadow-primary/20 lg:scale-105"
                  : "border border-border"
              }`}
            >
              {offer.popular && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-background text-center py-2 text-sm font-bold">
                  <Sparkles className="w-4 h-4 inline mr-2" />
                  MAIS ESCOLHIDO
                </div>
              )}

              <div className={`p-6 ${offer.popular ? "pt-12" : ""}`}>
                <div className="text-center mb-6">
                  <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    {offer.badge}
                  </span>
                  <h3 className="text-xl font-bold text-foreground">{offer.title}</h3>
                  <p className="text-foreground/60 text-sm">{offer.subtitle}</p>
                </div>

                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-muted line-through text-sm">
                      R$ {offer.originalPrice.toFixed(2).replace(".", ",")}
                    </span>
                    <span className="bg-green-900/50 text-green-400 px-2 py-0.5 rounded text-xs font-bold">
                      -{offer.discount}%
                    </span>
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-primary">
                    R$ {offer.price.toFixed(2).replace(".", ",")}
                  </p>
                  <p className="text-foreground/60 text-sm">{offer.installments}</p>
                  <p className="text-green-400 text-sm font-semibold mt-1">
                    {offer.savings}
                  </p>
                </div>

                <ul className="space-y-3 mb-6">
                  {offer.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#"
                  className={`block w-full py-4 px-6 rounded-xl font-bold text-center transition-all hover:scale-105 ${
                    offer.highlight
                      ? "bg-gradient-to-r from-primary to-primary-dark text-background"
                      : "bg-foreground/10 text-foreground hover:bg-primary hover:text-background"
                  }`}
                >
                  QUERO ESTE KIT
                </Link>

                <p className="text-center text-foreground/50 text-xs mt-3">
                  {offer.pricePerUnit}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Value Stack */}
        <div className="bg-card border border-border rounded-2xl p-6 max-w-3xl mx-auto">
          <h3 className="text-center text-lg font-bold text-foreground mb-6">
            Todos os Kits Incluem:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {valueStack.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-background/50 p-4 rounded-xl"
              >
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground text-sm font-medium">{item.text}</p>
                  <p className="text-primary text-xs font-bold">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
