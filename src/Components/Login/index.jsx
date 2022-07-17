import { useState } from "react";
import axios from "axios";
import Logo from "./../../Assets/images/logo.png";
import "./Login.css";

const BASE_URL = "http://localhost:9001/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${BASE_URL}/login`, {
        email,
        password,
      });
      alert("Login successfully!");
    } catch (error) {
      alert(error.response.data.message);
      console.error(
        "🚀 ~ file: index.jsx ~ line 17 ~ handleSubmit ~ error",
        error
      );
    }
  };

  return (
    <div className="login-wrapper">
      <div className="leftside-container">
        {/* <div className="box-wrapepr"></div> */}
        <header>
          <img src={Logo} className="logo" />
          <span className="logo-name">Feel Home</span>
        </header>
        <div className="img-building" />
      </div>
      <div className="rightside-container">
        <div className="wrapper">
          <div className="welcome-back">Welcome Back!!!</div>
          <div className="signin-back">Signin Back</div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                value={password}
                name="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button className="signin-btn" type="submit">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
