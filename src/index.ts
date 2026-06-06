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
          <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap" rel="stylesheet">
          <style>
            :root {
              --bg-start: #0a0b10;
              --bg-end: #141520;
              --primary: #6366f1;
              --primary-glow: rgba(99, 102, 241, 0.15);
              --text-main: #f3f4f6;
              --text-muted: #9ca3af;
              --card-bg: rgba(255, 255, 255, 0.03);
              --card-border: rgba(255, 255, 255, 0.07);
            }

            * {
              box-sizing: border-box;
              margin: 0;
              padding: 0;
            }

            body {
              font-family: 'Outfit', sans-serif;
              background-image: linear-gradient(rgba(10, 11, 16, 0.85), rgba(20, 21, 32, 0.85)), url('https://raw.githubusercontent.com/biglexj/biglex-link/refs/heads/main/bg-404.png');
              background-size: cover;
              background-position: center;
              min-height: 100vh;
              display: flex;
              justify-content: center;
              align-items: center;
              color: var(--text-main);
              overflow: hidden;
              position: relative;
            }

            /* Glowing background blobs */
            .glow-blob {
              position: absolute;
              width: 350px;
              height: 350px;
              background: radial-gradient(circle, var(--primary) 0%, transparent 70%);
              opacity: 0.15;
              filter: blur(50px);
              pointer-events: none;
              z-index: 0;
              animation: float 12s ease-in-out infinite alternate;
            }

            .glow-blob-1 {
              top: 10%;
              left: 15%;
            }

            .glow-blob-2 {
              bottom: 15%;
              right: 15%;
              animation-delay: -6s;
            }

            @keyframes float {
              0% { transform: translate(0, 0) scale(1); }
              100% { transform: translate(30px, 20px) scale(1.1); }
            }

            .container {
              position: relative;
              z-index: 10;
              width: 90%;
              max-width: 480px;
              padding: 3rem 2.5rem;
              background: var(--card-bg);
              border: 1px solid var(--card-border);
              backdrop-filter: blur(20px);
              -webkit-backdrop-filter: blur(20px);
              border-radius: 28px;
              text-align: center;
              box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
              animation: cardAppear 0.8s cubic-bezier(0.16, 1, 0.3, 1);
            }

            @keyframes cardAppear {
              from {
                opacity: 0;
                transform: translateY(20px) scale(0.98);
              }
              to {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }

            .icon-container {
              margin-bottom: 2rem;
              display: inline-flex;
              justify-content: center;
              align-items: center;
              position: relative;
            }

            .icon-glow {
              position: absolute;
              width: 90px;
              height: 90px;
              background: var(--primary);
              filter: blur(25px);
              opacity: 0.4;
              border-radius: 50%;
              z-index: -1;
              animation: pulseGlow 3s infinite alternate;
            }

            @keyframes pulseGlow {
              0% { transform: scale(0.9); opacity: 0.3; }
              100% { transform: scale(1.1); opacity: 0.5; }
            }

            .error-svg {
              width: 80px;
              height: 80px;
              fill: none;
              stroke: var(--primary);
              stroke-width: 2;
              stroke-linecap: round;
              stroke-linejoin: round;
              filter: drop-shadow(0 0 8px rgba(99, 102, 241, 0.5));
            }

            h1 {
              font-size: 2.2rem;
              font-weight: 700;
              margin-bottom: 1rem;
              background: linear-gradient(135deg, #ffffff 30%, #a5b4fc 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              letter-spacing: -0.5px;
            }

            p {
              font-size: 1.05rem;
              color: var(--text-muted);
              line-height: 1.6;
              margin-bottom: 2rem;
            }

            .link-path {
              font-family: monospace;
              background: rgba(255, 255, 255, 0.08);
              border: 1px solid rgba(255, 255, 255, 0.1);
              padding: 3px 8px;
              border-radius: 6px;
              color: #e0e7ff;
              font-size: 0.95rem;
              word-break: break-all;
            }

            .btn-primary {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              gap: 0.5rem;
              background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
              color: white;
              text-decoration: none;
              font-weight: 600;
              padding: 0.9rem 2rem;
              border-radius: 14px;
              transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
              box-shadow: 0 4px 15px var(--primary-glow);
              border: 1px solid rgba(255, 255, 255, 0.1);
            }

            .btn-primary:hover {
              transform: translateY(-2px);
              box-shadow: 0 8px 25px rgba(99, 102, 241, 0.35);
              background: linear-gradient(135deg, #6d70f2 0%, #5a52e6 100%);
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
              margin-top: 2.5rem;
              font-size: 0.85rem;
              color: rgba(255, 255, 255, 0.3);
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 0.25rem;
            }
          </style>
        </head>
        <body>
          <div class="glow-blob glow-blob-1"></div>
          <div class="glow-blob glow-blob-2"></div>
          
          <div class="container">
            <div class="icon-container">
              <div class="icon-glow"></div>
              <svg class="error-svg" viewBox="0 0 24 24">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                <line x1="8" y1="16" x2="16" y2="8" stroke="rgba(239, 68, 68, 0.8)" stroke-width="2" />
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
              <span>© 2026 Biglex</span>
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