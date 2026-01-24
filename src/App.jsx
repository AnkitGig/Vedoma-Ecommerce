import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import Cart from './pages/Cart.jsx'
import Checkout from './pages/Checkout.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

export default function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </CartProvider>
  )
}
