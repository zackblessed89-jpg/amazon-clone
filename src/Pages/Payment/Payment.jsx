import React, { useContext, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import classes from "./Payment.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";

function Payment() {
  const [{ user, basket }] = useContext(DataContext);
  const stripe = useStripe();
  const elements = useElements();

  // Correct total item count
  const total = basket?.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

 

  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);

  // ✅ Submit handler (REQUIRED)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setProcessing(true);

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setError(error.message);
      setProcessing(false);
    } else {
      console.log("PaymentMethod created:", paymentMethod);
      setError(null);
      setProcessing(false);
    }
  };

  return (
    <LayOut>
      {/* header */}
      <div className={classes.payment__header}>Checkout ({total}) items</div>

      <section className={classes.payment__part}>
        {/* Delivery Address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div>seattle, wa</div>
          </div>
        </div>

        <hr />

        {/* Products */}
        <div className={classes.flex}>
          {basket?.map((item) => (
            <ProductCard key={item.id} product={item} flex />
          ))}
        </div>

        <hr />

        {/* Payment Method */}
        <div className={classes.flex}>
          <h3>Payment Method</h3>

          <form onSubmit={handleSubmit} className={classes.payment__form}>
            <CardElement />

            <div className={classes.payment__price}>
              <div
                style={{ display: "flex", gap: "40px", alignItems: "center" }}
              >
                <div className={classes.payment__totalprice}>
                  <p>Total Price ({basket.length} items)</p>
                  <CurrencyFormat amount={total} />
                </div>
              </div>
            </div>

            <button type="submit" disabled={!stripe || processing}>
              {processing ? "Processing..." : "Pay Now"}
            </button>

            {error && <div className={classes.error}>{error}</div>}
          </form>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment;
