import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { cartItems } = useCart();
  const openNav = () => {
    const sidenav = document.getElementById("mySidenav");
    if (sidenav) sidenav.style.width = "250px";
  };

  return (
    <>
      <button className="scroll-top scroll-to-target" data-target="html">
        <i className="fa fa-angle-up"></i>
      </button>

      <div className="sidenav" id="mySidenav">
        <a
          className="closebtn"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            const sidenav = document.getElementById("mySidenav");
            if (sidenav) sidenav.style.width = "0";
          }}
        >
          ×
        </a>
        <ul
          className="navigation"
          style={{ listStyleType: "none", color: "#fff", paddingLeft: "0px" }}
        >
          <li className="active">
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <a className="section-link" href="#features">
              Features
            </a>
          </li>
          <li>
            <a className="section-link" href="#paroller">
              Product
            </a>
          </li>
          <li>
            <a className="section-link" href="#news">
              News
            </a>
          </li>
          <li>
            <a href="/contact">Contacts</a>
          </li>
        </ul>
        <hr />
        <div className="header-action mt-3">
          <ul>
            <li className="header-shop-cart">
              <Link className="cart-count text-white" to="/cart">
                <i className="fi fi-rr-shopping-cart"></i>
                <span className="mini-cart-count">{cartItems.length}</span>
              </Link>
            </li>
            <li>
              <Link className="text-white" to="/login">
                <i className="fi fi-rr-user"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <header id="home">
        <div id="header-top-fixed"></div>
        <div className="menu-area" id="sticky-header">
          <div className="container custom-container">
            <div className="row">
              <div className="col-12">
                <div className="mobile-nav-toggler">
                  <span onClick={openNav}>
                    <i className="fi fi-rr-apps"></i>
                  </span>
                </div>
                <div className="menu-wrap">
                  <nav className="menu-nav">
                    <div className="logo">
                      <Link to="/">
                        <h3>ECOMMERCE</h3>
                      </Link>
                    </div>
                    <div className="navbar-wrap main-menu d-none d-xl-flex">
                      <ul className="navigation">
                        <li className="active">
                          <a className="section-link" href="/">
                            Home
                          </a>
                        </li>
                        <li>
                          <a className="section-link" href="#features">
                            Features
                          </a>
                        </li>
                        <li>
                          <a className="section-link" href="#paroller">
                            Product
                          </a>
                        </li>
                        <li>
                          <a className="section-link" href="#news">
                            News
                          </a>
                        </li>
                        <li>
                          <a href="/contact">Contacts</a>
                        </li>
                      </ul>
                    </div>

                    <div className="header-action d-none d-sm-block">
                      <ul>
                        <li className="header-shop-cart">
                          <Link className="cart-count" to="/cart">
                            <i className="fi fi-rr-shopping-cart"></i>
                            <span className="mini-cart-count">{cartItems.length}</span>
                          </Link>
                          {cartItems.length > 0 && (
                            <div className="header-mini-cart">
                              <ul className="woocommerce-mini-cart cart_list product_list_widget list-wrap">
                                {cartItems.map((item) => (
                                  <li key={item.id} className="woocommerce-mini-cart-item d-flex align-items-center">
                                    <a
                                      className="remove remove_from_cart_button"
                                      href="#"
                                    >
                                      ×
                                    </a>
                                    <div className="mini-cart-img">
                                      <img
                                        alt={item.title}
                                        src={item.image}
                                      />
                                    </div>
                                    <div className="mini-cart-content">
                                      <h4 className="product-title">
                                        <a href="/shop-details">
                                          {item.title}
                                        </a>
                                      </h4>
                                      <div className="mini-cart-price">
                                        {item.quantity} ×{" "}
                                        <span className="woocommerce-Price-amount amount">
                                          ${item.price.toFixed(2)}
                                        </span>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                              <p className="woocommerce-mini-cart__total">
                                <strong>Subtotal:</strong>
                                <span className="woocommerce-Price-amount">
                                  ${cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
                                </span>
                              </p>
                              <p className="checkout-link">
                                <Link className="button wc-forward" to="/cart">
                                  View cart
                                </Link>
                                <Link
                                  className="button checkout wc-forward"
                                  to="/checkout"
                                >
                                  Checkout
                                </Link>
                              </p>
                            </div>
                          )}
                        </li>
                        <li>
                          <Link to="/login">
                            <i className="fi fi-rr-user"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
