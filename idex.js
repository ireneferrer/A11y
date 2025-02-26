import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());

app.get("/json", async (req, res) => {
    try {
        const response = await fetch("https://api.jsonbin.io/v3/b/67bf283bad19ca34f812c450");
        if (!response.ok) {
            throw new Error(`Error al obtener JSON: ${response.status}`);
        }
        const data = await response.json();
        res.json(data.record);
    } catch (error) {
        console.error("❌ Error en la API:", error);
        res.status(500).json({ error: "No se pudo obtener el JSON" });
    }
});

export default app;

