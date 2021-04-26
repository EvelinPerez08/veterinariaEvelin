import React, { useState } from "react";
import { Switch, Route } from "react-router-dom"
import "./App.css";
import Pagina from "./Pagina";
import Nav from "./componentes/Nav"

function App() {
    return ( <
        div className = "container" >
        <
        Nav / >
        <
        Switch >
        <
        Route exact path = "/"
        component = {
            (props) => < Pagina {...props }
            titulo = "Mascotas"
            entidad = "mascotas" / >
        }
        /> <
        Route path = "/veterinarios"
        component = {
            (props) => < Pagina {...props }
            titulo = "Veterinarios"
            entidad = "veterinarios" / >
        }
        /> <
        Route path = "/duenos"
        component = {
            (props) => < Pagina {...props }
            titulo = "Dueños"
            entidad = "duenos" / >
        }
        /> <
        Route path = "/consultas"
        component = {
            (props) => < Pagina {...props }
            titulo = "Consultas"
            entidad = "consultas" / >
        }
        /> < /
        Route > <
        /Switch> < /
        div >
    );


}

export default App;