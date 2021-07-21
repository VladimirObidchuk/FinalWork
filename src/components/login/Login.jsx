import { useState } from "react";
import Modal from "../modalWin/ModalWin";
import ModalText from "../modalText/ModalText";
import "./Login.scss";

function Login() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);
  const [error, setError] = useState(null);
  const [login, setLogin] = useState(false);
  const [password, setPassword] = useState(false);

  const handleChangLogin = (e) => {
    const login = e.target.value;
    setLogin(login);
    if (!login) {
      setError(true);
    } else {
      setError(null);
    }
  };

  const handleChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
    if (!password) {
      setError(true);
    } else {
      setError(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!login || !password) {
      return setError("Fields is required");
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
      setTimeout(() => {
        setMessage(true);
      }, 3000);
      setTimeout(() => {
        setMessage(false);
      }, 8000);
    }
  };

  return (
    <div class="login__menu" id="login__menu">
      <div class="login__main">
        <form
          action="#"
          method="get"
          id="login__form"
          class="login__form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="login__name"
            class="login__name"
            id="login__name"
            placeholder=" Enter Login"
            onChange={handleChangLogin}
          />
          <input
            type="password"
            name="login__password"
            id="login__password"
            class="login__password"
            placeholder="Enter password"
            onChange={handleChangePassword}
          />
          {error && <span className="error__email">{error}</span>}
          <input
            type="submit"
            value="Submit"
            id="login__submit"
            class="login__submit"
            onClick={handleSubmit}
          />
          {loading && <Modal />}
          {message && <ModalText value="Logged in" />}
        </form>
      </div>
    </div>
  );
}
export default Login;
