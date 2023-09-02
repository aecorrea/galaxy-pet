import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { ShoppingCartProvider } from "./context/cartContext";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import Privacy from "./components/Privacy";

const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <ShoppingCartProvider>
          <NavBar />

          <ItemListContainer />
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route
              exact
              path="/category/:category"
              element={<ItemListContainer />}
            />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="*" element={<Home />} />
            <Route exact path="/privacy" element={<Privacy />} />
          </Routes>
        </ShoppingCartProvider>
        <Footer />
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;
