# Fina Depilações — website

Site de uma página para a Fina Depilações, salão de estética e depilação em
Maputo. Feito com Next.js (App Router), React e Tailwind CSS.

## A correr localmente

Requisitos: Node.js instalado.

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000). A página actualiza-se
sozinha ao guardar ficheiros.

Outros comandos:

```bash
npm run build   # build de produção
npm run start   # corre o build de produção localmente
npm run lint    # verifica o código com o ESLint
```

Se o servidor de desenvolvimento começar a dar erros estranhos depois de
muitas alterações seguidas (ex.: "X is not defined" para algo que existe
no código), o cache do Next pode ter ficado desactualizado. Resolve-se com:

```bash
rm -rf .next
npm run dev
```

## Estrutura do projecto

```
app/
  layout.tsx          Layout raiz: fontes, metadata, JSON-LD, script do tema
  page.tsx             A página em si (ordem das secções)
  globals.css          Paleta de cores (clara e escura), animações, estilos base
  opengraph-image.tsx  Imagem gerada para pré-visualização ao partilhar o link

  components/
    Navbar.tsx          Menu de navegação (fixo no topo, com menu de telemóvel)
    Hero.tsx             Secção de abertura
    Servicos.tsx         Tabela de preços + carrossel de fotos
    ServicoCard.tsx       Uma linha da tabela de preços
    Carrossel.tsx         Carrossel de fotos com scroll contínuo
    Cursos.tsx            Secção dos cursos de depilação
    Sobre.tsx             Secção "Sobre nós"
    Contactos.tsx         Morada, horário, redes sociais, contactos directos
    Footer.tsx            Rodapé (faixa mínima: logótipo, redes, copyright)
    SectionHeading.tsx    Cabeçalho repetido em todas as secções (rótulo + título)
    ThemeToggle.tsx       Botão para forçar tema claro/escuro
    JsonLd.tsx            Dados estruturados (schema.org) para motores de busca
    icons.tsx             Ícones SVG usados em todo o site

  data/
    servicos.ts    Tabela de preços (categorias e serviços)
    cursos.ts      Os dois cursos de depilação
    contactos.ts   Morada, telefone, e-mail, horário, redes sociais
    site.ts        Nome do negócio, descrição curta, URL de produção

  lib/
    whatsapp.ts    Gera os links "wa.me" com mensagem pré-escrita

public/images/     Fotos e logótipo usados no site
fotos/             Fotos originais do salão (não vão para produção)
```

## Onde mexer para alterar conteúdo

- **Preços e serviços** → `app/data/servicos.ts`
- **Cursos** → `app/data/cursos.ts`
- **Morada, telefone, e-mail, horário, redes sociais** → `app/data/contactos.ts`
- **Cores do site** → `app/globals.css`, variáveis no topo do ficheiro
  (`--primary`, `--gold`, etc.) — há uma versão para tema claro e outra
  para tema escuro
- **Número de WhatsApp** → `app/lib/whatsapp.ts`

## Tema claro/escuro

O site segue automaticamente a preferência do sistema operativo
(`prefers-color-scheme`). Há também um botão (ícone de sol/lua) na barra de
navegação que permite forçar um dos dois temas manualmente; a escolha fica
guardada no browser (`localStorage`) e é lembrada da próxima vez.

## Publicar o site (deploy)

O site está preparado para correr gratuitamente na
[Vercel](https://vercel.com) (a plataforma dos criadores do Next.js):
liga-se o repositório do GitHub e cada `push` para `main` publica uma nova
versão automaticamente, num endereço tipo `algo.vercel.app`.

Quando houver um domínio próprio (ex.: `finadepilacoes.co.mz`), trocar o
valor de `SITE_URL` em `app/data/site.ts` — é usado em todo o site para
gerar links de partilha, dados estruturados e metadata.

## Tecnologias

- [Next.js](https://nextjs.org) 16 (App Router)
- [React](https://react.dev) 19
- [Tailwind CSS](https://tailwindcss.com) 4
- TypeScript

Sem bibliotecas de UI, animação ou carrossel adicionais — tudo (incluindo o
carrossel de fotos e as animações) é feito com CSS e React simples, para
manter o site leve.
