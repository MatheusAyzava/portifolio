# Portfólio — Matheus Ayzava

Portfólio profissional em **Next.js 15** + **React 19**, com o mesmo visual do [portfólio de referência](http://caiorodri.me/index.html).

## Rodar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Publicar na internet (igual site estático do Caio)

O Caio usa arquivos HTML/CSS na hospedagem. Aqui o Next gera isso automaticamente na pasta **`out/`** após o build:

```bash
npm run build
```

Arquivos gerados (equivalente ao `index.html` dele):

| Arquivo | Página |
|---------|--------|
| `out/index.html` | Home |
| `out/sobre/index.html` | Sobre |
| `out/projetos/index.html` | Projetos |
| `out/contato/index.html` | Contato |

### Netlify (recomendado — você já usa)

1. Suba o projeto no [GitHub](https://github.com/MatheusAyzava)
2. Em [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import from Git**
3. O `netlify.toml` já configura: build `npm run build`, publicar pasta `out`
4. Escolha um domínio (ex: `matheusayzava.netlify.app`)

### Testar localmente como site publicado

```bash
npx serve out
```

Abra o endereço que aparecer no terminal (geralmente http://localhost:3000).

### Vercel (alternativa)

Conecte o repositório em [vercel.com](https://vercel.com) — detecta Next.js automaticamente. Com `output: export`, também gera site estático.

## Estrutura

- `app/` — páginas (Home, Sobre, Projetos, Contato)
- `components/` — UI reutilizável
- `lib/data.ts` — textos, links e projetos (edite aqui)
- `public/cv_MatheusAyzava.pdf` — currículo para download
