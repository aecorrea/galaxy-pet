import { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export const CartContext = createContext(null);

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [long, setLong] = useState(0);

  const addToCart = ({ id, title, price, image, quantity }) => {
    setLong(cart.reduce((acc, value) => acc + value.quantity, 1));

    toast.success("Producto Agregado al Carrito!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      toastId: "toast",
    });
    if (cart.some((el) => el.id === id)) {
      let auxCart = cart;
      let findIndex = auxCart.findIndex((el) => el.id === id);
      auxCart[findIndex].quantity += quantity || 1;

      setCart(auxCart);
    } else {
      const addedItem = {
        id: id,
        title: title,
        price: price,
        image: image,
        quantity: quantity || 1,
      };

      setCart([...cart, addedItem]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, setCart, long, addToCart }}>
      {children}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </CartContext.Provider>
  );
};

export default ShoppingCartProvider;
