# Notas do projecto — Fina Depilações

Contexto para quem (humano ou Claude) continuar este projecto. Site de uma
página para um salão de estética/depilação em Maputo, feito como projecto
de aprendizagem (o dono do projecto está a aprender Next.js ao construir).

## Restrição importante

O utilizador tem **dados móveis limitados**. Evitar instalar bibliotecas
novas sem necessidade real — preferir soluções nativas (CSS, SVG à mão,
`next/image`, `next/font/google`) a pacotes npm extra.

## Dados reais do negócio

- WhatsApp / contacto: `258848552104` (confirmado pelo flyer; NÃO é o
  número antigo `258844491029`, que estava errado).
- Endereço real: Av. Eduardo Mondlane, prédio 481, esquina do KFC,
  Maputo (localização exacta confirmada pelo utilizador). Substitui o
  "Av. Mau Tsé Tung / Rua Fernão Veloso" tirado dos cartazes, que por
  sua vez tinha substituído o placeholder "Av. Julius Nyerere".
- E-mail: alfrina.abdula@gmail.com. Telemóvel/WhatsApp: +258 84 855 2104
  (= 258848552104, já era o número certo).
- Horário: Segunda a Sexta 9h–18h, Sábado 8h–14h (confirmado por cartaz).
- Preços em `app/data/servicos.ts` vêm da tabela real do salão. A
  categoria "Sobrancelhas e Pestanas" (Aplicação de pestanas, 500 MT) foi
  acrescentada depois de confirmar com o utilizador que é um serviço real.
- Há dois cursos reais e distintos em `app/data/cursos.ts`: um de 8.000 MT
  ("100% Prático") e outro de 6.000 MT ("Profissional") — não são a mesma
  coisa com preços conflituosos, o utilizador confirmou que quer os dois.

## Paleta de cores

Em `app/globals.css`. O rosa original extraído do logotipo (`#d81b7f`) foi
considerado "choque" demais pelo utilizador e trocado, em duas iterações,
por um tom rosewood/malva bem menos saturado:
- `--primary: #8a4a5c`
- `--primary-light: #e8dcdc`
- `--wine: #3d1a22`
- `--gold: #c9a869` (inalterado)

Se pedirem para ajustar a cor outra vez, ir na direcção de **menos
saturação**, não mais — o pedido foi sempre para ficar mais discreto/
premium, nunca mais vibrante.

## Fotos

- As fotos reais do salão (Instagram/Facebook) estão em `fotos/` (fora de
  `public/`, não vão para produção). Muitas são cartazes promocionais de
  texto, não fotografia real — só um punhado são fotos genuínas do espaço
  ou de tratamentos.
- Por pedido do utilizador, as fotos reais que tinham sido processadas
  (`servicos-resultado.webp`, `servicos-sobrancelhas.webp`,
  `servicos-pestanas.webp`) foram **retiradas do carrossel** e substituídas
  por 5 imagens de exemplo geradas (`exemplo-1.webp` a `exemplo-5.webp`,
  gradientes com a paleta da marca). Os ficheiros das fotos reais continuam
  em `public/images/` (não usados no código) caso queiram reaproveitar.
- O utilizador confirmou ter consentimento das clientes nas fotos onde
  aparecem rostos (sobrancelhas/pestanas), mas a decisão actual foi mesmo
  assim usar placeholders no carrossel — perguntar antes de trocar outra
  vez para fotos reais.
- Foto de exemplo em `Sobre.tsx` (`sobre-sala.webp`) é uma foto real da
  sala de tratamento, recortada para evitar a marca de água.

## Carrossel (`app/components/Carrossel.tsx`)

Scroll **contínuo** (não em saltos), feito com `requestAnimationFrame` a
incrementar `scrollLeft` de um container nativo, com a lista de fotos
duplicada para dar loop sem costura. Pára ao tocar/passar o rato, e
retoma ao soltar. Já passou por três abordagens diferentes (scroll nativo
com `scrollTo`, transform com `translateX` em saltos, scroll contínuo) —
esta é a que ficou. Não trocar para uma biblioteca de carrossel (peso de
instalação desnecessário dado a restrição de dados).

## Pendente / por decidir

- Footer do site ainda não foi construído.
- Ainda não se decidiu se o site vai expandir para outros serviços que
  aparecem nos flyers (pestanas, manicure/pedicure, venda de cosméticos)
  além de depilação — perguntar ao utilizador antes de adicionar.
- Ligação ao GitHub: o utilizador quer commits regulares (a cada 2
  alterações), mas sem menções a IA nas mensagens. Regra actual, válida
  para qualquer modo (automático ou não, Cowork ou Claude Code CLI):
  - Nenhuma mensagem de commit leva atribuição a IA (sem `Co-Authored-By:
    Claude`, sem "Generated with Claude Code", etc.).
  - Antes de qualquer `git push`, mostrar ao utilizador as mensagens de
    commit em texto para ele rever e aprovar.
