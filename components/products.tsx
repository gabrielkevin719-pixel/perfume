import Image from "next/image";
import { Star } from "lucide-react";

const products = [
  {
    name: "Lattafa Yara",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5Y6vMA6G0GoQd0A6owq2w%20%281%29-0AkN2aWABQLksVkwTm24oSoeXpceFp.png",
    description: (
      <>
        Por anos, o mundo ocidental se perguntava: quais perfumes os sheiks e{" "}
        <strong>princesas árabes</strong> usam? Agora, o segredo foi revelado! As fragrâncias
        árabes são um verdadeiro mistério de sofisticação, deixando{" "}
        <strong>rastros marcantes</strong> por onde passam.
      </>
    ),
  },
  {
    name: "Sabah Al Ward",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pssabah4-udrW2b6DGV32RIsZfkTGQPRirbCGCh.png",
    description: (
      <>
        A <strong>mulher árabe</strong>, com sua postura elegante, é sempre acompanhada de
        um perfume floral viciante, que conquista todos ao redor. Eau de Parfum com
        notas florais intensas que deixam uma <strong>impressão inesquecível</strong>.
      </>
    ),
  },
  {
    name: "Royal Amber",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9q6U9yempE6TOxm9uhqabQ%20%281%29-8BEKlEWtOM03Wm8DMfsonPET4lSEsH.png",
    description: (
      <>
        Uma verdadeira notícia de elegância e energia! Este perfume{" "}
        <strong>ultra feminino</strong> é perfeito para as mulheres mais interessantes da
        cidade. Com uma fragrância que exala um espírito jovem e festivo, ele transmite
        uma energia extraordinária e um toque de <strong>personalidade única</strong>.{" "}
        <strong>Elegante, impactante</strong> e <strong>inesquecível</strong>, é a escolha
        ideal para quem busca marcar presença e celebrar a vida com estilo.
      </>
    ),
  },
  {
    name: "Lattafa Fakhar",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5rDgRPCHrUSjspDXXtRsyQ%20%281%29-hsIi5p0SuSRatdxdhsbzwMjJbYWVn4.png",
    description: (
      <>
        É a perfumaria de <strong>luxo premium líder em Dubai</strong>, oferecendo
        fragrâncias <strong>árabes autênticas</strong>. Com sua excelência, traz o mundo
        da sofisticação olfativa para todos que desejam adquirir{" "}
        <strong>perfumes exclusivos dos Emirados Árabes Unidos</strong>.
      </>
    ),
  },
];

export function Products() {
  return (
    <section className="py-12 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              <div className="relative aspect-square bg-gradient-to-b from-amber-50 to-amber-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-black leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
