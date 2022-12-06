class Auth {
  async getUser() {
    try {
      let apiUrl = 'https://jsonplaceholder.typicode.com/users/1';
      const response = await fetch('', { method:'GET', crednetials: 'same-origin'});
      const user =  await response.json();
      return user;  
    } catch (e) {
      throw(e);
    }
  }
}

export default Auth;