import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./components/Button";
import InputField from "./components/InputField";
import "./styles/login.css";
import logo from "./img/kv logo.png";
import sideImg from "./img/sideImg.png";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({ username: "", password: "" });
  const onChange = (name, value) => {
    console.log(name, value);
    setLoginInfo((prev) => {
      console.log(prev);
      return { ...prev, [name]: value };
    });
  };
  const navigate = useNavigate();
  return (
    <>  
      <div className="login-page">
        <div className="login-part img">
          <img src={sideImg} alt="" width="97%" height="97%" />
        </div>
        <div className="login-part form">
          <img src={logo} alt="KeyValue Logo" width="209" height="45" />
          <div className="login-form">
            <InputField
              label=""
              type="text"
              placeholder="Username"
              name="username"
              onChange={onChange}
            />
            <InputField
              label=""
              type="password"
              placeholder="Password"
              name="password"
              onChange={onChange}
            />

            <Button
              label="Login In"
              className="loginb"
              handleClick={() => navigate("/employees")}
            />
          </div>
          {console.log(loginInfo)}
        </div>
      </div>
    </>
  );
};

export default Login;