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
        <img src={logo} alt="logo image" className="logo heartbeat"></img>
      </Link>

          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              {" "}
              Productos{" "}
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link to={`/category/${"men's clothing"}`}>Mens Clothing</Link>
              </MenuItem>
              <MenuItem>
                <Link to={`/category/${"women's clothing"}`}>Women's Clothing</Link>
              </MenuItem>
              <MenuItem>
              <Link to={`/category/${"jewelery"}`}>Jewelry</Link></MenuItem>
              <MenuItem>
              <Link to={`/category/${"electronics"}`}>Electronics</Link></MenuItem>
            </MenuList>
          </Menu>
      <ul className="navbar-ul">
        {/* <li>
          <a href="#" data-hover="Inicio">
            Inicio
          </a>
        </li> */}
        <li>
        </li>
        <li>
          <a href="#" data-hover="Galería">
            Galería
          </a>
        </li>
        <li>
          <a href="#" data-hover="Servicios">
            Servicios
          </a>
        </li>
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
  /* <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Actions
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu> */
}
