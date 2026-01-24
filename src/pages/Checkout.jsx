import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { Link, useNavigate } from 'react-router-dom'

export default function Checkout() {
  const navigate = useNavigate()

  useEffect(() => {
    const authToken = localStorage.getItem('authToken')
    if (!authToken) {
      navigate('/login')
      return
    }
  }, [navigate])
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    country: 'United Kingdom (UK)',
    streetAddress: '',
    streetAddressTwo: '',
    town: '',
    district: 'Alabama',
    zipCode: '',
    phone: '',
    email: '',
    orderNotes: '',
    couponCode: ''
  })

  const [couponApplied, setCouponApplied] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleApplyCoupon = (e) => {
    e.preventDefault()
    if (formData.couponCode.trim()) {
      setCouponApplied(true)
    }
  }

  const handlePlaceOrder = (e) => {
    e.preventDefault()
    console.log('Order placed with:', formData)
  }

  const countries = [
    'United Kingdom (UK)',
    'United States (US)',
    'Turkey',
    'Saudi Arabia',
    'Portugal'
  ]

  const districts = [
    'Alabama',
    'Alaska',
    'Arizona',
    'California',
    'New York'
  ]

  const products = [
    { name: 'Antiaging and Longevity', quantity: 1, price: 19.99 }
  ]

  const subtotal = products.reduce((sum, p) => sum + (p.price * p.quantity), 0)

  return (
    <Layout title="Checkout">
      <section className="checkout-area section-py-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="coupon-area">
                <div className="coupon-toggle">
                  <input id="coupon-toggle" type="checkbox" />
                  <label htmlFor="coupon-toggle">
                    Have a coupon?
                    <a href="#" id="coupon-element">Click here to enter your code</a>
                  </label>
                </div>
                <form onSubmit={handleApplyCoupon} className="coupon__code-form">
                  <p>If you have a coupon code, please apply it below.</p>
                  <input
                    placeholder="Coupon code"
                    type="text"
                    name="couponCode"
                    value={formData.couponCode}
                    onChange={handleChange}
                  />
                  <button className="btn btn-sm" type="submit">Apply coupon</button>
                </form>
              </div>
            </div>
            <div className="col-lg-7">
              <form onSubmit={handlePlaceOrder} className="customer__form-wrap">
                <span className="title">Billing Details</span>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-grp">
                      <label htmlFor="first-name">First name *</label>
                      <input
                        id="first-name"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-grp">
                      <label htmlFor="last-name">Last name *</label>
                      <input
                        id="last-name"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-grp">
                  <label htmlFor="company-name">Company name (optional)</label>
                  <input
                    id="company-name"
                    name="companyName"
                    type="text"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-grp select-grp">
                  <label htmlFor="country-name">Country / Region *</label>
                  <select
                    className="country-name"
                    id="country-name"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  >
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
                <div className="form-grp">
                  <label htmlFor="street-address">Street address *</label>
                  <input
                    id="street-address"
                    name="streetAddress"
                    placeholder="House number and street name"
                    type="text"
                    value={formData.streetAddress}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-grp">
                  <input
                    id="street-address-two"
                    name="streetAddressTwo"
                    placeholder="Apartment, suite, unit, etc. (optional)"
                    type="text"
                    value={formData.streetAddressTwo}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-grp">
                  <label htmlFor="town-name">Town / City *</label>
                  <input
                    id="town-name"
                    name="town"
                    type="text"
                    value={formData.town}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-grp select-grp">
                  <label htmlFor="district-name">District *</label>
                  <select
                    className="district-name"
                    id="district-name"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                  >
                    {districts.map(district => (
                      <option key={district} value={district}>{district}</option>
                    ))}
                  </select>
                </div>
                <div className="form-grp">
                  <label htmlFor="zip-code">ZIP Code *</label>
                  <input
                    id="zip-code"
                    name="zipCode"
                    type="text"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-grp">
                      <label htmlFor="phone">Phone *</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-grp">
                      <label htmlFor="email">Email address *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <span className="title title-two">Additional Information</span>
                <div className="form-grp">
                  <label htmlFor="note">Order notes (optional)</label>
                  <textarea
                    id="note"
                    name="orderNotes"
                    placeholder="Notes about your order, e.g. special notes for delivery."
                    value={formData.orderNotes}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="col-lg-5">
              <div className="order__info-wrap">
                <h2 className="title">YOUR ORDER</h2>
                <ul className="list-wrap">
                  <li className="title">Product <span>Subtotal</span></li>
                  {products.map((product, idx) => (
                    <li key={idx}>{product.name} × {product.quantity} <span>${(product.price * product.quantity).toFixed(2)}</span></li>
                  ))}
                  <li>Subtotal <span>${subtotal.toFixed(2)}</span></li>
                  <li>Total <span>${subtotal.toFixed(2)}</span></li>
                </ul>
                <p>Sorry, it seems that there are no available payment methods for your state. Please contact us if you require assistance or wish to make alternate arrangements.</p>
                <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <Link to="/privacy-policy">privacy policy.</Link></p>
                <button className="btn btn-sm" onClick={handlePlaceOrder}>Place order</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
