import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { updateCartItem, removeFromCart as removeFromCartAPI, getCart as getCartAPI } from '../utils/api'

export default function Cart() {
  const navigate = useNavigate()
  const { cartItems, updateQuantity, removeFromCart, setCartItems } = useCart()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [actionLoading, setActionLoading] = useState(false)

  useEffect(() => {
    const authToken = localStorage.getItem('authToken')
    if (!authToken) {
      navigate('/login')
      return
    }
    fetchCart()
  }, [navigate])

  const fetchCart = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await getCartAPI()
      // Handle different API response formats
      if (response && response.items && Array.isArray(response.items)) {
        const formattedItems = response.items.map(item => {
          // Handle nested productId object
          const product = item.productId && typeof item.productId === 'object' 
            ? item.productId 
            : item
          
          return {
            id: product._id || product.id || item._id,
            title: product.title || product.name || '',
            price: product.price || 0,
            quantity: item.qty || item.quantity || 1,
            image: product.image || '',
            category: product.category || '',
            description: product.description || ''
          }
        })
        setCartItems(formattedItems)
      } else if (Array.isArray(response)) {
        // If response is directly an array
        const formattedItems = response.map(item => {
          const product = item.productId && typeof item.productId === 'object' 
            ? item.productId 
            : item
          
          return {
            id: product._id || product.id || item._id,
            title: product.title || product.name || '',
            price: product.price || 0,
            quantity: item.qty || item.quantity || 1,
            image: product.image || '',
            category: product.category || '',
            description: product.description || ''
          }
        })
        setCartItems(formattedItems)
      }
    } catch (err) {
      setError(err.message || 'Failed to load cart')
      console.error('Error fetching cart:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleQuantityChange = async (id, newQuantity) => {
    if (newQuantity < 1) return
    
    setActionLoading(true)
    setError(null)
    try {
      await updateCartItem(id, newQuantity)
      updateQuantity(id, newQuantity)
    } catch (err) {
      setError(err.message || 'Failed to update quantity')
      console.error('Error updating cart:', err)
    } finally {
      setActionLoading(false)
    }
  }

  const handleRemoveItem = async (id) => {
    setActionLoading(true)
    setError(null)
    try {
      await removeFromCartAPI(id)
      removeFromCart(id)
    } catch (err) {
      setError(err.message || 'Failed to remove item')
      console.error('Error removing from cart:', err)
    } finally {
      setActionLoading(false)
    }
  }

  const subtotal = cartItems.reduce((sum, item) => sum + ((item.price || 0) * (item.quantity || 1)), 0)

  if (loading) {
    return (
      <Layout title="Cart">
        <div className="cart__area section-py-130">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <p>Loading cart...</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }

  if (cartItems.length === 0) {
    return (
      <Layout title="Cart">
        <div className="cart__area section-py-130">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="title mb-30">Your Cart is Empty</h2>
                <p style={{ marginBottom: '30px' }}>Start shopping to add items to your cart</p>
                <Link className="btn btn-sm" to="/shop">Continue Shopping</Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout title="Cart">
      <div className="cart__area section-py-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {error && (
                <div style={{ 
                  marginBottom: '20px', 
                  padding: '15px', 
                  backgroundColor: '#ffebee', 
                  color: '#c62828', 
                  borderRadius: '5px' 
                }}>
                  {error}
                </div>
              )}
              <table className="table cart__table">
                <thead>
                  <tr>
                    <th className="product__thumb"> </th>
                    <th className="product__name">Product</th>
                    <th className="product__price">Price</th>
                    <th className="product__quantity">Quantity</th>
                    <th className="product__subtotal">Subtotal</th>
                    <th className="product__remove"> </th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td className="product__thumb">
                        <Link to="/shop-details"><img alt={item.title} src={item.image || ''} /></Link>
                      </td>
                      <td className="product__name">
                        <Link to="/shop-details">{item.title || 'Product'}</Link>
                      </td>
                      <td className="product__price">${(item.price || 0).toFixed(2)}</td>
                      <td className="product__quantity">
                        <div className="quickview-cart-plus-minus">
                          <input
                            type="number"
                            min="1"
                            value={item.quantity || 1}
                            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                            disabled={actionLoading}
                          />
                        </div>
                      </td>
                      <td className="product__subtotal">${((item.price || 0) * (item.quantity || 1)).toFixed(2)}</td>
                      <td className="product__remove">
                        <button 
                          onClick={() => handleRemoveItem(item.id)} 
                          disabled={actionLoading}
                          style={{ 
                            background: 'none', 
                            border: 'none', 
                            cursor: actionLoading ? 'not-allowed' : 'pointer',
                            opacity: actionLoading ? 0.5 : 1
                          }}
                        >×</button>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="cart__actions" colSpan="6">
                      <form onSubmit={(e) => e.preventDefault()} className="cart__actions-form">
                        <input placeholder="Coupon code" type="text" disabled={actionLoading} />
                        <button className="btn btn-sm" type="submit" disabled={actionLoading}>Apply coupon</button>
                      </form>
                      <div className="update__cart-btn text-end f-right">
                        <button className="btn btn-sm" type="submit" disabled={actionLoading}>Update cart</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-lg-4">
              <div className="cart__collaterals-wrap">
                <h2 className="title">Cart totals</h2>
                <ul className="list-wrap">
                  <li>Subtotal <span>${subtotal.toFixed(2)}</span></li>
                  <li>Total <span className="amount">${subtotal.toFixed(2)}</span></li>
                </ul>
                <Link className="btn btn-sm" to="/checkout">Proceed to checkout</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
