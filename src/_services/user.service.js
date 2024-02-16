const API_URL = 'http://localhost:3001/api/v1/'

export const userService = {
  login,
  getUser,
  editUser,
}

async function login(email, password) {
  try {
    const res = await fetch(`${API_URL}user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    if (res.ok) {
      const data = await res.json()
      return data.body
    } else {
      throw new Error('Erreur lors de la connection')
    }
  } catch (error) {
    throw error
  }
}

async function getUser(token) {
  try {
    const res = await fetch(`${API_URL}user/profile`, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    })

    const data = await res.json()
    return data.body
  } catch (error) {
    throw error
  }
}

async function editUser(firstName, lastName, token) {
  try {
    const res = await fetch(`${API_URL}user/profile`, {
      method: 'PUT',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName }),
    })
    if (res.ok) {
      const data = await res.json()
      return data.body
    } else {
      throw new Error("Erreur lors de la modification de l'utilisateur")
    }
  } catch (error) {
    throw error
  }
}
