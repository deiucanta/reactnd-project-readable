const base = 'http://localhost:5001'
const auth = 'me'

export default {
  get(endpoint) {
    const options = {
      method: 'GET',
      headers: {
        'Authorization': auth,
        'Content-Type': 'application/json',
      }
    }
    return fetch(base + endpoint, options).then(res => res.json())
  },
  post(endpoint, data) {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Authorization': auth,
        'Content-Type': 'application/json',
      }
    }
    return fetch(base + endpoint, options).then(res => res.json())
  },
  put(endpoint, data) {
    const options = {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Authorization': auth,
        'Content-Type': 'application/json',
      }
    }
    return fetch(base + endpoint, options).then(res => res.json())
  },
  delete(endpoint, data) {
    const options = {
      method: 'DELETE',
      headers: {
        'Authorization': auth,
        'Content-Type': 'application/json',
      }
    }
    return fetch(base + endpoint, options)
  }
}
