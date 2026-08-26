export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
      <h1 className="font-serif text-4xl text-foreground mb-2">
        Fina Depilações
      </h1>
      <p className="font-serif italic text-muted mb-8">
        Sua pele, seu momento, sua elegância.
      </p>
      <button className="bg-primary text-white rounded-lg px-6 py-3 font-medium">
        Marcar horário
      </button>
    </main>
  );
}
