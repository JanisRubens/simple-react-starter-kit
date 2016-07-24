class Auth {

  static authenticateUser(token) {
    localStorage.setItem('x-auth-token', token);
  }

  static isUserAuthenticated() {
    return localStorage.getItem('x-auth-token') !== null;
  }

  static deauthenticateUser() {
    localStorage.removeItem('x-auth-token');
  }

  static getToken() {
    return localStorage.getItem('x-auth-token');
  }

}

export default Auth;