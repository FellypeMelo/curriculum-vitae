# Ambiente local

**Idioma:** Português (Brasil) · [English](../en/setup.md)

## Pré-requisitos

Node.js e npm. Nenhuma versão do Node ou do npm está fixada neste repositório (não há
`.nvmrc`, nem campo `engines` em [`package.json`](../../package.json)) — recomenda-se uma
versão LTS atual do Node.js, mas nada no repositório obriga uma versão específica. Não há
nenhuma outra dependência de runtime: nenhum banco de dados, nenhuma credencial de serviço
externo e nenhum arquivo de variáveis de ambiente é necessário para rodar o projeto localmente.

## Instalação

```bash
npm install
```

Isso instala as dependências exatamente como declaradas em `package.json` e fixadas em
`package-lock.json` — React 19, Vite 7, Tailwind CSS v4, Framer Motion 12, Lucide React e os
pacotes de fontes Fontsource listados em [`architecture.md`](./architecture.md#estilização),
além do toolchain do ESLint 9 como dependência de desenvolvimento.

## Scripts disponíveis

Os quatro scripts abaixo vêm literalmente de `package.json`; nenhum foi alterado para esta
etapa de documentação.

| Script | Comando executado | O que faz |
| --- | --- | --- |
| `npm run dev` | `vite` | Inicia o servidor de dev do Vite com hot module replacement, por padrão em `http://localhost:5173`. |
| `npm run build` | `tsc -b && vite build` | Faz a checagem de tipos do projeto com `tsc -b` e então gera o bundle de produção em `./dist`. |
| `npm run lint` | `eslint .` | Roda o ESLint sobre toda a árvore usando o flat config em [`eslint.config.js`](../../eslint.config.js). |
| `npm run preview` | `vite preview` | Serve localmente a pasta `./dist` já gerada, para validar um build de produção antes de dar push. |

Não existe script `npm test`. Veja [`testing.md`](./testing.md) para entender por quê.

## Ciclo de desenvolvimento do dia a dia

```bash
npm install
npm run dev       # edite src/, veja as mudanças ao vivo em http://localhost:5173
npm run lint      # antes de commitar
npm run build     # antes de qualquer coisa destinada à produção — veja abaixo
```

## Lint

[`eslint.config.js`](../../eslint.config.js) é um flat config do ESLint 9 combinando:

- regras recomendadas do `@eslint/js`
- regras recomendadas do `typescript-eslint`
- `eslint-plugin-react-hooks` (preset flat recomendado)
- `eslint-plugin-react-refresh` (preset do Vite)

Ele ignora `dist/` globalmente e se aplica a `**/*.{ts,tsx}`. Execute com `npm run lint`. Ele
**não** é acionado automaticamente por nenhum Git hook nem etapa de CI neste repositório hoje —
rodá-lo é, por enquanto, um passo manual (registrado em [`roadmap.md`](./roadmap.md)).

## Antes de dar push: a etapa do `dist/`

Rodar apenas `npm run build` não é suficiente se sua mudança precisa chegar ao site publicado.
O workflow de deploy deste projeto publica exatamente o que já estiver commitado em `dist/` —
ele não constrói nada por conta própria. Veja [`deployment.md`](./deployment.md) para a mecânica
completa e o checklist de release, e [`../../README.pt-BR.md`](../../README.pt-BR.md) para o
resumo da mesma armadilha voltado ao contribuidor (o `CONTRIBUTING.md` detalhado está apenas em
inglês).

## Configuração de editor

Não há `.editorconfig`, nenhuma configuração de workspace do VS Code commitada e nenhuma
configuração de Prettier neste repositório. A consistência de formatação hoje depende
inteiramente do que o conjunto de regras do ESLint cobre (que não inclui o conjunto completo de
regras de estilo de um formatador) mais as preferências de editor do próprio autor. Não há mais
nada a configurar para obter feedback útil de lint/tipos além do que as extensões nativas de
TypeScript e ESLint de um editor já capturam a partir de `tsconfig*.json` e `eslint.config.js`.
