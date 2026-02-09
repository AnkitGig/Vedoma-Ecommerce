import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();
  const [showCoupon, setShowCoupon] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/login");
    }
  }, [navigate]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    town: "",
    zipCode: "",
    phone: "",
    email: "",
    orderNotes: "",
    couponCode: "",
  });

  const products = [
    { name: "Antiaging and Longevity", quantity: 1, price: 19.99 },
  ];

  const subtotal = products.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Layout title="Checkout">
      <section className="checkout-area">
        <div className="container">

          {/* Coupon */}
          <p>
            Have a coupon?{" "}
            <button
              className="coupon-btn"
              onClick={() => setShowCoupon(!showCoupon)}
            >
              Click here
            </button>
          </p>

          {showCoupon && (
            <div className="coupon-box">
              <input
                type="text"
                name="couponCode"
                placeholder="Coupon Code"
                value={formData.couponCode}
                onChange={handleChange}
              />
              <button>Apply</button>
            </div>
          )}

          <form onSubmit={handlePlaceOrder}>
            <div className="row">

              {/* Billing */}
              <div className="col-lg-7">
                <h3>Billing Details</h3>

                <input
                  name="firstName"
                  placeholder="First Name"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                />

                <input
                  name="lastName"
                  placeholder="Last Name"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                />

                <input
                  name="streetAddress"
                  placeholder="Street Address"
                  required
                  value={formData.streetAddress}
                  onChange={handleChange}
                />

                <input
                  name="town"
                  placeholder="City"
                  required
                  value={formData.town}
                  onChange={handleChange}
                />

                <input
                  name="zipCode"
                  placeholder="Zip Code"
                  required
                  value={formData.zipCode}
                  onChange={handleChange}
                />

                <input
                  name="phone"
                  placeholder="Phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />

                <input
                  name="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />

                <textarea
                  name="orderNotes"
                  placeholder="Order Notes"
                  value={formData.orderNotes}
                  onChange={handleChange}
                />
              </div>

              {/* Order Summary */}
              <div className="col-lg-5">
                <div className="order-box">
                  <h3>Your Order</h3>

                  {products.map((p, i) => (
                    <div key={i} className="order-row">
                      <span>{p.name} × {p.quantity}</span>
                      <span>${(p.price * p.quantity).toFixed(2)}</span>
                    </div>
                  ))}

                  <hr />

                  <div className="order-row">
                    <strong>Total</strong>
                    <strong>${subtotal.toFixed(2)}</strong>
                  </div>

                  <button className="place-btn">
                    Place Order
                  </button>
                </div>
              </div>

            </div>
          </form>
        </div>
      </section>

      {/* ✅ INTERNAL CSS */}
      <style>{`
        .checkout-area input,
        .checkout-area textarea {
          width: 100%;
          padding: 10px;
          margin-bottom: 15px;
          border: 1px solid #ddd;
          border-radius: 6px;
        }

        .coupon-btn {
          border: none;
          background: none;
          color: blue;
          cursor: pointer;
        }

        .coupon-box {
          margin-bottom: 20px;
        }

        .order-box {
          background: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
          position: sticky;
          top: 100px;
        }

        .order-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .place-btn {
          width: 100%;
          padding: 12px;
          background: green;
          color: white;
          border: none;
          border-radius: 6px;
          margin-top: 15px;
          cursor: pointer;
        }

        .place-btn:hover {
          background: darkgreen;
        }
      `}</style>

    </Layout>
  );
}
