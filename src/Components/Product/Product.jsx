import React, { useEffect,useState } from 'react'
import classes from "../Product/Product.module.css"
import axios from "axios"
import ProductCard from './ProductCard';

function Product() {

    const [products,setproducts] = useState([]);

    useEffect(() => {
        
       axios.get("https://fakestoreapi.com/products")
       .then ((res) => {
        setproducts (res.data)
       })
       .catch ((err) =>
    {console.log(err);})
        
    }, []);
  return (
    <section className={classes.products_container}>
      {products.map((product) => {
        return <ProductCard renderAdd= {true} product={product} key={product.id} />;
      })}
    </section>
  );
}

export default Product
