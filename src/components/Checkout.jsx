import React, { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Swal from "sweetalert2";

const Checkout = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [setOrderID] = useState(null);

  const { setCart } = useContext(CartContext);

  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(order);
    addDoc(ordersCollection, order).then(({ id }) => {
      Swal.fire(
        "Muchas gracias por tu compra!",
        `Tu número de orden es: ${id}`,
        "success"
      );
      setOrderID(id);
    });
  };

  const order = {
    name,
    email,
  };

  const clearCart = () => {
    setCart([]);
  };

  const ordersCollection = collection(db, "order");
  return (
    <div>
      <h1>Enviando Órdenes</h1>

      <form className="field" onSubmit={handleSubmit}>
        <label className="label">Nombre y Apellido</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Ingresa tu Nombre y Apellido..."
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="Ingresa tu e-mail..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button
              type="submit"
              className="button is-link"
              onClick={clearCart}
            >
              {" "}
              Enviar Pedido
            </button>
          </div>
          <div className="control">
            <button className="button is-link is-light">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
