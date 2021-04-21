import axios from "axios";

const API_URL = new URL("http://localhost:8080/api/auth/");

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "singin", { username, password })
      .then((response) => {
        console.log(response);
        if (response.data.acessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
