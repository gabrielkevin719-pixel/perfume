export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-foreground/60 text-sm mb-4">
          © {new Date().getFullYear()} Importadora Megacy. Todos os direitos
          reservados.
        </p>
        <p className="text-foreground/40 text-xs max-w-2xl mx-auto">
          Este site nao e afiliado ao Facebook ou a qualquer entidade do
          Facebook. Depois que voce sair do Facebook, a responsabilidade nao e
          deles e sim do nosso site. Fazemos todos os esforcos para indicar
          claramente e mostrar todas as provas do produto e usamos resultados
          reais.
        </p>
      </div>
    </footer>
  );
}
