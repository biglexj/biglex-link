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
  
  // Canales específicos
  'biglex': 'https://youtube.com/@biglexj',
  'ely': 'https://youtube.com/@ely_vtuber',
  'dev': 'https://youtube.com/@biglexdev',
  'live': 'https://youtube.com/@biglexlive',
  
  // Proyectos
  'mikuandina': 'https://youtube.com/@miku-andina',
  'games': 'https://youtube.com/@biglexgames',
  'store': 'https://youtube.com/@biglexstore'
}

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url)
    const path = url.pathname.slice(1)
    
    if (!path) {
      return Response.redirect('https://biglexj.com', 301)
    }
    
    const destination = links[path.toLowerCase()]
    
    if (destination) {
      return Response.redirect(destination, 301)
    }
    
    return new Response(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Link no encontrado - Biglex</title>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              margin: 0;
              color: white;
            }
            .container {
              text-align: center;
              padding: 2rem;
            }
            h1 { font-size: 3rem; margin: 0; }
            p { font-size: 1.2rem; }
            a {
              color: #fff;
              text-decoration: none;
              border: 2px solid white;
              padding: 10px 20px;
              border-radius: 5px;
              display: inline-block;
              margin-top: 20px;
              transition: all 0.3s;
            }
            a:hover {
              background: white;
              color: #667eea;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>🤔 Oops!</h1>
            <p>El link "/${path}" no existe</p>
            <a href="https://biglexj.com">Volver al inicio</a>
          </div>
        </body>
      </html>
    `, {
      status: 404,
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    })
  }
} satisfies ExportedHandler<Env>