//const API_URL = "https://veterinaria-backend-pink.vercel.app/";
const API_URL = "http://localhost:5000";

export const listarEntidad = async({ entidad = "mascotas", search = "", columnas = [] }) => {

    try {
        let url = `${API_URL} / ${entidad}`;
        if (search.length > 0 && columnas.length > 0) {
            let queryString = "?";
            for (let columna of columnas) {
                queryString += `${columna} =${search}&`;
            }
            url += queryString;
        }
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.log({ error });
    }
};
export const crearEditarEntidad = async({
    entidad = "mascotas",
    objeto = {},
    method = 'POST',
    idObjeto = null,
}) => {
    try {
        let url = null;
        if (method === "PUT" && idObjeto || idObjeto === 0) {
            url = `${API_URL} / ${entidad} / ${idObjeto}`;
        } else if (method === "POST") {
            url = `${API_URL} / ${entidad}`;
        }
        if (!url) {
            throw new Error('No cumple criterios de envio');
        }
        const respuesta = await fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(objeto),
            mode: "cors",
        });
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.log({ error });
    }


};
export const eliminarEntidad = async({ entidad = "mascotas", idObjeto = null, }) => {

    try {
        if (idObjeto || idObjeto === 0) {
            const respuesta = await fetch(`${API_URL} / ${entidad}/${idObjeto}`, {
                method: "DELETE"
            });
            const datos = await respuesta.json();
            return datos;
        }

        throw new Error('idObjeto no puede estar vacio');
    } catch (error) {
        console.log({ error });
    }
};
export const obtenerUno = async({ entidad = "mascotas", idObjeto = null }) => {

    try {
        const respuesta = await fetch(`${API_URL} / ${entidad}/${idObjeto}`);
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.log({ error });
    }
};