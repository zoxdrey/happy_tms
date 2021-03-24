import { useHistory } from "react-router-dom";
import Button from "../components/Button";

export default function Auth() {
  const fullYear = new Date().getFullYear();
  let history = useHistory();

  const login = () => {
    console.log("enter");
    history.push("/");
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
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
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
