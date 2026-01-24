import React, { useState } from 'react'
import Layout from '../components/Layout'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../utils/api'

export default function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })

  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!formData.password.trim()) newErrors.password = 'Password is required'

    if (Object.keys(newErrors).length === 0) {
      submitLogin()
    } else {
      setErrors(newErrors)
    }
  }

  const submitLogin = async () => {
    setLoading(true)
    setErrors({})
    setSuccessMessage('')

    try {
      const response = await loginUser({
        email: formData.email,
        password: formData.password
      })

      // Store token and user data if provided by API
      if (response.token) {
        localStorage.setItem('authToken', response.token)
      }
      if (response.user) {
        localStorage.setItem('user', JSON.stringify(response.user))
      }

      setSuccessMessage('Login successful! Redirecting...')
      setFormData({
        email: '',
        password: '',
        rememberMe: false
      })

      setTimeout(() => {
        navigate('/shop') // or wherever you want to redirect after login
      }, 1500)
    } catch (error) {
      setErrors({ submit: error.message || 'Login failed. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout title="Login">
      <section className="singUp-area section-py-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="singUp-wrap">
                <h2 className="title">Welcome To Us!</h2>
                <p>Hey there! Ready to log in? Just enter your username and password below and you'll be back in action in no time. Let's go!</p>
                <div className="account__social">
                  <a className="account__social-btn" href="#">
                    <img alt="img" src="/assets/img/icons/google.svg" />
                    Continue with google
                  </a>
                </div>
                <div className="account__divider">
                  <span>or</span>
                </div>
                <form onSubmit={handleSubmit} className="account__form">
                  {successMessage && <div style={{ color: 'green', marginBottom: '15px', padding: '10px', backgroundColor: '#e8f5e9', borderRadius: '5px' }}>{successMessage}</div>}
                  {errors.submit && <div style={{ color: 'red', marginBottom: '15px', padding: '10px', backgroundColor: '#ffebee', borderRadius: '5px' }}>{errors.submit}</div>}
                  <div className="form-grp">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      placeholder="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={loading}
                    />
                    {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}
                  </div>
                  <div className="form-grp">
                    <label htmlFor="password">Password</label>
                    <input
                      id="password"
                      name="password"
                      placeholder="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      disabled={loading}
                    />
                    {errors.password && <small style={{ color: 'red' }}>{errors.password}</small>}
                  </div>
                  <div className="account__check">
                    <div className="account__check-remember">
                      <input
                        className="form-check-input"
                        id="terms-check"
                        name="rememberMe"
                        type="checkbox"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                        disabled={loading}
                      />
                      <label className="form-check-label" htmlFor="terms-check">Remember me</label>
                    </div>
                    <div className="account__check-forgot">
                      <a href="/reset-password">Forgot Password?</a>
                    </div>
                  </div>
                  <button className="btn btn-two btn-sm" style={{ borderRadius: '5px' }} type="submit" disabled={loading}>
                    {loading ? 'Signing In...' : 'Sign In'}
                  </button>
                </form>
                <div className="account__switch">
                  <p>Don't have an account?<Link to="/register">Sign Up</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
