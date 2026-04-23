"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Os perfumes são originais?",
    answer:
      "Sim, 100% originais! Trabalhamos diretamente com importadores autorizados da Lattafa. Todos os produtos possuem selo de autenticidade e código de rastreio.",
  },
  {
    question: "Qual a duração dos perfumes Lattafa?",
    answer:
      "Os perfumes Lattafa são conhecidos pela excelente fixação, durando em média de 8 a 12 horas na pele. A projeção também é impressionante, você será notado(a) por onde passar.",
  },
  {
    question: "Como funciona a entrega?",
    answer:
      "Enviamos para todo o Brasil via Correios ou transportadora. O prazo médio é de 3 a 7 dias úteis. Você receberá o código de rastreio assim que o pedido for despachado.",
  },
  {
    question: "Posso trocar ou devolver?",
    answer:
      "Sim! Oferecemos garantia de 30 dias. Se não gostar do perfume ou tiver qualquer problema, basta entrar em contato que faremos a troca ou devolução do valor.",
  },
  {
    question: "Quais formas de pagamento?",
    answer:
      "Aceitamos cartão de crédito (em até 12x), PIX, boleto bancário e carteiras digitais. Todas as transações são 100% seguras e criptografadas.",
  },
  {
    question: "Os perfumes vêm lacrados?",
    answer:
      "Sim, todos os perfumes são enviados lacrados de fábrica, com embalagem original, selo de autenticidade e todas as informações do fabricante.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            Dúvidas Frequentes
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-balance">
            Perguntas <span className="text-gold-gradient">Frequentes</span>
          </h2>
          <p className="text-muted-foreground">
            Tire suas dúvidas sobre nossos produtos e serviços.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/50 transition-colors"
              >
                <span className="font-semibold pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
