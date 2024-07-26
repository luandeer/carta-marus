"use server";
import { google } from "googleapis";

//OBTENER domicilio(GET) de los clientes del excel
export async function getTodosProductosMarus() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_CLIENT_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "bdProductosCartaMarus!A2:J", // Rango de la primera columna de la segunda hoja (puedes ajustarlo según tus necesidades)
    });

    const rows = response.data.values || [];
    // Definir manualmente los títulos de columna
    const titles = [
      "id",
      "imagenes",
      "categoria",
      "nombre",
      "descripcion",
      "precio",
      "descuento",
      "nuevoProducto",
      "disponibilidad",
      "frase",
    ];
    // Formatear los datos
    const dataObjeto = rows.map((row) => {
      const obj: any = {};
      row.forEach((field, idx) => {
        // Manejar campo productos para parsearlo como JSON si es necesario
        if (titles[idx] === "imagenes") {
          obj[titles[idx]] = field ? JSON.parse(field) : [];
        } else if (titles[idx] === "disponibilidad") {
          obj[titles[idx]] = field.toLowerCase() === "si";
        } else {
          obj[titles[idx]] = field || "";
        }
      });
      return obj;
    });

    return dataObjeto;
  } catch (error) {
    console.error("Error al obtener datos:", error);
    throw error; // Puedes manejar el error según tus necesidades
  }
}
