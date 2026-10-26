# fixcomap/elias

Portfolio de Elías Prieto en [elias.fixcomap.com](https://elias.fixcomap.com). React + TypeScript + Vite + Tailwind.

## Desarrollo local

Requisitos: Node 22.

```sh
npm ci
npm run dev        # http://localhost:5173
npm run lint
npm run build      # genera dist/, lo mismo que publica el pipeline
```

| Ruta | Qué es |
|---|---|
| `src/` | componentes React y estilos |
| `public/` | se copia tal cual a `dist/`; `public/_headers`, cabeceras de seguridad |

## Despliegue

Pipeline estándar de [fixcomap/platform](https://github.com/fixcomap/platform): PR → checks;
`develop` → preview privada; `main` → producción con aprobación.
