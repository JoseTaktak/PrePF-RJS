import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "./Images/MF-logo.jpg";

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
            <Link to='/category/1'>Golsinas</Link>
          </li>
          <li>
            <Link to='category/2'>Bastones</Link>
          </li>
          <li>
            <Link to='category/3'>Pastillas</Link>
          </li>
        </ul>
        <div className="cart">
          <box-icon name="cart"></box-icon>
          <span className="total_item">0</span>
          </div>
    </header>
  )
}


