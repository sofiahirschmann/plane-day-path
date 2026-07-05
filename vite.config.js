import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Mounts the Vercel-style serverless functions in api/ onto Vite's dev
// server, so `npm run dev` behaves like the deployed app with no second
// process. The shim adds the two Vercel helpers the handlers rely on
// (req.query, res.status().json()).
function devApi() {
  return {
    name: 'dev-api',
    configureServer(server) {
      server.middlewares.use('/api/track', async (req, res) => {
        const url = new URL(req.url, 'http://localhost');
        req.query = Object.fromEntries(url.searchParams);
        res.status = (code) => ((res.statusCode = code), res);
        res.json = (body) => {
          res.setHeader('content-type', 'application/json');
          res.end(JSON.stringify(body));
        };
        try {
          const { default: handler } = await server.ssrLoadModule('/api/track.js');
          await handler(req, res);
        } catch (err) {
          console.error(err);
          res.status(500).json({ code: 'INTERNAL', message: String(err) });
        }
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), devApi()],
});
