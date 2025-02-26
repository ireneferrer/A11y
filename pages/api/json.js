export default async function handler(req, res) {
    try {
        const response = await fetch("https://api.jsonbin.io/v3/b/67bf283bad19ca34f812c450");
        if (!response.ok) {
            throw new Error(`Error en la carga: ${response.status}`);
        }
        const data = await response.json();
        res.status(200).json(data.record);
    } catch (error) {
        console.error("❌ Error en la API:", error);
        res.status(500).json({ error: "No se pudo obtener el JSON" });
    }
}
