import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { sendPreCadastroEmail, type PreCadastroPayload } from "./preCadastroEmail";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json({ limit: "1mb" }));

  app.post("/api/pre-cadastro", async (req, res) => {
    try {
      const payload = req.body as Partial<PreCadastroPayload>;

      if (!payload?.name || !payload?.whatsapp || !payload?.trainingStatus || !payload?.objective) {
        res.status(400).json({ ok: false, error: "Missing required fields" });
        return;
      }

      await sendPreCadastroEmail({
        name: String(payload.name),
        whatsapp: String(payload.whatsapp),
        instagram: payload.instagram ? String(payload.instagram) : "",
        trainingStatus: String(payload.trainingStatus),
        objective: String(payload.objective),
        pain: payload.pain ? String(payload.pain) : "",
        submittedAtISO: payload.submittedAtISO ? String(payload.submittedAtISO) : undefined,
        userAgent: req.headers["user-agent"] || "",
      });

      res.json({ ok: true });
    } catch (err) {
      res.status(500).json({ ok: false, error: String(err) });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
