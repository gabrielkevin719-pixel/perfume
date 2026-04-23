"use client";

import { useState, useEffect } from "react";
import { AlertTriangle, Package, Users } from "lucide-react";
import { CTAButton } from "./cta-button";

export function Urgency() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 47,
    seconds: 33,
  });

  const [stock, setStock] = useState(23);
  const [viewers, setViewers] = useState(47);

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
          hours = 2;
          minutes = 47;
          seconds = 33;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    const viewerInterval = setInterval(() => {
      setViewers((prev) => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newValue = prev + change;
        return Math.max(35, Math.min(65, newValue));
      });
    }, 5000);

    return () => {
      clearInterval(timer);
      clearInterval(viewerInterval);
    };
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <section className="bg-gradient-to-r from-red-950/50 to-background py-8 md:py-12 border-y border-red-900/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Timer */}
          <div className="text-center lg:text-left">
            <div className="flex items-center gap-2 justify-center lg:justify-start mb-2">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              <span className="text-red-400 font-semibold uppercase tracking-wide text-sm">
                Oferta Expira Em:
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-red-900/50 border border-red-800 rounded-lg px-4 py-2">
                <span className="text-2xl md:text-3xl font-bold text-foreground">
                  {formatNumber(timeLeft.hours)}
                </span>
                <span className="text-foreground/60 text-xs block">horas</span>
              </div>
              <span className="text-2xl text-foreground">:</span>
              <div className="bg-red-900/50 border border-red-800 rounded-lg px-4 py-2">
                <span className="text-2xl md:text-3xl font-bold text-foreground">
                  {formatNumber(timeLeft.minutes)}
                </span>
                <span className="text-foreground/60 text-xs block">min</span>
              </div>
              <span className="text-2xl text-foreground">:</span>
              <div className="bg-red-900/50 border border-red-800 rounded-lg px-4 py-2">
                <span className="text-2xl md:text-3xl font-bold text-foreground">
                  {formatNumber(timeLeft.seconds)}
                </span>
                <span className="text-foreground/60 text-xs block">seg</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2 bg-card/50 border border-border rounded-full px-4 py-2">
              <Package className="w-5 h-5 text-primary" />
              <span className="text-foreground/80 text-sm">
                Apenas <strong className="text-primary">{stock}</strong> kits em estoque
              </span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 border border-border rounded-full px-4 py-2">
              <Users className="w-5 h-5 text-green-400" />
              <span className="text-foreground/80 text-sm">
                <strong className="text-green-400">{viewers}</strong> pessoas vendo agora
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center lg:text-right">
            <CTAButton />
          </div>
        </div>
      </div>
    </section>
  );
}
