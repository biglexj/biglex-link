# biglex-link

Este proyecto es un acortador de enlaces simple que se ejecuta en Cloudflare Workers. Redirige a los usuarios desde una URL corta a una URL de destino más larga.

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

## 🔗 Enlaces Disponibles

Para acceder o compartir cualquiera de los enlaces configurados, debes anteponer el dominio de redirección al enlace corto. 

La estructura del enlace es: **`https://link.biglexj.com/[enlace]`** (por ejemplo, [https://link.biglexj.com/discord](https://link.biglexj.com/discord)).

Aquí hay una lista de los enlaces cortos actualmente configurados:

-   **Redes Sociales:**
    -   `/discord`
    -   `/youtube`
    -   `/github`
    -   `/twitch`
    -   `/reddit`
    -   `/linkedin`
    -   `/facebook`
    -   `/tiktok`
    -   `/twitter`
    -   `/instagram`
-   **Canales de YouTube:**
    -   `/biglex`
    -   `/ely`
    -   `/dev`
    -   `/live`
    -   `/tema`
    **Patreon:**
    -   `/patreon`
    -   `/patreon-k`
-   **Proyectos:**
    -   `/mikuandina`
    -   `/games`
    -   `/store`
-   **Telegram:**
    -   `/telegram`
    -   `/tmegrupo`
    -   `/tmedev`
    -   `/tmeprovip`
    -   `/tmopro`
    -   `/tmecanal`
-   **WhatsApp:**
    -   `/whatsapp`
-   **Videos de YouTube:**
    -   `/miku`
    -   `/amor`

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
