import React from "react";

import { Encabezado } from "./componentes/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import  { paginas } from "./componentes/Paginas";
import 'boxicons';
import { ListadoProductos} from "./componentes/ItemDetailContainer";


const App = () => {
  return (
    <BrowserRouter>

    <Encabezado />
    
    <Routes>
        <Route path='/' element={<ListadoProductos />} />
        <Route path='/category/:id' element={<ListadoProductos />} />
    </Routes>
    <p>(c) 2022 - José Taktak - Curso de React Js</p>

    </BrowserRouter>

      
  );

};

export default App;
