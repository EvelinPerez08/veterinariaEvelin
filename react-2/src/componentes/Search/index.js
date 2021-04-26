import React from "react";
import "./Search.css";
import Select from "../Select";

function Search(manejarSearchInput = () => {}, buscar = () => {}, entidad = null, options={}) {
    return ( <
        form className = "form-inline" >
        <
        input className = "form-control mr-sm-2"
        type = "search"
        placeholder = "Search"
        aria - label = "Search"
        onInput = { manejarSearchInput }
        / > {entidad === "consultas"&&( < >
        <Select nombreCampo="" options={options.mascota ? options.mascota:[]
        placeholder="busqueda por mascota"
        onChange={manejarSearchInput}} / >
        <
        select name = "mascota" > < option value = { undefined } > Mascotas... < /option> </select >
        <
        select name = "veterinario" > < option value = { undefined } > Veterinarios... < /option> </select >

    )
} < button className = "btn btn-outline-primary"
type = "submit"
onClick = { buscar } > Search < /button>  < /
form > )
}

export default Search;