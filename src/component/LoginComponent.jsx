import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

function LoginComponent({ imgBlob, setImgBlob }) {
  const navigate = useNavigate();
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
    // levelLogin: "",
  });

  const handleGetDataLogin = (e) => {
    const { name, value } = e.target;
    setDataLogin((pre) => ({ ...pre, [name]: value }));
  };
  const handleSubmitLogin = (e) => {
    api
      .post("/login", dataLogin)
      .then((res) => {
        if (res?.errors) {
          toast.success("Register Error!");
          navigate("/login");
        } else {
          toast.success("Register successfully!");
          localStorage.setItem("login", JSON.stringify(res));
          navigate("/blog");
        }
      })
      .catch((err) => {
        toast.error("Error");
        // console.log(err);
      });

    e.preventDefault();
  };

  useEffect(() => {}, [dataLogin]);
  return (
    <div className="col-sm-4 col-sm-offset-1">
      <div className="login-form">
        <h2>Login to your account</h2>
        <form action="/">
          <input
            value={dataLogin.email}
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={handleGetDataLogin}
          />
          <input
            type="password"
            placeholder="Pass Word"
            name="password"
            value={dataLogin.password}
            onChange={handleGetDataLogin}
          />
          {/* <input
            type="evel"
            placeholder="Level"
            name="levelLogin"
            value={dataLogin.levelLogin}
            onChange={handleGetDataLogin}
          /> */}
          <span>
            <input type="checkbox" className="checkbox" />
            Keep me signed in
          </span>
          <button
            type="submit"
            className="btn btn-default"
            onClick={handleSubmitLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginComponent;
