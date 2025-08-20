export type PredictInput = {
    edad: string;
    sexo: string;
    region: string;
};

function parseSSEorJSON(text: string): any {
    // 1) Si es JSON directo
    const trimmed = text.trim();
    if (trimmed.startsWith("{") || trimmed.startsWith("[")) {
        return JSON.parse(trimmed);
    }
    const lines = trimmed.split(/\r?\n/);
    for (let i = lines.length - 1; i >= 0; i--) {
        const line = lines[i].trim();
        if (line.startsWith("data:")) {
            const payload = line.replace(/^data:\s*/, "");
            try {
                return JSON.parse(payload);
            } catch {
            }
        }
    }
    throw new Error("No se pudo interpretar la respuesta del servidor");
}

export async function predictProbabilidad(
    { edad, sexo, region }: PredictInput,
    timeoutMs = 20000
): Promise<string> {
    const baseUrl = "https://lonelynode-manejo.hf.space/gradio_api/call/predict";
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);

    try {
        const result = localStorage.getItem("trivia-score");
        const score = Number(result) || 0;
        const res = await fetch(
            baseUrl + "?Key=Content-Type&Value=application/json",
            {
                method: "POST",
                signal: controller.signal,
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    data: [score, edad, sexo, region],
                }),
            }
        );

        if (!res.ok) {
            const text = await res.text().catch(() => "");
            throw new Error(`HTTP ${res.status} - ${text || res.statusText}`);
        }

        const postJson = await res.json().catch(async () => {
            const t = await res.text();
            return JSON.parse(t);
        });

        const eventId = postJson?.event_id;
        if (!eventId) throw new Error("No se recibió event_id");
        const res2 = await fetch(`${baseUrl}/${eventId}`, {
            method: "GET",
            signal: controller.signal,
            headers: { Accept: "application/json, text/event-stream, text/plain" },
        });

        if (!res2.ok) {
            const text = await res2.text().catch(() => "");
            throw new Error(`HTTP ${res2.status} - ${text || res2.statusText}`);
        }

        const raw = await res2.text();
        const parsed = parseSSEorJSON(raw);
        const mensaje = Array.isArray(parsed) ? parsed[0] : String(parsed);

        if (typeof mensaje !== "string") {
            throw new Error("Respuesta inválida del modelo");
        }

        return mensaje;
    } catch (err: any) {
        throw new Error(err?.message || "Fallo al consultar el modelo");
    } finally {
        clearTimeout(timeout);
    }
}