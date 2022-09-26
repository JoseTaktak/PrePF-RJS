import React from "react";
import { Encabezado } from "./componentes/NavBar";
import { ListadoProductos } from "./componentes/ItemListContainer";
import { BrowserRouter as Router } from 'react-router-dom'
import  { paginas } from "./componentes/Paginas";
import 'boxicons';


function App() {
  return (
    <>
      {/* <Route> */}
        <Encabezado />
        {/* <paginas /> */}
        <ListadoProductos />
      {/* </Route> */}
      
    </>
  );
}

export default App;
