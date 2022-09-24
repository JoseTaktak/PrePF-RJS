import React from 'react'
import IMG from "./Images/Productos/Baston-multi.jpg";

export const ListadoProductos = () => {
    return (
    <>
    <h1 className="title">PRODUCTOS</h1>
    <div className="productos">
        <div className="producto">
        <a href="#">
            <div className="productoImg">
                <img src={IMG} alt="" />
            </div>
        </a>
        <div  className="Pfooter">
        <h1> Title </h1>
        <p> Categoria </p>
        <p className="price">150</p>
        </div>
        <div className="botton">
            <button className="btn">  Añadir al carrito </button>
            <div>
                <a href="#" className="btn">Vista</a>
            </div>
           </div>
        </div>

        <div className="producto">
        <a href="#">
            <div className="productoImg">
                <img src={IMG} alt="" />
            </div>
        </a>
        <div  className="Pfooter">
        <h1> Title </h1>
        <p> Categoria </p>
        <p className="price">150</p>
        </div>
        <div className="botton">
            <button className="btn">  Añadir al carrito </button>
            <div>
                <a href="#" className="btn">Vista</a>
            </div>
           </div>
        </div>

        <div className="producto">
        <a href="#">
            <div className="productoImg">
                <img src={IMG} alt="" />
            </div>
        </a>
        <div  className="Pfooter">
        <h1> Title </h1>
        <p> Categoria </p>
        <p className="price">150</p>
        </div>
        <div className="botton">
            <button className="btn">  Añadir al carrito </button>
            <div>
                <a href="#" className="btn">Vista</a>
            </div>
           </div>
        </div>

        <div className="producto">
        <a href="#">
            <div className="productoImg">
                <img src={IMG} alt="" />
            </div>
        </a>
        <div  className="Pfooter">
        <h1> Title </h1>
        <p> Categoria </p>
        <p className="price">150</p>
        </div>
        <div className="botton">
            <button className="btn">  Añadir al carrito </button>
            <div>
                <a href="#" className="btn">Vista</a>
            </div>
           </div>
        </div>

        </div>
        </>
  )
}
