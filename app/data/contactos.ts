export type RedeSocial = {
  nome: string;
  // "url" é um placeholder — substitui pelo link real da conta assim que existir.
  url: string;
};

export const redesSociais: RedeSocial[] = [
  { nome: "Instagram", url: "https://instagram.com/finadepilacoes" },
  { nome: "Facebook", url: "https://facebook.com/finadepilacoes" },
  { nome: "TikTok", url: "https://tiktok.com/@finadepilacoes" },
];

// Endereço real, retirado dos cartazes do salão.
export const endereco = "Av. Mau Tsé Tung, esquina com Rua Fernão Veloso, Maputo";
export const linkMapa =
  "https://maps.google.com/?q=Av.+Mau+Ts%C3%A9+Tung+esquina+Rua+Fern%C3%A3o+Veloso,+Maputo";

export const horario = {
  semana: "Segunda a Sexta, 9h às 18h",
  sabado: "Sábado, 8h às 14h",
};
