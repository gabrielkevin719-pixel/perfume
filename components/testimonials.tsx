import Image from "next/image";

const testimonials = [
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/leZkqcQcDEaQPBQVCtEBUQ%20%281%29-11lVJtAPpDITRtseqf7wayu38cq9CU.jpeg",
    alt: "Cliente com perfumes Legacy",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WHA417-1-XktZaDu8QUL2ivl3y203FH326mx15O.jpg",
    alt: "Perfumes na mesa com cartao Megacy",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WH298B-1-gXeOOfj2Csy7JY4LuEaCENuUNoEIqT.jpg",
    alt: "Cliente segurando perfumes",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WH0A63-1-CuO3C0Z0j9bXEqlCWzJy4sfBSaVjAg.jpg",
    alt: "Colecao de perfumes com cartao",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WH8FF7-1-9dZy6lzbXHMSg6o1cBYBrjGfHV5hWw.jpg",
    alt: "Perfumes na prateleira",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/540525-1-cHATyqTsCQTYmhTmuulpgqmZDKXHEc.jpg",
    alt: "Fakhar Latafa na caixa",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/645510-1-Ub6LxzIpR3YIGV5fd3lJzfs6MykkKH.jpg",
    alt: "Yara Lattafa com caixa",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/407567-1-5WeWvlxPCRZt77r6Njfjfsbib4V12S.jpg",
    alt: "Royal Amber na mao",
  },
];

export function Testimonials() {
  return (
    <section className="bg-card py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center mb-12">
          O QUE NOSSOS CLIENTES DIZEM
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background border-2 border-foreground/10 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow hover:border-primary/50"
            >
              <div className="aspect-[3/4] relative">
                <Image
                  src={testimonial.image}
                  alt={testimonial.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
