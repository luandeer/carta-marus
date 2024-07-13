"use server"
import { google } from "googleapis";
import { v4 as uuidv4 } from 'uuid';

//OBTENER domicilio(GET) de los clientes del excel
export async function getProductosMarus(categoriaFiltro:string) {
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
            range: 'bdProductosCartaMarus!A2:J', // Rango de la primera columna de la segunda hoja (puedes ajustarlo según tus necesidades)
        });

        const rows = response.data.values || [];
        // Definir manualmente los títulos de columna
        const titles = ["id", "imagenes", "categoria","nombre", "descripcion", "precio", "descuento", "nuevoProducto","disponibilidad","frase"];
        // Formatear los datos
        const dataObjeto = rows.map(row => {
            const obj: any = {};
            row.forEach((field, idx) => {
                // Manejar campo productos para parsearlo como JSON si es necesario
                if (titles[idx] === 'imagenes') {
                    obj[titles[idx]] = field ? JSON.parse(field) : [];
                } else if (titles[idx] === 'disponibilidad') {
                    obj[titles[idx]] = field.toLowerCase() === 'si';
                } else {
                    obj[titles[idx]] = field || '';
                }
            });
            return obj;
        });
         // Filtrar los datos por la categoría especificada
         const productosFiltrados = dataObjeto.filter(producto => producto.categoria === categoriaFiltro && producto.disponibilidad === true);


         return productosFiltrados;
    } catch (error) {
        console.error("Error al obtener datos:", error);
        throw error; // Puedes manejar el error según tus necesidades
    }
}

// OBTENER PRODUCTO(GET) POR ID
export async function getProductoById(id: string) {
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
            range: 'bdProductosCartaMarus!A2:J', // Rango de la primera columna de la segunda hoja (puedes ajustarlo según tus necesidades)
        });

        const values = response.data.values || [];
        if (!values) {
            return null; // Si no se encontraron valores, retorna null o lanza un error según tu lógica
        }

        // Filtrar los datos por ID
        const orden = values.find((row) => row[0] === id);

        if (!orden) {
            return null; // Si no se encontró la orden con ese ID, retorna null o lanza un error según tu lógica
        }

        // Definir títulos de columna
        const titles = ["id", "imagenes", "categoria","nombre", "descripcion", "precio", "descuento", "nuevoProducto","disponibilidad","frase"];

        // Formatear la fila encontrada
        const formattedItem: any = {};
        titles.forEach((title, idx) => {
            // Manejar campo productos para parsearlo como JSON si es necesario
            if (title === 'imagenes') {
                formattedItem[title] = orden[idx] ? JSON.parse(orden[idx]) : []; // Parsear solo si hay valor
            } else {
                formattedItem[title] = orden[idx] || ''; // Asignar valor o cadena vacía si es nulo o indefinido
            }
        });

        return formattedItem;
    } catch (error) {
        console.error("Error al obtener datos por id de mesa:", error);
        throw error; // Puedes manejar el error según tus necesidades
    }
}
