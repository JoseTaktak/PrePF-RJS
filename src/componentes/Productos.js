import { useEffect, useState } from 'react'; 
import Products from "./Products";
import customFetch from "../utils/promesa";

const Productos = (props) => {

  const [data, setDato] = useState ({});
    
  useEffect (() => {
  customFetch(Products[4], 2000)
  .then(result => setDato(result))
  .catch(err => console.log(err))
}, []);

    return (
    <>
    {
        props.items.map(item => (
        <Products
            key={item.id}
            title={item.title}
            image={item.image}
            info={item.info}
            Precio={item.Precio} />
    ))
  }
  </>
    );
}

  export default Productos;