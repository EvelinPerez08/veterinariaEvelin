import React, { useState, useEffect } from "react";
import Input from "../Input";
import Select from "../Select";


function Componentecampos({
    manejarInput = () => {},
    objeto = {},
    nombreCampo = "",
    options = {}
}) {
    console.log(options);
    switch (nombreCampo) {
        case 'tipo':
        case 'mascota':
        case 'veterinario':
        case 'diagnostico':
        case 'dueno':
            return ( <
                div className = "col" > {
                    Object.keys(options).length > 0 ? ( <
                        Select nombreCampo = { nombreCampo }
                        options = { options[nombreCampo] }
                        onChange = { manejarInput }
                        placeholder = { objeto[nombreCampo] }
                        defaultvalue = { objeto[nombreCampo] }
                        selectedvalue = { objeto[nombreCampo] }
                        value = { objeto[nombreCampo] }
                        /> 
                    ) : ("Cargando opciones")
                } <
                /div>

            );
        case 'nombre':
        case 'apellido':
        case 'documento':
        case 'historial':
            return ( <
                div className = "col" > <
                Input nombreCampo = { nombreCampo }
                tipo = "text"
                onInput = { manejarInput }
                placeholder = { nombreCampo }
                value = { objeto[nombreCampo] }
                /> < /
                div >
            );
        default:
            return false;
    }
};
export default Componentecampos;