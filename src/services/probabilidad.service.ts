export type PredictInput = {
    edad: string;
    sexo: string;
    region: string;
};

export async function predictProbabilidad(
    { edad, sexo, region }: PredictInput,
    timeoutMs = 10000
): Promise<number> {
    const url = "https://lonelynode-manejo.hf.space/gradio_api/call/predict";
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);

    try {
        const result = localStorage.getItem("trivia-score");

        const score = Number(result) || 0.5;
        const res = await fetch(url, {
            method: "POST",
            signal: controller.signal,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                data: [score, edad, sexo, region], // hardcodeado, lele integracion
            }),
        });

        if (!res.ok) {
            const text = await res.text().catch(() => "");
            throw new Error(`HTTP ${res.status} - ${text || res.statusText}`);
        }

        const json = await res.json();


        const val = Array.isArray(json?.data) ? json.data[0] : json?.data;
        const num = typeof val === "number" ? val : Number.parseFloat(String(val));

        if (Number.isNaN(num)) {
            throw new Error("Respuesta inválida del modelo");
        }


        return Math.max(0, Math.min(100, Math.round(num)));
    } catch (err: any) {

        throw new Error(err?.message || "Fallo al consultar el modelo");
    } finally {
        clearTimeout(timeout);
    }
}