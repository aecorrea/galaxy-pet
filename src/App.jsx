import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ComponenteA from "./components/ComponenteA";
import CartContext from "./context/cartContext";

const App = () => {



  // fetch("https://fakestoreapi.com/products")
  //   .then(function (response) {
  //     return response.json();
  //   })
  //   .then(function (user) {
  //     console.log(user);
  //   });

  return (




    <BrowserRouter>
      <ChakraProvider>
        <NavBar />

        
          <ItemListContainer />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/category/:category" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>

              
      </ChakraProvider>
     </BrowserRouter>
  );
};

export default App;
