import Image from "next/image";
import { CTAButton } from "./cta-button";

export function Guarantees() {
  return (
    <section className="bg-background py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            ESTOQUE MEGA LIMITADO!
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            A cada 2 anos, realizamos uma verdadeira{" "}
            <strong>QUEIMA DE ESTOQUE</strong>, com o objetivo de atualizar
            nosso estoque e garantir novas colecoes, assim conseguimos oferecer
            o <strong>menor preco do mercado Brasileiro.</strong>
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
          <Image
            src="https://cdn.rockty.com.br/cdn-cgi/image/quality=80,width=80,format=webp/tenants/UENhtV2BkVNeOEFrXxQ/images/8E_dPetBNk2g53xQF85q1Q.png"
            alt="Garantia de 30 dias"
            width={80}
            height={80}
            className="w-16 h-16"
          />
          <Image
            src="https://cdn.rockty.com.br/cdn-cgi/image/quality=80,width=217,format=webp/tenants/UENhtV2BkVNeOEFrXxQ/images/RK2nDlqvJ0-OTxVMDEGC8A.png"
            alt="Compra Segura"
            width={217}
            height={74}
            className="h-14 w-auto"
          />
          <Image
            src="https://cdn.rockty.com.br/cdn-cgi/image/quality=80,width=256,format=webp/tenants/UENhtV2BkVNeOEFrXxQ/images/e1bNtVQmk2M2XBtOo_iDg.png"
            alt="Site Seguro"
            width={256}
            height={47}
            className="h-10 w-auto"
          />
          <Image
            src="https://cdn.rockty.com.br/cdn-cgi/image/quality=80,width=72,format=webp/tenants/UENhtV2BkVNeOEFrXxQ/images/rI_wEW3Bzkeo2VnCB2qr8A.png"
            alt="Selo de Qualidade"
            width={72}
            height={72}
            className="w-14 h-14"
          />
        </div>

        <div className="text-center">
          <CTAButton />
        </div>
      </div>
    </section>
  );
}
