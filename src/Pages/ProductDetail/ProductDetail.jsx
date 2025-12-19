import React, { useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!productId) return;

    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data); //  correct axios response
      })
      .catch((err) => {
        console.error(err);
      });
  }, [productId]); //  dependency added

  // using product propse we will pass it
  return <LayOut>{product && <ProductCard product={product} />}</LayOut>;
}

export default ProductDetail;
