import React from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const handleContactSubmit = () => {
    Swal.fire(
      "¡Recibimos tu consulta correctamente!",
      "Te responderemos a la brevedad!",
      "success"
    );
  };

  return (
    <div className="contact-main-div">
      <h1 className="contact-h1">Contacto</h1>
      <h2 className="contact-h2">
        Dejanos tu consulta y te responderemos a la brevedad!
      </h2>

      <div className="field">
        <label className="label">Nombre</label>
        <div className="control">
          <input className="input" type="text" placeholder="Nombre" />
        </div>
      </div>

      <div className="field">
        <label className="label">Apellido</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input is-success"
            type="text"
            placeholder="Apellido"
          />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </div>
      </div>

      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input" type="email" placeholder="e-Mail " />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-exclamation-triangle"></i>
          </span>
        </div>
      </div>

      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea
            className="textarea"
            placeholder="Ingresa tu consulta aquí..."
          ></textarea>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link" onClick={handleContactSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
