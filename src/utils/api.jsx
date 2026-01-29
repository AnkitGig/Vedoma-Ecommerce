const API_BASE_URL = 'http://api.vedomastore.com'

export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Registration failed')
    }

    return await response.json()
  } catch (error) {
    throw error
  }
}

export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Login failed')
    }

    return await response.json()
  } catch (error) {
    throw error
  }
}

export const getProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/products`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Failed to fetch products')
    }

    return await response.json()
  } catch (error) {
    throw error
  }
}

export const addToCart = async (cartData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/cart/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken') || ''}`
      },
      body: JSON.stringify(cartData)
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Failed to add to cart')
    }

    return await response.json()
  } catch (error) {
    throw error
  }
}

export const getCart = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/cart`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken') || ''}`
      }
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Failed to fetch cart')
    }

    return await response.json()
  } catch (error) {
    throw error
  }
}

export const updateCartItem = async (productId, qty) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/cart/update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken') || ''}`
      },
      body: JSON.stringify({ productId, qty })
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Failed to update cart')
    }

    return await response.json()
  } catch (error) {
    throw error
  }
}

export const removeFromCart = async (productId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/cart/remove`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken') || ''}`
      },
      body: JSON.stringify({ productId })
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Failed to remove from cart')
    }

    return await response.json()
  } catch (error) {
    throw error
  }
}
