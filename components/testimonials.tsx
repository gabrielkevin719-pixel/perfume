import Image from "next/image";

const testimonials = [
  {
    image:
      "https://cdn.rockty.com.br/cdn-cgi/image/quality=80,width=350,format=webp/tenants/UENhtV2BkVNeOEFrXxQ/images/bWyqlXdWqEvMOED4hbTA.jpeg",
    alt: "Depoimento cliente 1",
  },
  {
    image:
      "https://cdn.rockty.com.br/cdn-cgi/image/quality=80,width=350,format=webp/tenants/UENhtV2BkVNeOEFrXxQ/images/eDkLSJCVGU6j79J3WzwdFw.jpeg",
    alt: "Depoimento cliente 2",
  },
  {
    image:
      "https://cdn.rockty.com.br/cdn-cgi/image/quality=80,width=350,format=webp/tenants/UENhtV2BkVNeOEFrXxQ/images/4T0U8UPFV06VGBPvhSTFeg.jpeg",
    alt: "Depoimento cliente 3",
  },
  {
    image:
      "https://cdn.rockty.com.br/cdn-cgi/image/quality=80,width=350,format=webp/tenants/UENhtV2BkVNeOEFrXxQ/images/CqAqrqJ0Kkyx3Cb2xihCw.jpeg",
    alt: "Depoimento cliente 4",
  },
];

export function Testimonials() {
  return (
    <section className="bg-card py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center mb-12">
          O QUE NOSSOS CLIENTES DIZEM
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background border-2 border-foreground/10 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
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
