const { palabraSinAcentos } = require("../util");

module.exports = function veterinariosHandler(veterinarios) {
    return {
        get: (data, callback) => {
            console.log("handler veterinarios", { data });
            if (typeof data.indice !== "undefined") {
                if (veterinarios[data.indice]) {
                    return callback(200, veterinarios[data.indice]);
                }
                return callback(404, {
                    mensaje: `veterinario con indice ${data.indice} no encontrado`,
                });
            }
            if (data.query && (data.query.nombre ||
                    data.query && typeof data.query.apellido ||
                    data.query && typeof data.query.documentos)) {
                const llavesQuery = Object.keys(data.query);
                let respuestaVeterinarios = [...veterinarios];
                respuestaVeterinarios = respuestaVeterinarios.filter(
                    (_veterinario) => {
                        let resultados = false;
                        for (const llave of llavesQuery) {
                            const busqueda = palabraSinAcentos(data.query[llave]);
                            const expresionRegular = new RegExp(busqueda, "ig");
                            if (_veterinario && _veterinario[llave]) {
                                const campoVeterinarioSinAcento = palabraSinAcentos(_veterinario[llave]);
                                resultados = _veterinario[llave].match(expresionRegular);
                            }

                            if (resultados) {
                                break;
                            }
                        }

                        return resultados;
                    });

                return callback(200, respuestaVeterinarios);
            }
            callback(200, veterinarios);
        },
        post: (data, callback) => {
            veterinarios.push(data.payload);
            callback(201, data.payload);

        },
        put: (data, callback) => {
            if (typeof data.indice !== "undefined") {
                if (veterinarios[data.indice]) {
                    veterinarios[data.indice] = data.payload;
                    return callback(200, veterinarios[data.indice]);
                }
                return callback(404, {
                    mensaje: `veterinarios con indice ${data.indice} no encontrado`,
                });
            }
            callback(404, { mensaje: "Indice No Enviado" });
        },
        delete: (data, callback) => {
            if (typeof data.indice !== "undefined") {
                if (veterinarios[data.indice]) {
                    veterinarios = veterinarios.filter(
                        (_veterinario, indice) => indice != data.indice
                    );
                    return callback(204, { mensaje: 'elemento con indice ${data.indice} elimimado' });
                }
                return callback(404, {
                    mensaje: `veterinarios con indice ${data.indice} no encontrado`,
                });
            }
            callback(404, { mensaje: "Indice No Enviado" });
        },
    };
};