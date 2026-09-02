// Cabeçalho de secção com ritmo fixo: rótulo pequeno, título serif e
// (opcional) uma linha de introdução. Mantém todas as secções iguais.
type Props = {
  eyebrow: string;
  titulo: string;
  children?: React.ReactNode;
};

export default function SectionHeading({ eyebrow, titulo, children }: Props) {
  return (
    <div className="text-center mb-12">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="font-serif text-3xl text-foreground mb-2">{titulo}</h2>
      {children && (
        <p className="text-muted max-w-xl mx-auto">{children}</p>
      )}
    </div>
  );
}
