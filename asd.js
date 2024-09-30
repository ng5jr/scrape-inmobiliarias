const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000; // Cambia el puerto si lo necesitas

const URL =
  "https://www.joanarodriguez.com.ar/propiedades.php?tipo_operacion=Venta&tipo_propiedad=Departamentos&submit=";

app.get("/scrape-properties", async (req, res) => {
  try {
    const { data } = await axios.get(URL);
    res.json({ html: data }); // Devolver el HTML de la página
  } catch (error) {
    res.status(500).json({ error: "Error al realizar el scraping" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor proxy corriendo en http://localhost:${PORT}`);
});
