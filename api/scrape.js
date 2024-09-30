const axios = require("axios");
const cheerio = require("cheerio"); // Importar Cheerio

const URL1 =
  "https://www.joanarodriguez.com.ar/propiedades.php?tipo_operacion=Venta&tipo_propiedad=Departamentos&submit=";
const URL2 =
  "https://mullerpropiedades.com.ar/?s=&qodef-property-search=yes&qodef-search-city=43&qodef-search-status=78";
const URL3 =
  "https://www.inmobiliariarominasasson.com.ar/propiedades.php?tipo_operacion=Venta&tipo_propiedad=Departamentos&submit=";
const URL4 =
  "https://www.inmobiliariarominasasson.com.ar/propiedades.php?tipo_operacion=Venta&tipo_propiedad=Casas&submit=";
const URL5 =
  "https://www.remax.com.ar/listings/buy?page=0&pageSize=1000&sort=-createdAt&in:operationId=1&in:eStageId=0,1,2,3,4&in:typeId=9,10,11,1,2,3,4,5,6,7,8&locations=in:::122@%3Cb%3ETandil%3C%2Fb%3E::::&filterCount=1&viewMode=listViewMode";
const URL6 =
  "https://www.degalvagnidiaz.com.ar/propiedades.php?tipo_operacion=Venta&tipo_propiedad=Departamentos&dormitorios=&submit=";
const URL7 =
  "https://www.degalvagnidiaz.com.ar/propiedades.php?tipo_operacion=Venta&tipo_propiedad=Casas";
const URL8 =
  "https://www.inmobiliariaetcheber.com/propiedades.php?tipo_operacion=1&tipo_propiedad=2&dormitorios=&hasta=&moneda=&submit=";
const URL9 =
  "https://www.inmobiliariaetcheber.com/propiedades.php?tipo_operacion=1&tipo_propiedad=1&dormitorios=&hasta=&moneda=&submit=";
const URL10 =
  "https://www.favrepropiedades.com.ar/propiedades.php?tipo_operacion=Venta&tipo_propiedad=Departamentos&submit=";
const URL11 =
  "https://www.favrepropiedades.com.ar/propiedades.php?tipo_operacion=Venta&tipo_propiedad=Casas&submit=";
const URL12 =
  "https://www.luciafrolik.com.ar/propiedades.php?tipo_operacion=Venta&tipo_propiedad=Departamentos&submit=";
const URL13 =
  "https://www.luciafrolik.com.ar/propiedades.php?tipo_operacion=Venta&tipo_propiedad=Casas&submit=";

