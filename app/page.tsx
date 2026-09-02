import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Servicos from "./components/Servicos";
import Cursos from "./components/Cursos";
import Contactos from "./components/Contactos";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Servicos />
      <Cursos />
      <Sobre />
      <Contactos />
    </main>
  );
}
