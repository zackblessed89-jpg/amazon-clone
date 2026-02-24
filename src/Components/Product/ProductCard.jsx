import React, { useContext }from 'react'
import Rating from '@mui/material/Rating';
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "../Product/Product.module.css";
import {Link} from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import { Type } from '../../Utility/action.type';


function ProductCard({ product, flex, renderDesc, renderAdd}) {
  const { image, title, id, rating, price, description } = product;
  const [state, dispatch] = useContext(DataContext);
  const isInBasket = state.basket?.some((item) => item.id === product.id);
  // console.log(state) 

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        id,
        title,
        price,
        image,
        description,
      },
    });
  };

  return (
    <div
      className={`${classes.card__container} ${
        flex ? classes.product__flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="title" />
      </Link>

      <div>
        <h3> {title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}> {description}</div>}
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating?.rate || 0} precision={0.1} />

          {/* count */}
          <small> {rating?.count}</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        {
        renderAdd && (
          <button
            className={classes.button}
            onClick={addToCart}
            disabled={isInBasket}
          >
            {isInBasket ? "In Basket" : "Add to Cart"}
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