export default async function handler(req, res) {
  function extractNumber(str) {
    return parseFloat(str.replace(/[^0-9.-]+/g, "")) || 0; // Devuelve 0 si no se encuentra un número
  }
  try {
    const properties = [];

    // Primer bloque de código con su propio try-catch
    try {
      const { data } = await axios.get(URL1);
      const $ = cheerio.load(data);

      $(".product-col").each((index, element) => {
        const title = $(element).find(".direccion-gral").text().trim();
        const price = extractNumber(
          $(element).find(".precio.pull-left").text().trim()
        );
        const link =
          "https://www.joanarodriguez.com.ar/" +
          $(element).find("a.img-mask").attr("href");

        const backgroundImage = $(element).find(".img-mask").attr("style");
        let imageUrl = "";
        const regex = /url\('([^']+)'\)/;
        const match = backgroundImage ? backgroundImage.match(regex) : null;

        if (match) {
          imageUrl = match[1];
        }

        properties.push({ title, price, link, image: imageUrl });
      });
    } catch (error) {
      console.error("Error al procesar URL1:", error);
      // Puedes decidir cómo manejar el error aquí (por ejemplo, continuar, salir, etc.)
    }

    // Segundo bloque de código con su propio try-catch
    try {
      const { data } = await axios.get(URL2);
      const $ = cheerio.load(data);

      $("article").each((index, element) => {
        const title = $(element).find("a").text().trim();
        const price = extractNumber(
          $(element).find(".qodef-property-price").text().trim()
        );
        const link = $(element).find("a").attr("href");
        const imageUrl = $(element).find("img").attr("src");
        properties.push({ title, price, link, image: imageUrl });
      });
    } catch (error) {
      console.error("Error al procesar URL2:", error);
      // Manejo del error para el segundo bloque
    }

    try {
      const { data } = await axios.get(URL3);
      const $ = cheerio.load(data);

      $(".product-col").each((index, element) => {
        const title = $(element).find(".direccion-gral").text().trim();
        const price = extractNumber(
          $(element).find(".precio.pull-left").text().trim()
        );
        const link =
          "https://www.inmobiliariarominasasson.com.ar/" +
          $(element).find("a.img-mask").attr("href");

        const backgroundImage = $(element).find(".img-mask").attr("style");
        let imageUrl = "";
        const regex = /url\('([^']+)'\)/;
        const match = backgroundImage ? backgroundImage.match(regex) : null;

        if (match) {
          imageUrl = match[1];
        }

        properties.push({ title, price, link, image: imageUrl });
      });
    } catch (error) {
      console.error("Error al procesar URL1:", error);
      // Puedes decidir cómo manejar el error aquí (por ejemplo, continuar, salir, etc.)
    }
    try {
      const { data } = await axios.get(URL4);
      const $ = cheerio.load(data);

      $(".product-col").each((index, element) => {
        const title = $(element).find(".direccion-gral").text().trim();
        const price = extractNumber(
          $(element).find(".precio.pull-left").text().trim()
        );
        const link =
          "https://www.inmobiliariarominasasson.com.ar/" +
          $(element).find("a.img-mask").attr("href");

        const backgroundImage = $(element).find(".img-mask").attr("style");
        let imageUrl = "";
        const regex = /url\('([^']+)'\)/;
        const match = backgroundImage ? backgroundImage.match(regex) : null;

        if (match) {
          imageUrl = match[1];
        }

        properties.push({ title, price, link, image: imageUrl });
      });
    } catch (error) {
      console.error("Error al procesar URL1:", error);
      // Puedes decidir cómo manejar el error aquí (por ejemplo, continuar, salir, etc.)
    }
    try {
      const { data } = await axios.get(URL5);
      const $ = cheerio.load(data);

      $(".card-remax").each((index, element) => {
        const title = $(element).find(".card__address").text().trim();
        const price = extractNumber(
          $(element).find(".card__price").text().trim()
        );
        const link =
          "https://www.remax.com.ar/" + $(element).find("a").attr("href");

        // const imageUrl = element
        //   .querySelectorAll("swiper .swiper-lazy")
        //   .attr("src");
        const imageUrl =
          "https://d1acdg20u0pmxj.cloudfront.net/ar/assets/media/svg/layout/logo-remax-argentina.svg";

        properties.push({ title, price, link, image: imageUrl });
      });
    } catch (error) {
      console.error("Error al procesar URL1:", error);
      // Puedes decidir cómo manejar el error aquí (por ejemplo, continuar, salir, etc.)
    }
    try {
      const { data } = await axios.get(URL6);
      const $ = cheerio.load(data);

      $(".product-col").each((index, element) => {
        const title = $(element).find(".negro").text().trim();
        const price = extractNumber(
          $(element).find(".pull-left").text().trim()
        );
        const link =
          "https://www.degalvagnidiaz.com.ar/" +
          $(element).find("a.img-mask").attr("href");

        const backgroundImage = $(element).find(".img-mask").attr("style");
        let imageUrl = "";
        const regex = /url\('([^']+)'\)/;
        const match = backgroundImage ? backgroundImage.match(regex) : null;

        if (match) {
          imageUrl = match[1];
        }

        properties.push({ title, price, link, image: imageUrl });
      });
    } catch (error) {
      console.error("Error al procesar URL1:", error);
      // Puedes decidir cómo manejar el error aquí (por ejemplo, continuar, salir, etc.)
    }
    try {
      const { data } = await axios.get(URL7);
      const $ = cheerio.load(data);

      $(".product-col").each((index, element) => {
        const title = $(element).find(".negro").text().trim();
        const price = extractNumber(
          $(element).find(".pull-left").text().trim()
        );
        const link =
          "https://www.degalvagnidiaz.com.ar/" +
          $(element).find("a.img-mask").attr("href");

        const backgroundImage = $(element).find(".img-mask").attr("style");
        let imageUrl = "";
        const regex = /url\('([^']+)'\)/;
        const match = backgroundImage ? backgroundImage.match(regex) : null;

        if (match) {
          imageUrl = match[1];
        }

        properties.push({ title, price, link, image: imageUrl });
      });
    } catch (error) {
      console.error("Error al procesar URL1:", error);
      // Puedes decidir cómo manejar el error aquí (por ejemplo, continuar, salir, etc.)
    }
    try {
      const { data } = await axios.get(URL8);
      const $ = cheerio.load(data);

      $(".product-col").each((index, element) => {
        const title = $(element).find(".azul").text().trim();
        const price = extractNumber(
          $(element).find(".price-new").text().trim()
        );
        const link =
          "https://www.inmobiliariaetcheber.com/" +
          $(element).find("a.img-mask").attr("href");

        const imgMaskElement = $(".img-mask");

        // Obtener el valor del atributo "style"
        const styleAttributeValue = imgMaskElement.attr("style");

        // Extraer la URL de la cadena de estilo
        const urlRegex = /url\((.*?)\)/;
        const imageUrlMatch = styleAttributeValue.match(urlRegex);
        const imageUrl = imageUrlMatch
          ? "https://www.inmobiliariaetcheber.com/" + imageUrlMatch[1]
          : null;

        properties.push({ title, price, link, image: imageUrl });
      });
    } catch (error) {
      s;
      console.error("Error al procesar URL1:", error);
      // Puedes decidir cómo manejar el error aquí (por ejemplo, continuar, salir, etc.)
    }
    try {
      const { data } = await axios.get(URL9);
      const $ = cheerio.load(data);

      $(".product-col").each((index, element) => {
        const title = $(element).find(".azul").text().trim();
        const price = extractNumber(
          $(element).find(".price-new").text().trim()
        );
        const link =
          "https://www.inmobiliariaetcheber.com/" +
          $(element).find("a.img-mask").attr("href");

        const imgMaskElement = $(".img-mask");

        // Obtener el valor del atributo "style"
        const styleAttributeValue = imgMaskElement.attr("style");

        // Extraer la URL de la cadena de estilo
        const urlRegex = /url\((.*?)\)/;
        const imageUrlMatch = styleAttributeValue.match(urlRegex);
        const imageUrl = imageUrlMatch
          ? "https://www.inmobiliariaetcheber.com/" + imageUrlMatch[1]
          : null;

        properties.push({ title, price, link, image: imageUrl });
      });
    } catch (error) {
      console.error("Error al procesar URL1:", error);
      // Puedes decidir cómo manejar el error aquí (por ejemplo, continuar, salir, etc.)
    }
    try {
      const { data } = await axios.get(URL10);
      const $ = cheerio.load(data);

      $(".product-col").each((index, element) => {
        const title = $(element).find(".negro").text().trim();
        const price = extractNumber(
          $(element).find(".pull-left").text().trim()
        );
        const link =
          "https://www.favrepropiedades.com.ar/" +
          $(element).find("a.img-mask").attr("href");

        const backgroundImage = $(element).find(".img-mask").attr("style");
        let imageUrl = "";
        const regex = /url\('([^']+)'\)/;
        const match = backgroundImage ? backgroundImage.match(regex) : null;

        if (match) {
          imageUrl = match[1];
        }

        properties.push({ title, price, link, image: imageUrl });
      });
    } catch (error) {
      console.error("Error al procesar URL1:", error);
      // Puedes decidir cómo manejar el error aquí (por ejemplo, continuar, salir, etc.)
    }
    try {
      const { data } = await axios.get(URL11);
      const $ = cheerio.load(data);

      $(".product-col").each((index, element) => {
        const title = $(element).find(".negro").text().trim();
        const price = extractNumber(
          $(element).find(".pull-left").text().trim()
        );
        const link =
          "https://www.favrepropiedades.com.ar/" +
          $(element).find("a.img-mask").attr("href");

        const backgroundImage = $(element).find(".img-mask").attr("style");
        let imageUrl = "";
        const regex = /url\('([^']+)'\)/;
        const match = backgroundImage ? backgroundImage.match(regex) : null;

        if (match) {
          imageUrl = match[1];
        }

        properties.push({ title, price, link, image: imageUrl });
      });
    } catch (error) {
      console.error("Error al procesar URL1:", error);
      // Puedes decidir cómo manejar el error aquí (por ejemplo, continuar, salir, etc.)
    }
    try {
      const { data } = await axios.get(URL12);
      const $ = cheerio.load(data);

      $(".product-col").each((index, element) => {
        const title = $(element).find(".direccion-gral").text().trim();
        const price = extractNumber(
          $(element).find(".pull-left").text().trim()
        );
        const link =
          "https://www.luciafrolik.com.ar/" +
          $(element).find("a.img-mask").attr("href");

        const backgroundImage = $(element).find(".img-mask").attr("style");
        let imageUrl = "";
        const regex = /url\('([^']+)'\)/;
        const match = backgroundImage ? backgroundImage.match(regex) : null;

        if (match) {
          imageUrl = match[1];
        }

        properties.push({ title, price, link, image: imageUrl });
      });
    } catch (error) {
      console.error("Error al procesar URL1:", error);
      // Puedes decidir cómo manejar el error aquí (por ejemplo, continuar, salir, etc.)
    }
    try {
      const { data } = await axios.get(URL13);
      const $ = cheerio.load(data);

      $(".product-col").each((index, element) => {
        const title = $(element).find(".direccion-gral").text().trim();
        const price = extractNumber(
          $(element).find(".pull-left").text().trim()
        );
        const link =
          "https://www.luciafrolik.com.ar/" +
          $(element).find("a.img-mask").attr("href");

        const backgroundImage = $(element).find(".img-mask").attr("style");
        let imageUrl = "";
        const regex = /url\('([^']+)'\)/;
        const match = backgroundImage ? backgroundImage.match(regex) : null;

        if (match) {
          imageUrl = match[1];
        }

        properties.push({ title, price, link, image: imageUrl });
      });
    } catch (error) {
      console.error("Error al procesar URL1:", error);
      // Puedes decidir cómo manejar el error aquí (por ejemplo, continuar, salir, etc.)
    }

    // Enviar los datos combinados como respuesta

    res.json(properties);
  } catch (error) {
    console.error("Error en el scraping:", error.message || error);
    // Devolver un error JSON si falla el scraping
    res
      .status(500)
      .json({ error: "Error al realizar el scraping en el servidor" });
  }
}
