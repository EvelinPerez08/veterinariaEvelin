import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
    return ( < nav className = "navbar navbar-dark bg-dark navbar-expand-lg " >
        <
        Link className = "navbar-brand"
        to = "/" > VETERINARIA < /Link>   <
        div className = "navbar-right"
        id = "navbarColor03" >
        <
        ul className = "navbar-nav mr-auto" >
        <
        li className = "nav-item active" >
        <
        Link claclassNamess = "nav-link"
        to = "/" > Mascotas < span class = "sr-only" > (current) < /span></Link >
        <
        /li>  <
        li className = "nav-item" >
        <
        Link className = "nav-link"
        to = "/" > Veterinarios < /Link>  < /
        li > <
        li className = "nav-item" >
        <
        Link className = "nav-link"
        to = "/" > Consultas < /Link>  < /
        li > <
        li className = "nav-item" >
        <
        Link className = "nav-link"
        to = "/" > Dueños < /Link> < /
        li > <
        /ul>  <
        form className = "form-inline" >
        <
        input className = "form-control mr-sm-2"
        type = "search"
        placeholder = "Search"
        aria - label = "Search" / >
        <
        button className = "btn btn-outline-primary my-2 my-sm-0"
        type = "submit" > Search < /button>  < /
        form > <
        /div>  < /
        nav > );
}
export defalut Nav;