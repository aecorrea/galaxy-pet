import React from "react";
import grooming from "./media/grooming.jpg";
import grooming1 from "./media/grooming1.jpg";

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-title">
        <h1>Nuestros Servicios</h1>
        <h2>
          Que tu mascota sea vea saludable, feliz y oliendo de la mejor mientras
          experimentan el mejor servicio de peluquería.
        </h2>
      </div>

      <div className="services-col1">
        <img src={grooming} alt="dog-bath" id="grooming"></img>
        <div className="services-text1">
          <h3 className="h3-col">Servicio de baño y cepillado</h3>
          <br />
          <ul className="text1-ul">
            <li className="services-li">
              Baño con productos de la mejor calidad y adaptados al tipo de
              pelaje y piel de tu mascota
            </li>
            <li className="services-li">Cortado de uñas</li>
            <li className="services-li">Limpieza de Orejas</li>
            <li className="services-li">Cepillado y deslanado</li>
            <li className="services-li">Bandana de regalo</li>
            <li className="services-li">Perfume</li>
          </ul>
        </div>
      </div>

      <div className="services-col2">
        <div className="services-text2">
          <h3 className="h3-col">Servicio Completo</h3>
          <br />
          <ul className="text2-ul">
            <li className="services-li">
              Todo lo incluido en Servicio de baño y cepillado
            </li>
            <li className="services-li">
              Corte de pelo y estilismo con tijeras y cortadora eléctrica
            </li>
            <li className="services-li">
              Corte de pelo y estilismo en zonas delicadas como las patitas y
              rostro
            </li>
          </ul>
        </div>
        <img src={grooming1} alt="dog-bath" id="grooming1"></img>
      </div>
    </div>
  );
};

export default Services;
