import http from "http";

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`
    <html>
      <head>
        <title>Ginbar Media</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
          body{margin:0;display:grid;place-items:center;min-height:100vh;background:#0b0b0c;color:#f4f4f5;font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial}
          .card{max-width:720px;padding:48px 40px;border:1px solid rgba(255,255,255,.08);border-radius:18px;background:rgba(255,255,255,.03)}
          h1{margin:0 0 10px;font-size:40px;letter-spacing:-.02em}
          p{margin:0;opacity:.8;font-size:16px;line-height:1.6}
          .tag{display:inline-block;margin-top:18px;padding:8px 12px;border-radius:999px;border:1px solid rgba(255,255,255,.12);opacity:.9;font-size:12px}
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Ginbar Media</h1>
          <p>App Hosting is live. Next step: replace this with your real Next.js site.</p>
          <div class="tag">✅ Node server running on PORT ${port}</div>
        </div>
      </body>
    </html>
  `);
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
