"use client";

import { useState, useEffect } from "react";
import { Star, Shield, Truck, Clock } from "lucide-react";

export function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 47,
    seconds: 33,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToProducts = () => {
    document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-sm font-medium">
                Oferta por Tempo Limitado
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-balance">
              Perfumes Árabes de{" "}
              <span className="text-gold-gradient">Luxo</span> com Preços
              Exclusivos
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Descubra fragrâncias sofisticadas da Lattafa, reconhecida
              mundialmente pela qualidade e durabilidade incomparáveis.
            </p>

            {/* Timer */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">Oferta expira em:</span>
              <div className="flex gap-2">
                {[
                  { value: timeLeft.hours, label: "h" },
                  { value: timeLeft.minutes, label: "m" },
                  { value: timeLeft.seconds, label: "s" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1 bg-card px-3 py-1 rounded-lg"
                  >
                    <span className="text-xl font-bold text-primary tabular-nums">
                      {String(item.value).padStart(2, "0")}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToProducts}
                className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg 
                         hover:bg-primary/90 transition-all duration-300 animate-pulse-glow
                         text-lg shadow-lg shadow-primary/30"
              >
                Ver Ofertas Exclusivas
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
              {[
                { icon: Shield, text: "Produto Original" },
                { icon: Truck, text: "Entrega Rápida" },
                { icon: Star, text: "5.0 Avaliações" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Image */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-75" />

              {/* Product */}
              <div className="relative animate-float">
                <img
                  src="https://m.media-amazon.com/images/I/61qFL0cR3NL._AC_SL1500_.jpg"
                  alt="Lattafa Perfume"
                  className="w-80 h-auto drop-shadow-2xl"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                -70% OFF
              </div>

              <div className="absolute -bottom-4 -left-4 bg-card border border-border px-4 py-3 rounded-xl shadow-lg">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  +2.500 clientes satisfeitos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
}
