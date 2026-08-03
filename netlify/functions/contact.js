const ALLOWED_TYPES = ["image/jpeg", "image/jpg", "image/png"];
const MAX_FILES = 5;
const MAX_FILE_SIZE_BYTES = 500 * 1024;
const MAILGUN_API_BASE_URL = "https://api.mailgun.net/v3";

function headers() {
  return {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };
}

function badRequest(message) {
  return {
    statusCode: 400,
    headers: headers(),
    body: JSON.stringify({ ok: false, message }),
  };
}

function isValidEmail(value) {
  const trimmed = value.trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
}

function parseJsonBody(event) {
  if (!event.body) {
    return {};
  }

  const rawBody = event.isBase64Encoded
    ? Buffer.from(event.body, "base64").toString("utf8")
    : event.body;

  return JSON.parse(rawBody);
}

function sanitizeText(value) {
  return typeof value === "string" ? value.trim().slice(0, 8000) : "";
}

function normalizeAttachments(rawAttachments = []) {
  if (!Array.isArray(rawAttachments)) {
    return [];
  }

  return rawAttachments
    .slice(0, MAX_FILES)
    .map((attachment) => {
      const filename = sanitizeText(attachment?.filename).slice(0, 255) || "archivo.jpg";
      const mimeType = sanitizeText(attachment?.mimeType).toLowerCase();
      const size = Number.isFinite(attachment?.size) ? Math.trunc(attachment.size) : 0;
      const data = typeof attachment?.data === "string" ? attachment.data : "";

      return {
        filename,
        mimeType,
        size,
        data,
      };
    })
    .filter(Boolean);
}

function validateSubmission({ name, email, message, attachments }) {
  if (!name) {
    return "El nombre es obligatorio.";
  }

  if (!email || !isValidEmail(email)) {
    return "Ingresa un correo valido.";
  }

  if (!message) {
    return "El mensaje es obligatorio.";
  }

  if (attachments.length > MAX_FILES) {
    return `Puedes adjuntar un maximo de ${MAX_FILES} imagenes.`;
  }

  for (const attachment of attachments) {
    if (!attachment.filename || !attachment.data) {
      return "Cada adjunto debe incluir archivo y contenido.";
    }

    if (!ALLOWED_TYPES.includes(attachment.mimeType)) {
      return "Solo se permiten archivos JPG, JPEG o PNG.";
    }

    if (attachment.size <= 0 || attachment.size > MAX_FILE_SIZE_BYTES) {
      return "Cada imagen debe pesar 500 KB o menos.";
    }

    if (!/\.(jpg|jpeg|png)$/i.test(attachment.filename)) {
      return "Los nombres de archivo deben incluir la extension jpg, jpeg o png.";
    }
  }

  for (const attachment of attachments) {
    const buffer = Buffer.from(attachment.data, "base64");
    if (!Number.isFinite(buffer.length) || buffer.length > MAX_FILE_SIZE_BYTES) {
      return "Cada imagen debe pesar 500 KB o menos.";
    }
  }

  return null;
}

async function sendWithMailgun({ name, email, topic, message, attachments }) {
  const apiKey = process.env.MAILGUN_API_KEY;
  const domain = process.env.MAILGUN_DOMAIN;
  const recipient = process.env.MAILGUN_RECIPIENT;
  const fromEmail = process.env.MAILGUN_FROM_EMAIL || `Ritual Cafe <postmaster@${domain}>`;

  if (!apiKey || !domain || !recipient) {
    return {
      ok: false,
      statusCode: 500,
      message: "Variables de entorno de Mailgun no configuradas.",
    };
  }

  const bodyText = [
    `Nombre: ${name}`,
    `Correo: ${email}`,
    `Tipo: ${topic}`,
    `Mensaje:`,
    message,
  ].join("\n\n");

  const formData = new FormData();
  formData.append("from", fromEmail);
  formData.append("to", recipient);
  formData.append("subject", `Contacto Ritual Cafe — ${topic || "Mensaje recibido"}`);
  formData.append("text", bodyText);
  formData.append("h:Reply-To", email);

  for (const attachment of attachments) {
    const buffer = Buffer.from(attachment.data, "base64");
    const blob = new Blob([buffer], { type: attachment.mimeType });
    formData.append("attachment", blob, attachment.filename);
  }

  const response = await fetch(`${MAILGUN_API_BASE_URL}/${domain}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`api:${apiKey}`).toString("base64")}`,
    },
    body: formData,
  });

  if (!response.ok) {
    const errorText = await response.text();
    return {
      ok: false,
      statusCode: response.status,
      message: `Mailgun devolvio error: ${errorText || response.statusText}`,
    };
  }

  return {
    ok: true,
    statusCode: 200,
    message: "Mensaje enviado correctamente.",
  };
}

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: headers(),
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        Allow: "POST, OPTIONS",
        ...headers(),
      },
      body: JSON.stringify({ ok: false, message: "Method not allowed" }),
    };
  }

  let payload;

  try {
    payload = parseJsonBody(event);
  } catch (error) {
    return badRequest("No se pudo leer el cuerpo de la solicitud.");
  }

  const name = sanitizeText(payload?.name);
  const email = sanitizeText(payload?.email);
  const topic = sanitizeText(payload?.topic);
  const message = sanitizeText(payload?.message);
  const attachments = normalizeAttachments(payload?.attachments);

  const validationError = validateSubmission({
    name,
    email,
    message,
    attachments,
  });

  if (validationError) {
    return badRequest(validationError);
  }

  const result = await sendWithMailgun({
    name,
    email,
    topic: topic || "Mensaje de contacto",
    message,
    attachments,
  });

  return {
    statusCode: result.statusCode,
    headers: headers(),
    body: JSON.stringify({
      ok: result.ok,
      message: result.message,
    }),
  };
}
