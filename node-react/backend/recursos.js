module.exports = {
    mascotas: [
        { tipo: "Perro", nombre: "Puka0", dueno: "Felix" },
        { tipo: "Perro", nombre: "Puka1", dueno: "Felix" },
        { tipo: "Perro", nombre: "Puka2", dueno: "Felix" },
        { tipo: "Perro", nombre: "Puka3", dueno: "Felix" },
        { tipo: "Perro", nombre: "Puka4", dueno: "Felix" }
    ],
    veterinarios: [
        { nombre: "Juan", apellido: "Perez", documento: "18080392" },
        { nombre: "Maria", apellido: "Orona", documento: "11010091" },
        { nombre: "Alvaro", apellido: "Solis", documento: "13092209" },
        { nombre: "Maidelin", apellido: "Del Rio", documento: "19010299" },
        { nombre: "Juan", apellido: "Perez", documento: "18080392" }

    ],
    duenos: [
        { nombre: "Clauida", apellido: "Ramirez", documento: "18080392" },
        { nombre: "Favio", apellido: "Escobedo", documento: "11010091" },
        { nombre: "Jesus", apellido: "Mora", documento: "13092209" },
        { nombre: "Cecila", apellido: "Rios", documento: "19010299" },

    ],
    consultas: [{
            mascota: 0,
            veterinario: 0,
            fechaCreacion: new Date(),
            fechaEdicion: new Date(),
            historial: '',
            diagnostico: "Diagnostico",
        },


    ],
};