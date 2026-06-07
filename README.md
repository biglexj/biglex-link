# ⚠️ biglex-link [DESCONTINUADO / DEPRECATED]

> **IMPORTANTE:** Este proyecto ha sido **descontinuado** y marcado como obsoleto. Toda la lógica de redireccionamiento de enlaces de `link.biglexj.com` ha sido **migrada y fusionada directamente** dentro del proyecto principal de Astro de **[Aurora Blog](https://github.com/biglexj/Aurora---Blog)** a través de un Middleware de servidor.
>
> Este repositorio se mantiene público exclusivamente como una plantilla de referencia de código abierto para la comunidad sobre cómo construir un acortador de enlaces ultrarrápido y seguro en el Edge utilizando Cloudflare Workers, TypeScript, Vitest y un diseño 404 minimalista integrado con la paleta de colores de marca.

## 🚀 Empezando

Para ejecutar este proyecto localmente, necesitarás tener [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/) instalados.

1.  **Clona el repositorio:**

    ```bash
    git clone https://github.com/biglexj/biglex-link.git
    cd biglex-link
    ```

2.  **Instala las dependencias:**

    ```bash
    npm install
    ```

3.  **Inicia el servidor de desarrollo:**

    ```bash
    npm run dev
    ```

    Esto iniciará un servidor local donde podrás probar los redireccionamientos.

## 🔗 Enlaces de Ejemplo (Plantilla)

Para acceder o compartir cualquiera de los enlaces configurados, la estructura del enlace es: **`https://link.biglexj.com/[enlace]`** (por ejemplo, [https://link.biglexj.com/discord](https://link.biglexj.com/discord)).

Aquí hay una lista de los enlaces de prueba configurados en esta plantilla:

-   `/discord` (Servidor de comunidad oficial de Biglex J)
-   `/youtube` (Canal de YouTube de Biglex J)
-   `/github` (Repositorio GitHub de Biglex J)
-   `/steam` (Perfil de Steam de Biglex J)
-   `/kofi` (Página de Ko-fi de Biglex J)
-   `/miku` (Redirección de video de Hatsune Miku de ejemplo)

## 🚀 Despliegue (Deployment)

Para desplegar este worker a Cloudflare, sigue estos pasos:

1. **Inicia sesión en Cloudflare:**
   Si no has iniciado sesión o tu sesión ha expirado, ejecuta el siguiente comando para autenticarte:
   ```bash
   npx wrangler login
   ```
   *Nota para Windows (si tienes la ejecución de scripts de PowerShell deshabilitada):* Puedes ejecutar `npx.cmd wrangler login` en su lugar. Esto abrirá una pestaña en tu navegador para autorizar la conexión. Si no se abre automáticamente, copia y pega en tu navegador el enlace que se muestra en la consola.

   *Método alternativo (Token de API):* Si prefieres no usar el login interactivo (útil para integración continua/CI), puedes crear un Token de API en el panel de Cloudflare con la plantilla **Edit Cloudflare Workers** y configurarlo como una variable de entorno:
   ```bash
   # En Windows PowerShell:
   $env:CLOUDFLARE_API_TOKEN="tu_token_de_api"
   
   # En CMD:
   set CLOUDFLARE_API_TOKEN=tu_token_de_api
   ```

2. **Ejecuta el despliegue:**
   ```bash
   npm run deploy
   ```

   Esto publicará el worker en tu cuenta de Cloudflare.

## ✅ Pruebas (Testing)

Para ejecutar los tests, usa el siguiente comando:

```bash
npm run test
```

Esto ejecutará los tests usando [Vitest](https://vitest.dev/).

## 🔀 Fusión e Integración en Astro (Aurora Blog)

Este proyecto fue descontinuado y su lógica fue completamente integrada en el proyecto Astro de **Aurora Blog**. La migración permite gestionar todas las redirecciones de forma dinámica a través de una base de datos en **Supabase** y un panel de administración visual.

### ¿Cómo se implementó en Astro?

Se utiliza un **Middleware de Astro** (`src/middleware.ts`) que intercepta las peticiones dirigidas al subdominio `link.biglexj.com`. De esta manera, el subdominio no interfiere con las rutas del blog principal (`biglexj.com`):

```typescript
// Ejemplo del Middleware en Astro:
import { defineMiddleware } from "astro:middleware";
import { getRedirectBySlug, incrementRedirectClick } from "./lib/supabase";

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  const hostname = url.hostname;

  if (hostname === "link.biglexj.com") {
    const slug = url.pathname.slice(1).toLowerCase();

    if (!slug) {
      return context.redirect("https://biglexj.com", 302);
    }

    try {
      const redirectData = await getRedirectBySlug(slug);

      if (redirectData && redirectData.isActive) {
        context.waitUntil(incrementRedirectClick(redirectData.id));
        return context.redirect(redirectData.destinationUrl, 302);
      }
    } catch (err) {
      console.error("Error en redirección:", err);
    }

    return context.redirect("https://biglexj.com/404", 302);
  }

  return next();
});
```

Este enfoque unifica la infraestructura en un solo repositorio y elimina la necesidad de redesplegar Workers de Cloudflare de forma manual para actualizar enlaces.
