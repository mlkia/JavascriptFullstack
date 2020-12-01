import http from '../API'

const getAllUseres = () => {
  return http.get ('/user')
}

const createNewUser = (credentials) => {
  return http.post ('/user',credentials)
}

export default {
  getAllUseres,
  createNewUser
}
