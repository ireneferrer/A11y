const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/json", async (req, res) => {
    try {
        const response = await fetch("https://api.jsonbin.io/v3/b/67bf283bad19ca34f812c450");
        const data = await response.json();
        res.json(data.record);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los datos" });
    }
});

app.listen(3000, () => console.log("Servidor en Vercel activo"));
