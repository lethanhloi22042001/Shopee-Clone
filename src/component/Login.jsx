import axios from "../axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { api } from "../services/api";
function Login() {
  const [getData, setGetData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    avatar: "",
    level: "",
  });
  const [avatar, setAvatar] = useState("");
  const [file, setFile] = useState("");

  const [selectedImage, setSelectedImage] = useState(null);

  const getValueInput = (e) => {
    const { value, name } = e.target;

    setGetData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // setGetData({ ...getData, [e.target.name]: e.target.value });
  };
  function handleUserInputFile(e) {
    const file = e.target.files;
    console.log("this is file is picked", file);
    // Send file to API server
    let reader = new FileReader();
    reader.onload = (e) => {
      const { result } = e.target;
      setAvatar(result); // send data to API
      setGetData((prevState) => ({
        ...prevState,
        avatar: result,
      }));
      setFile(file[0]); // data of the picture
      console.log(file);
    };
    reader.readAsDataURL(file[0]);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !getData.name ||
      !getData.email ||
      !getData.password ||
      !getData.address ||
      !getData.phone ||
      !file?.name
      // !Object.keys(file).length
    ) {
      console.log("Vui lòng điền đầy đủ thông tin");
    } else {
      const { size, type } = file;
      console.log(type);
      if (size >= 1048576) {
        console.log("Vui lòng load ảnh dưới 1MB");
        setAvatar("");
        setFile("");
      }
      if (!type.includes("image")) {
        console.log("vui lòng chọn loại là hình ảnh");
      }
      api
        .post("/register", getData)
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {}, [getData, avatar, file]);
  return (
    <>
      <button
        onClick={() => {
          setGetData((prev) => ({
            ...prev,
            name: "",
          }));
        }}
      >
        Reset Name
      </button>
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
                    value={getData.name}
                    className="form-control"
                    type="text"
                    placeholder="Name"
                    onChange={getValueInput}
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
                    placeholder="Address"
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
                  {/* IMAGE */}
                  <div>
                    {selectedImage && (
                      <div>
                        {/* Display the selected image */}
                        <img
                          alt="not found"
                          width={"250px"}
                          src={URL.createObjectURL(selectedImage)}
                        />
                        <br /> <br />
                        {/* Button to remove the selected image */}
                        <button onClick={() => setSelectedImage(null)}>
                          Remove
                        </button>
                      </div>
                    )}
                    <br />
                    {/* Input element to select an image file */}
                    <input
                      type="file"
                      name="avatar"
                      onChange={(event) => {
                        handleUserInputFile(event);
                      }}
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Level"
                    onChange={getValueInput}
                    value={getData.phone}
                    name="level"
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
