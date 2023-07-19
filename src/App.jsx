import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {

  const greeting = "Página en Construcción! 🛠️⚙️"

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={greeting} />
    </>
  );
};

export default App;
