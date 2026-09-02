// Número do salão em formato internacional, sem "+", espaços ou traços.
// Moçambique: 258, seguido do número local sem o 0 inicial.
export const WHATSAPP_NUMERO = "258848552104";

/**
 * Gera o link "wa.me" que abre directamente o chat do WhatsApp do salão,
 * já com uma mensagem pré-escrita. Se o "servico" for indicado, a mensagem
 * pede logo esse serviço; caso contrário, é uma mensagem genérica.
 */
export function gerarLinkWhatsApp(servico?: string) {
  const mensagem = servico
    ? `Olá, gostaria de solicitar uma marcação na Fina Depilações.\nServiço: ${servico}\nNome:\nData:\nHora:`
    : "Olá, gostaria de solicitar uma marcação na Fina Depilações.";

  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
}

/**
 * Gera o link "wa.me" para pedir informações/inscrição num curso.
 */
export function gerarLinkWhatsAppCurso(nomeCurso: string) {
  const mensagem = `Olá, tenho interesse em inscrever-me no curso: ${nomeCurso}.\nGostaria de saber mais informações.\nNome:`;
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
}
