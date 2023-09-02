import React from "react";
import GoogleMaps from "./GoogleMaps";

const About = () => {
  return (
    <div className="about">
      <h1>Acerca de Nosotros</h1>

      <div className="about-container">
        <div className="about-h2">
          <h2>
            En Galaxy Pet vas a encontrar todos los productos y servicios
            necesarios para el bienestar de tu mascota.
          </h2>
          <h2>
            Ofrecemos un servicio profesional de peluquería y estética para tus
            mascotas en un entorno de muchísimo amor y cuidado!
          </h2>
          <h2>
            Además en Galaxy Pet vas a encontrar los mejores alimentos naturales
            y orgánicos que tu mascota necesita.{" "}
          </h2>
          <h2>
            Estamos ubicados en el corazón del Norte de Córdoba, en la localidad
            de San José de la Dormida. No dudes en llegarte a nuestro local si
            tenés alguna duda o de escribirnos en nuestras redes sociales!
          </h2>
        </div>
        <GoogleMaps />
      </div>
    </div>
  );
};

export default About;
