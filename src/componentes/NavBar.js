import React from 'react'
import Logo from "./Images/MF-logo.jpg";
// import { Link } from "react-router-dom";

export const Encabezado = () => {
  return (
    <header>
       <a href="#">
          <div className="logo">
            <img src={Logo} alt="Logo-MF" width="150" />
          </div>
        </a>
        <ul>
          <li>
            <a href="./Images/FotoV.jpg">Inicio</a>
          </li>
          <li>
            <a href="/ItemListContainer">Productos</a>
          </li>
        </ul>
        <div className="cart">
          <box-icon name="cart"></box-icon>
          <span className="total_item">0</span>
          </div>
    </header>
  )
}


