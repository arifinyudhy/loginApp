const server = 'http://localhost:6733/'
const serverURL = {
  odata: server + 'odata/',
  webAPI: server + 'api/'
}
export const URLodata = {
  user: serverURL.odata + 'Users',
  car: serverURL.odata + 'Cars',
}
export const URLApi = {
  apiLogin: serverURL.webAPI + 'Login',
}
