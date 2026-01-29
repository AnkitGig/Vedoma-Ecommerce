import React, { useState } from 'react'
import Layout from '../components/Layout'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../utils/api'

export default function Register() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters'
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match'

    if (Object.keys(newErrors).length === 0) {
      submitRegistration()
    } else {
      setErrors(newErrors)
    }
  }

  const submitRegistration = async () => {
    setLoading(true)
    setErrors({})
    setSuccessMessage('')

    try {
      const response = await registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password
      })

      setSuccessMessage('Registration successful! Redirecting to login...')
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      })

      setTimeout(() => {
        navigate('/login')
      }, 2000)
    } catch (error) {
      setErrors({ submit: error.message || 'Registration failed. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout title="Register">
      <section className="singUp-area section-py-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-8">
              <div className="singUp-wrap">
                <h2 className="title">Create Your Account</h2>
                <p>Hey there! Ready to join the party? We just need a few details from you to get started. Let's do this!</p>
                <div className="account__social">
                  <a className="account__social-btn" href="#">
                    <img alt="VEDOMA Herbal Pain Relief Oil for Joint and Muscle Pain Vedoma Store" src="/assets/img/icons/google.svg" />
                    Continue with google
                  </a>
                </div>
                <div className="account__divider">
                  <span>or</span>
                </div>
                <form onSubmit={handleSubmit} className="account__form">
                  {successMessage && <div style={{ color: 'green', marginBottom: '15px', padding: '10px', backgroundColor: '#e8f5e9', borderRadius: '5px' }}>{successMessage}</div>}
                  {errors.submit && <div style={{ color: 'red', marginBottom: '15px', padding: '10px', backgroundColor: '#ffebee', borderRadius: '5px' }}>{errors.submit}</div>}
                  <div className="row gutter-20">
                    <div className="col-md-6">
                      <div className="form-grp">
                        <label htmlFor="name">Full Name</label>
                        <input
                          id="name"
                          name="name"
                          placeholder="Full Name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          disabled={loading}
                        />
                        {errors.name && <small style={{ color: 'red' }}>{errors.name}</small>}
                      </div>
                    </div>
                   
                  </div>
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
                  <div className="form-grp">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input
                      id="confirm-password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      disabled={loading}
                    />
                    {errors.confirmPassword && <small style={{ color: 'red' }}>{errors.confirmPassword}</small>}
                  </div>
                  <button className="btn btn-two btn-sm" style={{ borderRadius: '5px' }} type="submit" disabled={loading}>
                    {loading ? 'Signing Up...' : 'Sign Up'}
                  </button>
                </form>
                <div className="account__switch">
                  <p>Already have an account?<Link to="/login">Login</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
