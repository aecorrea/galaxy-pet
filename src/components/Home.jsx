import React from "react";
import home from "./media/home-slide.png";
import arrow from "./media/arrow.png";
import darling from "./media/darling.png";
import dixon from "./media/dixon.png";
import snout from "./media/snout.png";
import wow from "./media/wow.png";
import reino from "./media/reino.png";

const Home = () => {
  return (
    <div>
      <div className="arrow-catalog">
        <img src={arrow} alt="arrow-picture" id="arrow-picture" />
        <h2>MIRÁ NUESTRO CATÁLOGO</h2>
      </div>
      <img src={home} alt="home-slide" className="home-slide"></img>
      <div className="home-h2-div">
        <div className="home-h2">
          <div>
            <h3 id="home-h3"> ENVÍOS GRATIS </h3>
            <h2>DESDE $18.000</h2>
          </div>
        </div>
        <div className="home-h2">
          <h2>12 CUOTAS SIN INTERÉS</h2>
          <h3 id="home-h3"> CON TARJETAS BANCARIZADASS </h3>
        </div>
      </div>
      <div className="home-h2">
        <h2>ALGUNAS DE LAS MARCAS QUE NOS ACOMPAÑAN</h2>
      </div>
      <div className="brands-div">
        <img src={darling} className="brands-img"></img>
        <img src={dixon} className="brands-img"></img>
        <img src={snout} className="brands-img"></img>
        <img src={wow} className="brands-img"></img>
        <img src={reino} id="reino-img"></img>
      </div>
    </div>
  );
};

export default Home;
