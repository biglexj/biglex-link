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
-   **Proyectos:**
    -   `/mikuandina`
    -   `/games`
    -   `/store`
-   **Telegram:**
    -   `/tmepersonal`
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

## 🚀 (Deployment)

Para desplegar este worker a Cloudflare, ejecuta el siguiente comando:

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
