import { useMemo, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

type ContactStatus = "idle" | "success" | "error";

type ContactPayloadAttachment = {
  filename: string;
  mimeType: string;
  size: number;
  data: string;
};

type ContactPayload = {
  name: string;
  email: string;
  topic: string;
  message: string;
  attachments: ContactPayloadAttachment[];
};

type ContactResponse = {
  ok: boolean;
  message?: string;
};

const MAX_FILES = 5;
const MAX_FILE_SIZE_BYTES = 500 * 1024;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/jpg"];

const ALLOWED_TOPICS = [
  "Feedback",
  "Pregunta",
  "Reporte de error",
  "Solicitud de ayuda",
  "Otro",
];

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const value = typeof reader.result === "string" ? reader.result : "";
      const [_, base64] = value.split(",");
      resolve(base64 || "");
    };
    reader.onerror = () => reject(new Error("No se pudo leer el archivo"));
    reader.readAsDataURL(file);
  });
}

function isAllowedImage(file: File) {
  return ALLOWED_TYPES.includes(file.type);
}

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(ALLOWED_TOPICS[0]);
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const isSubmitDisabled = useMemo(() => {
    return isSending || !name.trim() || !email.trim() || !message.trim();
  }, [isSending, name, email, message]);

  function resetForm() {
    setName("");
    setEmail("");
    setTopic(ALLOWED_TOPICS[0]);
    setMessage("");
    setFiles([]);
    setStatusMessage("");
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(event.target.files ?? []);
    const invalidType = selected.find((file) => !isAllowedImage(file));
    const oversizedFile = selected.find((file) => file.size > MAX_FILE_SIZE_BYTES);

    if (selected.length > MAX_FILES) {
      setStatus("error");
      setStatusMessage(`Puedes adjuntar un máximo de ${MAX_FILES} imágenes.`);
      return;
    }

    if (invalidType) {
      setStatus("error");
      setStatusMessage("Solo se permiten imágenes JPG, JPEG o PNG.");
      return;
    }

    if (oversizedFile) {
      setStatus("error");
      setStatusMessage("Cada imagen debe pesar 500 KB o menos.");
      return;
    }

    setStatus("idle");
    setStatusMessage("");
    setFiles(selected);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSending(true);
    setStatus("idle");
    setStatusMessage("");

    const invalidType = files.find((file) => !isAllowedImage(file));
    if (invalidType) {
      setIsSending(false);
      setStatus("error");
      setStatusMessage("Solo se permiten imágenes JPG, JPEG o PNG.");
      return;
    }

    const oversizedFile = files.find((file) => file.size > MAX_FILE_SIZE_BYTES);
    if (oversizedFile) {
      setIsSending(false);
      setStatus("error");
      setStatusMessage("Cada imagen debe pesar 500 KB o menos.");
      return;
    }

    if (files.length > MAX_FILES) {
      setIsSending(false);
      setStatus("error");
      setStatusMessage(`Puedes adjuntar un máximo de ${MAX_FILES} imágenes.`);
      return;
    }

    const attachments = await Promise.all(
      files.map(async (file) => {
        const data = await fileToBase64(file);
        return {
          filename: file.name,
          mimeType: file.type || "image/jpeg",
          size: file.size,
          data,
        };
      }),
    );

    const payload: ContactPayload = {
      name: name.trim(),
      email: email.trim(),
      topic: topic.trim(),
      message: message.trim(),
      attachments,
    };

    try {
      const response = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const body = (await response.json()) as ContactResponse;
      if (!response.ok || !body.ok) {
        throw new Error(body.message ?? "No se pudo enviar el mensaje.");
      }

      setStatus("success");
      setStatusMessage("Gracias, te escribimos en cuanto podamos.");
      resetForm();
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Error de conexión. Intenta de nuevo en unos minutos.",
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-xl">
      <div className="bg-brand-sand border-3 border-ink shadow-hard p-6 md:p-8">
        <p className="inline-flex bg-brand-origin text-white border-2 border-ink px-4 py-2 font-label-bold text-label-bold uppercase mb-6">
          Contacto
        </p>
        <h1 className="font-h1 text-[40px] md:text-[56px] leading-none uppercase text-ink mb-4">
          Hablanos, te leemos
        </h1>
        <p className="font-body-lg text-body-lg text-ink max-w-2xl">
          Si tienes feedback, preguntas o mejoras para Ritual Café, envíanos un mensaje.
          También puedes compartir hasta {MAX_FILES} fotos JPG/PNG de {MAX_FILE_SIZE_BYTES / 1024} KB máximo cada una.
        </p>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block font-label-bold text-label-bold uppercase" htmlFor="name">
              Nombre
            </label>
            <input
              id="name"
              type="text"
              required
              maxLength={120}
              className="w-full border-2 border-ink bg-brand-white px-4 py-3 font-body-md"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div>
            <label className="mb-2 block font-label-bold text-label-bold uppercase" htmlFor="email">
              Correo
            </label>
            <input
              id="email"
              type="email"
              required
              maxLength={240}
              className="w-full border-2 border-ink bg-brand-white px-4 py-3 font-body-md"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div>
            <label className="mb-2 block font-label-bold text-label-bold uppercase" htmlFor="topic">
              Tipo de mensaje
            </label>
            <select
              id="topic"
              className="w-full border-2 border-ink bg-brand-white px-4 py-3 font-body-md"
              value={topic}
              onChange={(event) => setTopic(event.target.value)}
            >
              {ALLOWED_TOPICS.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block font-label-bold text-label-bold uppercase" htmlFor="message">
              Mensaje
            </label>
            <textarea
              id="message"
              required
              rows={6}
              maxLength={5000}
              className="w-full border-2 border-ink bg-brand-white px-4 py-3 font-body-md"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>

          <div>
            <label className="mb-2 block font-label-bold text-label-bold uppercase" htmlFor="attachments">
              Adjuntar imágenes (opcional)
            </label>
            <input
              id="attachments"
              type="file"
              accept="image/jpeg,image/png"
              multiple
              className="w-full border-2 border-ink bg-brand-white px-4 py-3 font-body-md"
              onChange={handleFileChange}
            />
            <p className="font-body-md text-body-md mt-2">
              Máximo {MAX_FILES} archivos. JPG/JPEG/PNG. {MAX_FILE_SIZE_BYTES / 1024} KB máximo por imagen.
            </p>
            {!!files.length && (
              <ul className="mt-2 text-body-md">
                {files.map((file) => (
                  <li key={file.name}>
                    {file.name} — {Math.round(file.size / 1024)} KB
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitDisabled}
            className={`border-2 border-ink px-6 py-3 font-label-bold text-label-bold uppercase shadow-hard transition-all ${
              isSubmitDisabled
                ? "bg-brand-sand text-black cursor-not-allowed opacity-60"
                : "bg-brand-roast text-white hover:shadow-hard-hover active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
            }`}
          >
            {isSending ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>

        {!!statusMessage && (
          <p
            role="status"
            className={`mt-6 font-label-bold text-label-bold uppercase ${
              status === "error" ? "text-error" : "text-brand-origin"
            }`}
          >
            {statusMessage}
          </p>
        )}
      </div>
    </section>
  );
}
