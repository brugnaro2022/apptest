import axios from 'axios'
const BASE_URL = 'http://localhost:3001'

import { history } from '../../helpers'

export function signin(values) {
  return dispatch => {
    axios
      .post(`${BASE_URL}/auth/signin`, values)
      .then(resp => {
        dispatch({
          type: 'USER_FETCHED',
          payload: resp.data
        })
        history.push('/')
      })
      .catch(e => {
        console.log(e.message)
      })
  }
}

export function signup(values) {
  axios.post(`${BASE_URL}/auth/signup`, values)
  return {
    type: 'TEMP'
  }
}
