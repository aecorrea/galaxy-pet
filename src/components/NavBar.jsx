import React from "react";
import logo from './media/galaxy-pet-logo.png';
import CartWidget from "./CartWidget";


const NavBar = () => {
  return (
    <div id="navbar">
        <a href="#"><img src={logo} alt="logo image" className="logo heartbeat"></img></a>
        <ul className="navbar-ul">
            <li className="current"><a href="#" data-hover="Inicio">Inicio</a></li>
            <li><a href="#" data-hover="Acerca de Nosotros">Acerca de Nosotros</a></li>
            <li><a href="#" data-hover="Galería">Galería</a></li>
            <li><a href="#" data-hover="Servicios">Servicios</a></li>
            <li><a href="#" data-hover="Productos">Productos</a></li>
            <li><a href="#" data-hover="Contacto">Contacto</a></li>
        </ul>
        <CartWidget />


    </div>
  );
};

export default NavBar;
