import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/Button";
import axiosService from "../services/auth.service";

export default function Auth() {
  const fullYear = new Date().getFullYear();
  let history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = () => {
    console.log("enter");
    axiosService.login(username, password);
    //history.push("/");
  };

  return (
    <div className="form-signin">
      <form>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <Button loginEvent={login} name="Sing in" />
        <p className="mt-5 mb-3 text-muted">&copy; {fullYear}</p>
      </form>
    </div>
  );
}
