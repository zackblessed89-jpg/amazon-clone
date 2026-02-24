import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/Auth/Auth";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

// Stripe imports
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Stripe key
const stripePromise = loadStripe("STRIPE_KEY");

function Routing() {
  return (
    <Router>
      {/* Stripe Elements wraps only what needs Stripe */}
      <Elements stripe={stripePromise}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />

          {/* Protected Payment Route */}
          <Route
            path="/payments"
            element={
              <ProtectedRoute msg="Please sign in to continue">
                <Payment />
              </ProtectedRoute>
            }
          />

          {/* Optional: protect orders too */}
          <Route
            path="/orders"
            element={
              <ProtectedRoute msg="Please sign in to view orders">
                <Orders />
              </ProtectedRoute>
            }
          />

          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Elements>
    </Router>
  );
}

export default Routing;
