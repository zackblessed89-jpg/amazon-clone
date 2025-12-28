import React from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { useContext } from "react";
import ProductCard from "../../Components/Product/ProductCard";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import classes from "./Cart.module.css"
import { Type } from "../../Utility/action.type";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";



function Cart() {
  const [{ basket }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
const INCREMENT = (item) => {
  dispatch({
    type: Type.ADD_TO_BASKET,
    item,
  });
};
const DECREMENT = (id) => {
  dispatch({
    type: Type.REMOVE_FROM_BASKET,
    id,
  });
};

return (
  <LayOut>
    <section className={classes.container}>
      <div className={classes.cart__container}>
        <h2>Thank you for Shopping</h2>
        <h3>Your shopping basket</h3>
        <hr />

        {basket?.length === 0 ? (
          <p>Oops! Your cart is empty.</p>
        ) : (
          basket.map((item) => (
            <section key={item.id} className={classes.cart__item}>
              <ProductCard
                product={item}
                renderDesc={true}
                renderAdd={false}
                flex={true}
              />

              <div className={classes.btn_container}>
                <button onClick={() => INCREMENT(item)}>
                  <IoIosArrowUp size={20}/>
                </button>
                <span>{item.amount}</span>
                <button onClick={() => DECREMENT(item.id)}>
                  <IoIosArrowDown size={20}/>
                </button>
              </div>
            </section>
          ))
        )}
      </div>

      {basket?.length !== 0 && (
        <div className={classes.subtotal}>
          <div>
            <p>Subtotal ({basket.length} items)</p>
            <CurrencyFormat amount={total} />
          </div>

          <span>
            <input type="checkbox" />
            <small>This order contains a gift</small>
          </span>

          <Link to="/payments" className={classes.checkoutBtn}>
            Continue to checkout
          </Link>
        </div>
      )}
    </section>
  </LayOut>
); }
export default Cart