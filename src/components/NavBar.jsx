import React from "react";
import logo from "./media/galaxy-pet-logo.png";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const NavBar = () => {
  return (
    <div id="navbar">
      <Link to={"/home"}>
        <img src={logo} alt="logo img" className="logo heartbeat"></img>
      </Link>

      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {" "}
          Productos{" "}
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link to={`/category/${"all"}`}>Todos los Productos</Link>
          </MenuItem>
          <MenuItem>
            <Link to={`/category/${"accesories"}`}>Accesorios</Link>
          </MenuItem>
          <MenuItem>
            <Link to={`/category/${"snacks"}`}>Snacks</Link>
          </MenuItem>
          <MenuItem>
            <Link to={`/category/${"cleansing"}`}>Limpieza</Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <ul className="navbar-ul">
        <Link to={"/services"}>
          <li>
            <a href="#" data-hover="Servicios">
              Servicios
            </a>
          </li>
        </Link>
        <Link to={"/contact"}>
          <li>
            <a href="#" data-hover="Contacto">
              Contacto
            </a>
          </li>
        </Link>
        <Link to={"/about"}>
          <li>
            <a href="#" data-hover="Acerca de Nosotros">
              Acerca de Nosotros
            </a>
          </li>
        </Link>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
{
}
