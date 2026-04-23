"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CTAButton } from "./cta-button";

const heroImages = [
  "https://cdn.rockty.com.br/cdn-cgi/image/quality=80,width=600,format=webp/tenants/UENhtV2BkVNeOEFrXxQ/images/wJCPikCq3U2BEFqFnzVctw.jpeg",
  "https://cdn.rockty.com.br/cdn-cgi/image/quality=80,width=600,format=webp/tenants/UENhtV2BkVNeOEFrXxQ/images/MhvXSvdSk-4DLmWM9szjQ.jpeg",
  "https://cdn.rockty.com.br/cdn-cgi/image/quality=80,width=600,format=webp/tenants/UENhtV2BkVNeOEFrXxQ/images/FvpYmj4oq0CQk2c2iM_6eA.jpeg",
];

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  return (
    <section className="bg-gradient-to-b from-background to-card py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Image Carousel */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative aspect-square max-w-md mx-auto overflow-hidden rounded-lg">
              <Image
                src={heroImages[currentImage]}
                alt="Perfume Árabe Importado"
                fill
                className="object-cover"
                priority
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full hover:bg-background transition-colors"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full hover:bg-background transition-colors"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImage
                        ? "bg-foreground"
                        : "bg-foreground/30 hover:bg-foreground/50"
                    }`}
                    aria-label={`Ir para imagem ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold text-foreground leading-tight mb-4">
              SEJA LEMBRADO(A) PELO SEU PERFUME!
            </h1>

            <div className="space-y-6 text-foreground/90 font-serif">
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-primary mb-2">
                  Fixacao de ate 24h:
                </h2>
                <p className="text-sm md:text-base leading-relaxed">
                  Perfume arabe gruda na pele, fica na roupa e te acompanha o
                  dia inteiro. Voce passa de manha e ainda sente a noite.
                </p>
              </div>

              <div>
                <h2 className="text-lg md:text-xl font-semibold text-primary mb-2">
                  Presenca que Chama Atencao:
                </h2>
                <p className="text-sm md:text-base leading-relaxed">
                  E o tipo de fragrancia que nao passa despercebida. Voce entra
                  no ambiente e as pessoas notam. E o melhor: vem o efeito que
                  todo mundo quer...{" "}
                  <strong>&quot;Que perfume e esse?&quot;</strong>
                </p>
              </div>

              <div>
                <h2 className="text-lg md:text-xl font-semibold text-primary mb-2">
                  Cheiro de luxo e Exclusividade:
                </h2>
                <p className="text-sm md:text-base leading-relaxed">
                  Perfumes arabes tem aquele <strong>&quot;ar caro&quot;</strong>, marcante,
                  elegante. Nao e o cheiro que todo mundo usa. E o cheiro de
                  quem quer ser <strong>lembrado(a).</strong>
                </p>
              </div>
            </div>

            <div className="mt-8">
              <CTAButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
