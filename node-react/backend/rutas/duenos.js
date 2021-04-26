const { palabraSinAcentos } = require("../util");

module.exports = function duenosHandler(duenos) {
    return {
        get: (data, callback) => {
            console.log("handler duenos", { data });
            if (typeof data.indice !== "undefined") {
                if (duenos[data.indice]) {
                    return callback(200, duenos[data.indice]);
                }
                return callback(404, {
                    mensaje: `dueno con indice ${data.indice} no encontrado`,
                });
            }
            if (data.query && (data.query.nombre ||
                    data.query && typeof data.query.apellido ||
                    data.query && typeof data.query.documento)) {
                const llavesQuery = Object.keys(data.query);
                let respuestaDuenos = [...duenos];
                for (const llave of llavesQuery) {
                    respuestaDuenos = respuestaDuenos.filter(
                        (_dueno) => {
                            let resultados = false;
                            for (const llave of llavesQuery) {
                                const busqueda = palabraSinAcentos(data.query[llave]);
                                const expresionRegular = new RegExp(busqueda, "ig");
                                const campoVeterinarioSinAcento = palabraSinAcentos(_dueno[llave]);

                                if (resultados) {
                                    break;
                                }
                            }
                            return resultados;
                        });
                }
                return callback(200, respuestaDuenos);
            }
            callback(200, duenos);
        },
        post: (data, callback) => {
            duenos.push(data.payload);
            callback(201, data.payload);

        },
        put: (data, callback) => {
            if (typeof data.indice !== "undefined") {
                if (duenos[data.indice]) {
                    duenos[data.indice] = data.payload;
                    return callback(200, duenos[data.indice]);
                }
                return callback(404, {
                    mensaje: `duenos con indice ${data.indice} no encontrado`,
                });
            }
            callback(404, { mensaje: "Indice No Enviado" });
        },
        delete: (data, callback) => {
            if (typeof data.indice !== "undefined") {
                if (duenos[data.indice]) {
                    duenos = duenos.filter(
                        (_dueno, indice) => indice != data.indice
                    );
                    return callback(204, { mensaje: 'elemento con indice ${data.indice} elimimado' });
                }
                return callback(404, {
                    mensaje: `duenos con indice ${data.indice} no encontrado`,
                });
            }
            callback(404, { mensaje: "Indice No Enviado" });
        },
    };
};