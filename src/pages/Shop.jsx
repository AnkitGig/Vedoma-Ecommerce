import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { getProducts, addToCart as addToCartAPI } from '../utils/api'

export default function Shop() {
  const { addToCart } = useCart()
  const [selectedQuantities, setSelectedQuantities] = useState({})
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [addingToCart, setAddingToCart] = useState(false)
  const [cartMessage, setCartMessage] = useState(null)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await getProducts()
      setProducts(data)
    } catch (err) {
      setError(err.message || 'Failed to load products')
      console.error('Error fetching products:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleQuantityChange = (id, value) => {
    setSelectedQuantities(prev => ({
      ...prev,
      [id]: parseInt(value) || 1
    }))
  }

  const handleAddToCart = async (product) => {
    const authToken = localStorage.getItem('authToken')
    if (!authToken) {
      setCartMessage('Please login to add items to cart')
      setTimeout(() => {
        window.location.href = '/login'
      }, 1500)
      return
    }

    const quantity = selectedQuantities[product._id] || 1
    setAddingToCart(true)
    setCartMessage(null)

    try {
      // Call API to add to cart
      await addToCartAPI({
        productId: product._id,
        qty: quantity
      })

      // Also update local cart context
      addToCart({
        id: product._id,
        title: product.title,
        price: product.price,
        image: product.image,
        category: product.category,
        description: product.description,
        quantity
      })

      // Show success message
      setCartMessage(`${product.title} added to cart!`)
      
      // Reset quantity after adding
      setSelectedQuantities(prev => ({
        ...prev,
        [product._id]: 1
      }))

      // Clear message after 3 seconds
      setTimeout(() => setCartMessage(null), 3000)
    } catch (err) {
      setCartMessage(`Error: ${err.message || 'Failed to add to cart'}`)
      console.error('Error adding to cart:', err)
    } finally {
      setAddingToCart(false)
    }
  }

  return (
    <Layout title="Shop">
      <div className="shop-area section-py-130">
        <div className="container">
          {cartMessage && (
            <div style={{
              marginBottom: '20px',
              padding: '15px',
              backgroundColor: cartMessage.includes('Error') ? '#ffebee' : '#e8f5e9',
              color: cartMessage.includes('Error') ? '#c62828' : '#2e7d32',
              borderRadius: '5px',
              textAlign: 'center'
            }}>
              {cartMessage}
            </div>
          )}
          <div className="row">
            <div className="col-12">
              <div className="shop-header mb-50">
                <h2 className="title">Our Products</h2>
                <p>Discover our premium collection of herbal and wellness products</p>
              </div>
            </div>
          </div>
          {loading && (
            <div className="row">
              <div className="col-12" style={{ textAlign: 'center', padding: '40px 0' }}>
                <p>Loading products...</p>
              </div>
            </div>
          )}
          {error && (
            <div className="row">
              <div className="col-12" style={{ textAlign: 'center', padding: '40px 0', color: 'red' }}>
                <p>Error: {error}</p>
                <button onClick={fetchProducts} className="btn btn-sm">Retry</button>
              </div>
            </div>
          )}
          {!loading && !error && products.length === 0 && (
            <div className="row">
              <div className="col-12" style={{ textAlign: 'center', padding: '40px 0' }}>
                <p>No products available at the moment</p>
              </div>
            </div>
          )}
          <div className="row">
            {products.map((product) => (
              <div key={product._id} className="col-lg-3 col-md-6 mb-30">
                <div className="product-card" style={{
                  border: '1px solid #eee',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                  onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
                >
                  <div className="product-image" style={{
                    height: '250px',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f5f5f5'
                  }}>
                    <img alt={product.title} src={product.image} style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain'
                    }} />
                  </div>
                  <div style={{ padding: '20px' }}>
                    <p style={{ fontSize: '12px', color: '#999', marginBottom: '8px' }}>
                      {product.category}
                    </p>
                    <h3 style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      marginBottom: '10px',
                      minHeight: '40px'
                    }}>
                      {product.title}
                    </h3>
                    <p style={{
                      fontSize: '13px',
                      color: '#666',
                      marginBottom: '12px',
                      minHeight: '30px'
                    }}>
                      {product.description}
                    </p>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '15px'
                    }}>
                      <span style={{
                        fontSize: '18px',
                        fontWeight: 'bold',
                        color: '#000'
                      }}>
                        ${product.price.toFixed(2)}
                      </span>
                      {product.stock !== undefined && (
                        <span style={{
                          fontSize: '12px',
                          color: product.stock > 0 ? '#4CAF50' : '#f44336'
                        }}>
                          {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                        </span>
                      )}
                    </div>
                    <div style={{
                      display: 'flex',
                      gap: '10px',
                      marginBottom: '12px'
                    }}>
                      <input
                        type="number"
                        min="1"
                        max="100"
                        value={selectedQuantities[product._id] || 1}
                        onChange={(e) => handleQuantityChange(product._id, e.target.value)}
                        disabled={!product.isActive || product.stock === 0}
                        style={{
                          width: '60px',
                          padding: '8px',
                          border: '1px solid #ddd',
                          borderRadius: '4px',
                          textAlign: 'center'
                        }}
                      />
                    </div>
                    <button
                      className="btn btn-sm"
                      onClick={() => handleAddToCart(product)}
                      disabled={!product.isActive || product.stock === 0 || addingToCart}
                      style={{ width: '100%', opacity: product.isActive && product.stock > 0 ? 1 : 0.5 }}
                    >
                      {addingToCart ? 'Adding...' : (product.isActive && product.stock > 0 ? 'Add to Cart' : 'Unavailable')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
