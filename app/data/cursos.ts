export type Curso = {
  nome: string;
  preco: number; // em Meticais (MZN)
  modalidade: string;
  destaques: string[];
  conteudo: string[];
};

// Dois cursos distintos oferecidos pelo salão.
export const cursos: Curso[] = [
  {
    nome: "Curso de Depilação 100% Prático",
    preco: 8000,
    modalidade: "Presencial ou Online",
    destaques: ["Manual incluído", "Certificado incluído"],
    conteudo: [
      "Técnicas de depilação de virilha (simples e completa)",
      "Técnicas de depilação de axilas",
      "Técnicas de depilação de pernas",
      "Técnicas de depilação facial",
      "Lista de materiais necessários",
      "Depilação ao domicílio",
    ],
  },
  {
    nome: "Curso de Depilação Profissional",
    preco: 6000,
    modalidade: "Presencial · 5 dias, 2h por aula",
    destaques: ["Aulas 100% práticas", "Material da escola incluído nas aulas"],
    conteudo: [
      "Aulas práticas com o nosso material",
      "Lista de material completo para iniciares o teu negócio",
    ],
  },
];
