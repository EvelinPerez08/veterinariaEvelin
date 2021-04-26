module.exports = function consultasHandler({ consultas, veterinarios, mascotas }) {
    return {
        get: (data, callback) => {
                console.log("handler consultas", { data });
                if (typeof data.indice !== "undefined") {
                    if (consultas[data.indice]) {
                        return callback(200, consultas[data.indice]);
                    }
                    return callback(404, {
                        mensaje: `consulta con indice ${data.indice} no encontrado`,
                    });
                }
                let _consultas = [...consultas];
                if (data.query && (data.query.mascota ||
                        data.query && typeof data.query.veterinario ||
                        data.query && typeof data.query.historial ||
                        data.query && typeof data.query.diagnostico)) {
                    const llavesQuery = Object.keys(data.query);
                    _consultas = _consultas.filter(
                        (_consulta) => {
                            let resultados = false;
                            for (const llave of llavesQuery) {
                                if (llave === "fechaEdicion" || llave === "fechaCreacion") {
                                    continue;
                                }


                                if (llave === "diagnostico" || llave === "historial") {
                                    const expresionRegular = new RegExp(data.query[llave], "ig");
                                    resultados = _consulta[llave].match(expresionRegular);
                                }
                                if (llave === "veterinario" || llave === "mascota") {
                                    resultados = _consulta[llave] = data.query[llave];
                                }
                                if (resultados) {
                                    break;
                                }
                                return resultados;
                            }
                        });
                }
            }
            //return callback(200, _consultas);
        _consultas = _consultas.map((consulta) => ({
            ...consulta,
            mascota: {...mascotas[consulta.mascota], id: consulta.mascota },
            veterinario: {
                ...veterinarios[consulta.veterinario],
                id: consulta.veterinario,
            },
        }));
        callback(200, _consultas);
    },
    post: (data, callback) => {
            let Nuevaconsulta = data.payload;
            Nuevaconsulta.fechaCreacion = new Date();
            Nuevaconsulta.fechaEdicion = null;
            consultas = [...consultas, Nuevaconsulta]
            callback(201, Nuevaconsulta);

        },
        put: (data, callback) => {
            if (typeof data.indice !== "undefined") {
                if (consultas[data.indice]) {
                    const { fechaCreacion } = consultas[data.indice];
                    consultas[data.indice] = {...data.payload, fechaCreacion, fechaEdicion: new Date() };
                    return callback(200, consultas[data.indice]);
                }
                return callback(404, {
                    mensaje: `consultas con indice ${data.indice} no encontrado`,
                });
            }
            callback(404, { mensaje: "Indice No Enviado" });
        },
        delete: (data, callback) => {
            if (typeof data.indice !== "undefined") {
                if (consultas[data.indice]) {
                    consultas = consultas.filter(
                        (_consulta, indice) => indice != data.indice
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