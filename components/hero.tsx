"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Shield, Truck, Star } from "lucide-react";
import { CTAButton } from "./cta-button";

const heroImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cBCj2MIRUew201WdUMrJA%20%283%29-vrOuPwZmdvXuGu4M7jkhg1WBaFZC76.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5rDgRPCHrUSjspDXXtRsyQ%20%281%29-hsIi5p0SuSRatdxdhsbzwMjJbYWVn4.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9q6U9yempE6TOxm9uhqabQ%20%281%29-8BEKlEWtOM03Wm8DMfsonPET4lSEsH.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5Y6vMA6G0GoQd0A6owq2w%20%281%29-0AkN2aWABQLksVkwTm24oSoeXpceFp.png",
];

const trustBadges = [
  { icon: Shield, text: "Garantia 30 Dias" },
  { icon: Truck, text: "Frete Gratis" },
  { icon: Star, text: "+86 Mil Clientes" },
];

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  return (
    <section className="bg-gradient-to-b from-background via-card to-background py-10 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-6">
              Importados Diretamente de Dubai
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Torne-se{" "}
              <span className="text-primary">Inesquecivel</span> com
              Fragrancias que a Realeza Arabe Usa
            </h1>

            <p className="text-foreground/80 text-lg md:text-xl mb-6 leading-relaxed">
              Perfumes com fixacao de ate{" "}
              <strong className="text-foreground">24 horas</strong> que deixam
              rastros marcantes por onde voce passa. O tipo de fragrancia que
              faz as pessoas perguntarem:{" "}
              <em className="text-primary">&quot;Que perfume e esse?&quot;</em>
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-card/50 border border-border px-4 py-2 rounded-full"
                >
                  <badge.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground/80">{badge.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <CTAButton />
              <p className="text-foreground/60 text-sm">
                Oferta valida por tempo limitado
              </p>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="w-full lg:w-1/2 relative order-1 lg:order-2">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />

              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src={heroImages[currentImage]}
                  alt="Perfume Arabe Importado Premium"
                  fill
                  className="object-contain transition-opacity duration-500"
                  priority
                />

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/90 p-2 rounded-full hover:bg-primary hover:text-background transition-colors"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/90 p-2 rounded-full hover:bg-primary hover:text-background transition-colors"
                  aria-label="Proxima imagem"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImage
                          ? "bg-primary w-6"
                          : "bg-foreground/30 hover:bg-foreground/50"
                      }`}
                      aria-label={`Ir para imagem ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
