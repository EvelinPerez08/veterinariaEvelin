import React, { useState } from "react";
import Encabezado from "./Encabezado";
import Fila from "./Fila";
import "./Tabla.css";
import "./Encabezado.css";

function Tabla({ entidades = [], editarEntidad = () => {}, eliminarEntidad = () => {}, columnas = [] }) {


    return ( < table className = "table table-stripped table-hover" >
        <
        Encabezado columnas = { columnas }
        />  <
        tbody id = "lista-mascotas" > {
            entidades.map((entidades, index) => ( <
                Fila key = { `fila-${index}` }
                index = { index }
                entidades = { entidades }
                editarEntidad = { editarEntidad }
                eliminarEntidad = { eliminarEntidad }
                columnas = { columnas }
                />
            ))
        } <
        /tbody>  < /
        table >
    );
}

export default Tabla;