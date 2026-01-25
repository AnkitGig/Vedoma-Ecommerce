import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { cartItems } = useCart();

  return (
    <>
      <header id="home">
        <div className="menu-area p-2" id="sticky-header">
          <div className="container custom-container">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="menu-wrap">
                  <nav className="menu-nav d-flex align-items-center justify-content-between">

                    {/* Website Name / Logo */}
                    <div className="logo">
                      <Link to="/">
                        <h3 style={{ margin: 0 }}>ECOMMERCE</h3>
                      </Link>
                    </div>

                    {/* Cart & User Icons */}
                    <div className="header-action">
                      <ul className="d-flex align-items-center mb-0">
                        <li className="header-shop-cart">
                          <Link className="cart-count" to="/cart">
                            <i className="fi fi-rr-shopping-cart"></i>
                            <span className="mini-cart-count">
                              {cartItems.length}
                            </span>
                          </Link>
                        </li>

                        <li className="ms-3">
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
