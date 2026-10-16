# fixcomap/elias

Portfolio de Elías Prieto en [elias.fixcomap.com](https://elias.fixcomap.com). React + TypeScript + Vite +
Tailwind; el pipeline construye `dist/` y publica eso.

## Cómo se despliega

Este repo no tiene pipeline propio. `.github/workflows/ci.yml` es el mismo en todos los repos de
fixcomap y llama al pipeline estándar de [`fixcomap/platform`](https://github.com/fixcomap/platform),
que lee [`catalog/elias.yaml`](https://github.com/fixcomap/platform/blob/main/catalog/elias.yaml)
para saber qué es este repo (`type: static`) y cómo publicarlo. El proyecto de Cloudflare Pages
(`fixcomap-elias`), los dominios y el DNS también salen de ese fichero.

| Evento | Qué pasa |
|---|---|
| PR a `develop` o `main` | gitflow, gitleaks + trivy, `npm run build`, HTML (W3C Nu) sobre `dist/`, CSP en `_headers`, preview en `<rama>.fixcomap-elias.pages.dev` |
| Merge a `develop` | lo anterior + preview en `develop.fixcomap-elias.pages.dev` |
| Merge a `main` | producción tras aprobar el environment `production`, con smoke test de https://elias.fixcomap.com |

El único check obligatorio es `cicd / ok`. Si un deploy falla, Pages sigue sirviendo la versión
anterior.

Flujo de ramas (GitFlow):

```sh
git switch develop && git pull && git switch -c feature/<cambio>
# ... cambios, commits "<tipo>(<ámbito>): <descripción>" ...
gh pr create --base develop --fill          # checks en verde, sin aprobación; mirar la preview
# para publicar:
git switch develop && git pull && git switch -c release/AAAA-MM-DD
gh pr create --base main --fill             # 1 aprobación (o bypass de admin)
# tras el merge: PR de main a develop (back-merge)
```

## Desarrollo local

Requisitos: Node 22.

```sh
npm ci
npm run dev        # http://localhost:5173, recarga en caliente
npm run lint
npm run build      # genera dist/, lo mismo que publica el pipeline
npm run preview    # sirve dist/ en local
```

| Fichero | Qué es |
|---|---|
| `src/` | componentes React y estilos |
| `public/` | se copia tal cual a `dist/`; `public/_headers` son las cabeceras de Pages (CSP) |
| `index.html`, `vite.config.ts`, `tailwind.config.js` | entrada y configuración de Vite/Tailwind |
