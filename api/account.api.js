import qs from 'qs'
import axios from 'axios'
const baseURL = process.env.VUE_APP_WEB_URI
export const CheckLogin = () => {
  return axios({
    method: 'post',
    baseURL,
    url: 'Account/CheckLogin',
  })
}

/**
 * 沒綁定即登出
 */
export async function logout(obj, self) {
  const response = await self.$webApi.$post(
    `/Account/Logout`,
    qs.stringify(obj)
  )
  return response
}
