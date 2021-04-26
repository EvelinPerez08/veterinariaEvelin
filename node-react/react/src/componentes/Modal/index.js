import React from "react";
import ModalHeader from "./ModalHeader";
import "./Modal.css";
import ModalFooter from "./ModalFooter";

function Modal({
    cambiarModal = () => {},
    crearEntidad = () => {},
    children = [],
    objeto = {},
}) {

    return ( <
        >
        <
        div className = "modal" >
        <
        div className = "modal-dialog modal-dialog-centered" >
        <
        div className = "modal-content" >
        <
        ModalHeader cambiarModal = { cambiarModal }
        /> <
        div className = "modal-body" >
        <
        form id = "form" >
        <
        div className = "form-row" > { children } < /div> < /
        form > < /
        div > <
        ModalFooter cambiarModal = { cambiarModal }
        crearEntidad = { crearEntidad }
        /> < /
        div > <
        /div> < /
        div > <
        div className = "modal-backdrop fade show" > < /div> < / >
    );
}

export default Modal;

/* <
div className = "col" >
<
Select nombreCampo = "tipo"
options = { tiposMascota }
onChange = { manejarInput }
placeholder = "Tipo Animal"
value = { objeto.tipo }
/ > < /
div > < /
div > <
div className = "form-row" >
<
div className = "col" >
<
Input nombreCampo = "Nombre"
tipo = "text"
onInput = { manejarInput }
placeholder = "Nombre"
value = { objeto.nombre }
/ > < /
div > <
div className = "col" >
<
Select options = { duenos }
nombreCampo = "dueNo" / >
onChange = { manejarInput }
placeholder = "Dueño"
value = { objeto.dueno } <
/div> < /
div >*/