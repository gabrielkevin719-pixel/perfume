import { Shield, Lock, CreditCard } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4">
        {/* Payment Methods */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg">
            <CreditCard className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Visa</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg">
            <CreditCard className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Mastercard</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg">
            <CreditCard className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">PIX</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg">
            <CreditCard className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Boleto</span>
          </div>
        </div>

        {/* Security Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Site Seguro SSL
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Compra Protegida
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              Este site não é afiliado ao Facebook ou a qualquer entidade do
              Facebook. Depois que você sair do Facebook, a responsabilidade não
              é deles e sim do nosso site.
            </p>
            <p className="text-sm text-muted-foreground">
              Imagens meramente ilustrativas. Resultados podem variar.
            </p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
