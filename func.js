import axios from "axios";
import * as cheerio from "cheerio";
const URL =
  "https://www.joanarodriguez.com.ar/propiedades.php?tipo_operacion=Venta&tipo_propiedad=Departamentos&submit="; // Cambia esto por la URL que quieres scrape

async function scrapeProperties() {
  console.log("Searching for properties");
  try {
    const { data } = await axios.get(URL);
    const $ = cheerio.load(data);
    const properties = [];

    // Cambia los selectores según la estructura del HTML de la página
    $(".product-col").each((index, element) => {
      const title = $(element).find(".direccion-gral").text().trim();
      const price = $(element).find(".precio.pull-left").text().trim();
      const link =
        "https://www.joanarodriguez.com.ar/" +
        $(element).find("a.img-mask").attr("href");

      properties.push({ title, price, link });
    });

    console.log("Nuevas propiedades encontradas:");
    properties.forEach((property) => {
      console.log(
        `Título: ${property.title}, Precio: ${property.price}, Enlace: ${property.link}`
      );
    });
  } catch (error) {
    console.error("Error al realizar el scraping:", error);
  }
}

document
  .getElementById("scrapeButton")
  .addEventListener("click", scrapeProperties());
