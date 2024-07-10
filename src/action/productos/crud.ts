"use server"
import { google } from "googleapis";
import { v4 as uuidv4 } from 'uuid';

//OBTENER domicilio(GET) de los clientes del excel
export async function getProductosMarus() {
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
            range: 'bdProductosCartaMarus!A2:F', // Rango de la primera columna de la segunda hoja (puedes ajustarlo según tus necesidades)
        });

        const rows = response.data.values || [];
        // Definir manualmente los títulos de columna
        const titles = ["id", "urlImage", "categoria","nombre", "descripcion", "precio", "descuento", "nuevoProducto",];
        // Formatear los datos
        const dataObjeto = rows.map(row => {
            const obj: any = {};
            row.forEach((field, idx) => {
                // Manejar campo productos para parsearlo como JSON si es necesario
                if (titles[idx] === 'productos') {
                    obj[titles[idx]] = field ? JSON.parse(field) : []; // Parsear solo si hay valor
                } else {
                    obj[titles[idx]] = field || ''; // Asignar valor o cadena vacía si es nulo o indefinido
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
