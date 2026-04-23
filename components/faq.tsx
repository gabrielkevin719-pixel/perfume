"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Qual a fixacao dos perfumes?",
    answer:
      "Nossos perfumes arabes possuem fixacao de ate 24 horas. Voce aplica pela manha e ainda sente o perfume a noite. A fragrancia gruda na pele e na roupa, garantindo presenca o dia inteiro.",
  },
  {
    question: "Como funciona a entrega?",
    answer:
      "Enviamos para todo o Brasil com frete gratis. O prazo de entrega varia de 5 a 15 dias uteis dependendo da sua regiao. Voce recebera o codigo de rastreamento assim que o pedido for despachado.",
  },
  {
    question: "Posso devolver se nao gostar?",
    answer:
      "Sim! Oferecemos garantia de 30 dias. Se voce nao ficar satisfeito(a) com o produto, pode solicitar a devolucao e reembolso integral dentro desse prazo.",
  },
  {
    question: "Os perfumes sao originais?",
    answer:
      "Sim, todos os nossos perfumes sao 100% originais e importados diretamente do Oriente Medio. Trabalhamos apenas com fragrancias autenticas e de alta qualidade.",
  },
  {
    question: "Qual a diferenca dos perfumes arabes?",
    answer:
      "Perfumes arabes possuem maior concentracao de oleos essenciais, resultando em fixacao superior e projecao mais marcante. Alem disso, as notas olfativas sao mais exclusivas e sofisticadas.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-card py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center mb-12">
          PERGUNTAS FREQUENTES
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-4 text-left bg-background hover:bg-background/80 transition-colors"
              >
                <span className="font-semibold text-foreground">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="p-4 bg-background/50 border-t border-border">
                  <p className="text-foreground/80 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
