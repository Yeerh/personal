import { sendPreCadastroEmail } from "../server/preCadastroEmail";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  try {
    const payload = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

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
      userAgent: req.headers?.["user-agent"] || "",
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ ok: false, error: String(err) });
  }
}

