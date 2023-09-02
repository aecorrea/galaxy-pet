import React from "react";
import insta from "./media/insta.png";
import wa from "./media/wa.png";
import email from "./media/email.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer-div">
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Galaxy-Pet</h4>
              <ul className="ul-footer">
                <li>
                  <Link to={"/about"}>
                    <a href="#">Acerca de Nosotros</a>
                  </Link>
                </li>
                <li>
                  <Link to={"/services"}>
                    <a href="#">Nuestros Servicios</a>
                  </Link>
                </li>
                <li>
                  <Link to={"/privacy"}>
                    <a href="#">Políticas de Privacidad</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Ayuda</h4>
              <ul className="ul-footer">
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Envíos y Devoluciones</a>
                </li>
                <li>
                  <a href="#">Opciones de Pago</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="https://www.instagram.com/cochoxcorrea/">
                  <img src={insta} className="fab fa-facebook-f"></img>
                </a>
                <a href="https://w.app/galaxypet">
                  <img src={wa} className="fab fa-twitter"></img>
                </a>
                <a href="mailto:solcorrea13@hotmail.com">
                  <img src={email} className="fab fa-instagram"></img>
                </a>
                {/* <a href="#"><img src="" className="fab fa-linkedin-in"></img></a> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
