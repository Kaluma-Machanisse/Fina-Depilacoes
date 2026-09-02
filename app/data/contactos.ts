export type RedeSocial = {
  nome: string;
  // "url" é um placeholder — substitui pelo link real da conta assim que existir.
  url: string;
};

export const redesSociais: RedeSocial[] = [
  { nome: "Instagram", url: "https://instagram.com/finadepilacoes" },
  { nome: "Facebook", url: "https://www.facebook.com/Finadepilacoes/photos/" },
  { nome: "TikTok", url: "https://tiktok.com/@finadepilacoes" },
];

// Endereço real, confirmado pelo utilizador (localização exacta).
export const endereco =
  "Av. Eduardo Mondlane, prédio 481, esquina do KFC, Maputo, Moçambique";
export const linkMapa =
  "https://maps.google.com/?q=Av.+Eduardo+Mondlane+481+esquina+do+KFC,+Maputo";
// Mesma localização, versão para <iframe> (sem chave de API).
export const linkMapaEmbed =
  "https://www.google.com/maps?q=Av.+Eduardo+Mondlane+481+esquina+do+KFC,+Maputo&output=embed";

// Contactos directos confirmados pelo utilizador.
export const telefone = "+258 84 855 2104";
export const email = "alfrina.abdula@gmail.com";

export const horario = {
  semana: "Segunda a Sexta, 9h às 18h",
  sabado: "Sábado, 8h às 14h",
};
