import React, { useContext, useEffect, useState } from "react";
import bag from "./media/shop-bag.png";
import { CartContext } from "../context/cartContext";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartWidget = () => {
  const { cart, setCart } = useContext(CartContext);

  const [long, setLong] = useState(0);

  const subtotal = cart.reduce((acc, e) => acc + e.price * e.quantity, 0);

  //Handle Drawer
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  //Handre Cart Functions
  const clearCart = () => {
    if (cart.length === 0) {
      toast.warning("No agregaste ningún producto al Carrito!", {
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
    } else {
      toast.success(" Vaciaste el Carrito!", {
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
      console.log(cart);
      setCart([]);
      setLong(0);
    }
  };

  const deleteItem = (id) => {
    setCart(cart.filter((el) => el.id !== id));
    setLong(cart.reduce((acc, value) => acc + value.quantity, 1));
  };

  useEffect(() => {
    setLong(cart.reduce((acc, value) => acc + value.quantity, 0));
  }, [cart.reduce((acc, value) => acc + value.quantity, 0)]);

  return (
    <div className="cartWidget">
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
      <a href="#">
        <img
          src={bag}
          ref={btnRef}
          alt="cart image"
          className="cart heartbeat"
          onClick={onOpen}
        ></img>
      </a>
      <div id="cart-items-number">{long}</div>

      <div className="drawer">
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <h1 className="cart-item-h1">Mi carrito</h1>
            </DrawerHeader>

            <DrawerBody>
              <div className="cart-items">
                {cart.length > 0 ? (
                  cart.map((el) => (
                    <div className="cart-item" key={el.id}>
                      <div className="cart-item-image">
                        <img src={el.image} alt="" />
                      </div>
                      <div className="cart-item-info">
                        <h3>{el.title}</h3>
                        <h4>${el.price}</h4>
                        <h4> Cantidad: {el.quantity}</h4>
                      </div>
                      <DeleteIcon onClick={() => deleteItem(el.id)} />
                    </div>
                  ))
                ) : (
                  <h2 className="cart-item-h2">Carrito Vacío</h2>
                )}
              </div>
            </DrawerBody>

            <h2 id="cart-total">Total: ${subtotal}</h2>
            <DrawerFooter>
              <Button
                variant="outline"
                mr={3}
                onClick={() => clearCart()}
                className="cart-item-info"
              >
                Vaciar Carrito
              </Button>
              <Link to={"/checkout"}>
                <Button
                  isDisabled={cart.length === 0}
                  onClick={onClose}
                  colorScheme="facebook"
                  className="cart-item-info"
                >
                  Finalizar Compra
                </Button>
              </Link>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default CartWidget;
