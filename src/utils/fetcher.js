import axios from 'axios'

const instanceAxios = axios.create({
  baseURL: 'https://www.reddit.com'
})

instanceAxios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    const code = error && error.response ? error.response.status : 0
    if (code === 401 || code === 403) {
      console.log('error code', code)
    }
    return Promise.reject(error)
  }
)

export default instanceAxios
