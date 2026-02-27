import nodemailer from "nodemailer";

export type PreCadastroPayload = {
  name: string;
  whatsapp: string;
  instagram?: string;
  trainingStatus: string;
  objective: string;
  pain?: string;
  submittedAtISO?: string;
  userAgent?: string;
};

const TO_EMAIL_DEFAULT = "personalcleytonvieira@gmail.com";

function requiredEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env var ${name}`);
  return value;
}

export async function sendPreCadastroEmail(payload: PreCadastroPayload) {
  const host = requiredEnv("SMTP_HOST");
  const port = Number(requiredEnv("SMTP_PORT"));
  const user = requiredEnv("SMTP_USER");
  const pass = requiredEnv("SMTP_PASS");
  const from = process.env.SMTP_FROM || user;
  const to = process.env.PRECADASTRO_TO_EMAIL || TO_EMAIL_DEFAULT;
  const secure =
    (process.env.SMTP_SECURE ?? "").toLowerCase() === "true" || port === 465;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  const submittedAt = payload.submittedAtISO || new Date().toISOString();
  const subject = `Pré-cadastro • ${payload.name}`;
  const text =
    `PRÉ-CADASTRO — Site\n` +
    `Data: ${submittedAt}\n\n` +
    `Nome: ${payload.name}\n` +
    `WhatsApp: ${payload.whatsapp}\n` +
    `Instagram: ${payload.instagram || "Não informado"}\n\n` +
    `Status de treino: ${payload.trainingStatus}\n` +
    `Objetivo: ${payload.objective}\n\n` +
    `Dores/desconfortos: ${payload.pain || "Nenhum informado"}\n\n` +
    `User-Agent: ${payload.userAgent || "N/A"}\n`;

  await transporter.sendMail({
    from,
    to,
    subject,
    text,
  });
}
