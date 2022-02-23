// import Cookies from "js-cookie";

const TokenKey = "Admin-Token";

export function getToken() {
  // return Cookies.get(TokenKey) || ''
  return localStorage.getItem(TokenKey) || "";
}

export function setToken(token: string) {
  // return Cookies.set(TokenKey, token, {
  //   expires: 7
  // })
  return localStorage.setItem(TokenKey, token);
}

export function removeToken() {
  // return Cookies.remove(TokenKey)
  return localStorage.removeItem(TokenKey);
}
