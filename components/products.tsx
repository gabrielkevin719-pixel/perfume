"use client";

import { Star, ShoppingBag, Check } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Yara",
    subtitle: "Eau de Parfum",
    image: "https://m.media-amazon.com/images/I/61qFL0cR3NL._AC_SL1500_.jpg",
    originalPrice: 599.9,
    price: 179.9,
    discount: 70,
    rating: 5,
    reviews: 847,
    bestseller: true,
    notes: "Frutal, Gourmand, Baunilha",
    checkoutUrl: "https://seguro.megacy.com.br/r/YKGNBO5ISN",
  },
  {
    id: 2,
    name: "Yara Moi",
    subtitle: "Eau de Parfum",
    image: "https://m.media-amazon.com/images/I/51X6cYPnHrL._AC_SL1200_.jpg",
    originalPrice: 549.9,
    price: 169.9,
    discount: 69,
    rating: 5,
    reviews: 623,
    bestseller: false,
    notes: "Floral, Doce, Almíscar",
    checkoutUrl: "https://seguro.megacy.com.br/r/YKGNBO5ISN",
  },
  {
    id: 3,
    name: "Khamrah",
    subtitle: "Eau de Parfum",
    image: "https://m.media-amazon.com/images/I/61G3GKnhURL._AC_SL1500_.jpg",
    originalPrice: 649.9,
    price: 189.9,
    discount: 71,
    rating: 5,
    reviews: 512,
    bestseller: true,
    notes: "Âmbar, Especiarias, Oud",
    checkoutUrl: "https://seguro.megacy.com.br/r/YKGNBO5ISN",
  },
  {
    id: 4,
    name: "Asad",
    subtitle: "Eau de Parfum",
    image: "https://m.media-amazon.com/images/I/61rSzxP0URL._AC_SL1500_.jpg",
    originalPrice: 599.9,
    price: 179.9,
    discount: 70,
    rating: 5,
    reviews: 734,
    bestseller: false,
    notes: "Amadeirado, Tabaco, Baunilha",
    checkoutUrl: "https://seguro.megacy.com.br/r/YKGNBO5ISN",
  },
];

export function Products() {
  return (
    <section id="produtos" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Coleção Exclusiva
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-balance">
            Fragrâncias Mais <span className="text-gold-gradient">Vendidas</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Selecionamos os perfumes mais desejados da Lattafa com descontos
            imperdíveis por tempo limitado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl border border-border overflow-hidden
                       hover:border-primary/50 transition-all duration-300
                       hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Image */}
              <div className="relative p-6 bg-gradient-to-b from-secondary to-card">
                {product.bestseller && (
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                    Mais Vendido
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded-lg text-xs font-bold">
                  -{product.discount}%
                </div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    {product.subtitle}
                  </p>
                </div>

                {/* Notes */}
                <p className="text-xs text-muted-foreground">
                  Notas: {product.notes}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground line-through">
                    R$ {product.originalPrice.toFixed(2).replace(".", ",")}
                  </p>
                  <p className="text-2xl font-bold text-primary">
                    R$ {product.price.toFixed(2).replace(".", ",")}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    ou 12x de R${" "}
                    {(product.price / 12).toFixed(2).replace(".", ",")}
                  </p>
                </div>

                {/* CTA */}
                <a
                  href={product.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-primary-foreground 
                           font-semibold rounded-xl hover:bg-primary/90 transition-colors"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Comprar Agora
                </a>

                {/* Stock warning */}
                <p className="text-center text-xs text-red-400">
                  Últimas unidades disponíveis
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="mt-12 p-6 bg-card rounded-2xl border border-border">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              "Produto 100% Original",
              "Entrega em Todo Brasil",
              "Garantia de 30 Dias",
              "Pagamento Seguro",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
