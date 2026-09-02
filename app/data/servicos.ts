export type Servico = {
  nome: string;
  preco: number; // em Meticais (MZN)
};

export type CategoriaServicos = {
  categoria: string;
  servicos: Servico[];
};

// Tabela real do salão ("Tabela de Depilação — Delivery Depilação").
export const categorias: CategoriaServicos[] = [
  {
    categoria: "Depilação Facial",
    servicos: [
      { nome: "Sobrancelhas", preco: 200 },
      { nome: "Buço / Bigode", preco: 150 },
      { nome: "Queixo", preco: 250 },
    ],
  },
  {
    categoria: "Depilação de Virilha",
    servicos: [
      { nome: "Virilha completa", preco: 750 },
      { nome: "Laterais da virilha", preco: 500 },
    ],
  },
  {
    categoria: "Depilação Corporal",
    servicos: [
      { nome: "Perna completa", preco: 1250 },
      { nome: "Meia perna", preco: 500 },
      { nome: "Dedos", preco: 200 },
      { nome: "Mamilos", preco: 200 },
      { nome: "Barriga", preco: 200 },
      { nome: "Axilas", preco: 250 },
      { nome: "Braços", preco: 1000 },
    ],
  },
  {
    categoria: "Sobrancelhas e Pestanas",
    servicos: [{ nome: "Aplicação de pestanas", preco: 500 }],
  },
];

export function formatarPreco(valor: number) {
  return new Intl.NumberFormat("pt-MZ").format(valor) + " MT";
}
