// src/index.ts

// Define el tipo para tus links
type Links = {
  [key: string]: string;
}

const links: Links = {
  // YouTube Videos
  'miku': 'https://youtube.com/watch?v=NOE8h8Lxn8c',
  'amor': 'https://youtube.com/watch?v=IUZlRGTBcPo&t=25s',

  // Discord
  'discord': 'https://discord.gg/f5crHcpHKW',

  // Redes sociales
  'youtube': 'https://youtube.com/@biglexj',
  'github': 'https://github.com/biglexj',
  'twitch': 'https://twitch.tv/biglex_j',
  'reddit': 'https://reddit.com/u/biglexj',
  'linkedin': 'https://www.linkedin.com/in/biglexj',
  'facebook': 'https://facebook.com/biglexj',
  'tiktok': 'https://tiktok.com/@biglexj',
  'twitter': 'https://twitter.com/biglexj',
  'instagram': 'https://instagram.com/biglexj',

  //Patreon
  'patreon': 'https://patreon.com/biglexj',
  'patreon-k': 'https://patreon.com/biglexpe',

  // Canales específicos
  'biglex': 'https://youtube.com/@biglexj',
  'ely': 'https://youtube.com/@ely_vtuber',
  'dev': 'https://youtube.com/@biglexdev',
  'live': 'https://youtube.com/@biglexlive',
  'tema': 'https://youtube.com/@biglexjtema',

  // Proyectos
  'mikuandina': 'https://youtube.com/@miku-andina',
  'games': 'https://youtube.com/@biglexgames',
  'store': 'https://youtube.com/@biglexstore',
  'producciones': 'https://youtube.com/@biglexpe',

  // Proyectos GitHub
  'historia': 'https://github.com/biglexj/miHistoria',

  // Telegram
  'telegram': 'https://t.me/biglexrv',
  'tmegrupo': 'https://t.me/biglexj',
  'tmedev': 'https://t.me/biglexdev',
  'tmeprovip': 'https://t.me/+IGFap6rlgp85Y2Rh',
  'tmopro': 'https://t.me/biglexjpro',
  'tmecanal': 'https://t.me/biglexpe',

  // WhatsApp
  'whatsapp': 'https://wa.me/51941768509?text=Hola,%20estoy%20interesado%20en%20sus%20servicios.',
  'wspgrupo': 'https://chat.whatsapp.com/LpnBc9QTYplLy8QIfh18I4'
}

function escapeHtml(str: string): string {
  return str.replace(/[&<>'"]/g, (tag) => {
    const chars: { [key: string]: string } = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;',
    };
    return chars[tag] || tag;
  });
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url)
    const path = url.pathname.slice(1)

    if (!path) {
      return Response.redirect('https://biglexj.com', 302)
    }

    const destination = links[path.toLowerCase()]

    if (destination) {
      return Response.redirect(destination, 302)
    }

    const escapedPath = escapeHtml(path);

    return new Response(`
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <title>Enlace no encontrado - Biglex</title>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700;900&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
          <style>
            :root {
              --bg-dark: #050a14;
              --bg-app: #0f172a;
              --surface-app: #1e293b;
              --text-main: #ffffff;
              --text-contrast: #e2e8f0;
              
              /* Accents */
              --accent-green: #00c7b1;
              --accent-green-hover: #19e8ce;
              --accent-coral: #ff5b4c;
            }

            * {
              box-sizing: border-box;
              margin: 0;
              padding: 0;
            }

            body {
              font-family: 'Poppins', sans-serif;
              background-image: url('https://raw.githubusercontent.com/biglexj/biglex-link/refs/heads/main/bg-404.png');
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
              min-height: 100vh;
              display: flex;
              justify-content: center;
              align-items: center;
              color: var(--text-main);
              overflow: hidden;
              position: relative;
            }

            .container {
              position: relative;
              z-index: 10;
              width: 90%;
              max-width: 460px;
              padding: 2rem 1rem;
              text-align: center;
              animation: cardAppear 0.6s cubic-bezier(0.16, 1, 0.3, 1);
            }

            @keyframes cardAppear {
              from {
                opacity: 0;
                transform: translateY(15px) scale(0.98);
              }
              to {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }

            .icon-container {
              margin-bottom: 1.8rem;
              display: inline-flex;
              justify-content: center;
              align-items: center;
              position: relative;
            }

            .error-svg {
              width: 76px;
              height: 76px;
              filter: drop-shadow(0 0 10px rgba(0, 199, 177, 0.45));
            }

            h1 {
              font-family: 'Oswald', sans-serif;
              font-weight: 900;
              font-size: 2.1rem;
              text-transform: uppercase;
              letter-spacing: 0.05em;
              margin-bottom: 0.8rem;
              color: var(--text-main);
            }

            p {
              font-family: 'Poppins', sans-serif;
              font-size: 0.95rem;
              color: var(--text-contrast);
              line-height: 1.6;
              margin-bottom: 2rem;
            }

            .link-path {
              font-family: monospace;
              background-color: rgba(0, 0, 0, 0.45); /* Fondo oscuro sutil */
              border: 1px solid rgba(0, 199, 177, 0.3); /* Borde verde sutil */
              padding: 3px 8px;
              border-radius: 8px;
              color: var(--accent-green); /* Destacado en el verde de Eli */
              font-size: 0.95rem;
              word-break: break-all;
            }

            .btn-primary {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              gap: 0.5rem;
              background: var(--accent-green);
              color: #0b2521; /* Texto oscuro para alto contraste sobre verde */
              text-decoration: none;
              font-family: 'Poppins', sans-serif;
              font-weight: 700;
              font-size: 0.95rem;
              padding: 0.8rem 1.8rem;
              border-radius: 12px; /* rounded-xl para botones */
              transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
              box-shadow: 0 4px 15px rgba(0, 199, 177, 0.25);
              border: 1px solid rgba(255, 255, 255, 0.1);
            }

            .btn-primary:hover {
              transform: translateY(-2px);
              box-shadow: 0 8px 20px rgba(0, 199, 177, 0.4);
              background: var(--accent-green-hover);
            }

            .btn-primary:active {
              transform: translateY(0);
            }

            .btn-primary svg {
              transition: transform 0.25s;
            }

            .btn-primary:hover svg {
              transform: translateX(4px);
            }

            .footer-brand {
              margin-top: 2.2rem;
              font-size: 0.8rem;
              color: rgba(248, 250, 252, 0.4); /* Mayor visibilidad para el footer */
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 0.25rem;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="icon-container">
              <svg class="error-svg" viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <!-- Enlaces en Accent Blue -->
                <path d="M9 17H7A5 5 0 0 1 7 7h2" stroke="var(--accent-blue)" />
                <path d="M15 7h2a5 5 0 0 1 0 10h-2" stroke="var(--accent-blue)" />
                <line x1="8" y1="12" x2="16" y2="12" stroke="var(--accent-blue)" stroke-dasharray="3 3" />
                <!-- Slash de corte en Accent Coral -->
                <line x1="5" y1="19" x2="19" y2="5" stroke="var(--accent-coral)" stroke-width="2.5" />
              </svg>
            </div>
            <h1>Enlace no encontrado</h1>
            <p>El enlace <span class="link-path">/${escapedPath}</span> no está disponible o no existe.</p>
            <a href="https://biglexj.com" class="btn-primary">
              Volver al inicio
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            
            <div class="footer-brand">
              <span>© 2026 biglexj</span>
            </div>
          </div>
        </body>
      </html>
    `, {
      status: 404,
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    })
  }
} satisfies ExportedHandler<Env>
