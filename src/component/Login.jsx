import axios from "../axios";
import { useCallback, useEffect, useMemo, useState } from "react";
function Login() {
  const [getData, setGetData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });

  const getValueInput = useCallback(
    (e) => {
      setGetData({ ...getData, [e.target.name]: e.target.value });
    },
    [getData]
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !getData.name ||
      !getData.email ||
      !getData.password ||
      !getData.address ||
      !getData.phone
    ) {
      console.log("Vui lòng điền đầy đủ thông tin");
    } else {
      axios
        .post("http://localhost/laravel8/public/api/register", getData)
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {}, [getData, getValueInput]);
  return (
    <>
      <section id="form">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-sm-offset-1">
              <div className="login-form">
                <h2>Login to your account</h2>
                <form action="#">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email Address" />
                  <span>
                    <input type="checkbox" className="checkbox" />
                    Keep me signed in
                  </span>
                  <button type="submit" className="btn btn-default">
                    Login
                  </button>
                </form>
              </div>
            </div>
            <div className="col-sm-1">
              <h2 className="or">OR</h2>
            </div>
            <div className="col-sm-4">
              <div className="signup-form">
                <h2>New User Signup!</h2>
                <form action="#/">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Name"
                    onChange={getValueInput}
                    value={getData.inputName}
                    name="name"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    onChange={getValueInput}
                    value={getData.email}
                    name="email"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={getValueInput}
                    value={getData.password}
                    name="password"
                  />
                  <input
                    type="text"
                    placeholder="Text"
                    onChange={getValueInput}
                    value={getData.address}
                    name="address"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    onChange={getValueInput}
                    value={getData.phone}
                    name="phone"
                  />
                  <button
                    type="submit"
                    className="btn btn-default"
                    onClick={handleSubmit}
                  >
                    Signup
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
