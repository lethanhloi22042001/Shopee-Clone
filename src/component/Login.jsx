import axios from "../axios";
import { useEffect, useRef, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import LoginComponent from "./LoginComponent";
function Login() {
  const navigate = useNavigate();

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
    setGetData((pre) => ({ ...pre, [name]: value }));
  };

  var fileInputRef = useRef(null);

  function handleUserInputFile(e) {
    const file = e.target.files;
    // Send file to API server
    let reader = new FileReader();
    reader.onload = (e) => {
      const { result } = e.target;
      setAvatar(result); // send data to API
      setGetData((prevState) => ({
        ...prevState,
        avatar: result,
      }));
      setFile(file[0]); // data of the picture {size , type... of Picture}
      console.log("file", file);
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
      }
      if (!type.includes("image")) {
        console.log("vui lòng chọn loại là hình ảnh");
      }
      api
        .post("/register", getData)
        .then((res) => {
          toast.success("Register successfully!");
        })
        .catch((err) => {
          toast.error("Error");
          console.log(err);
        });

      setFile(null);
      setSelectedImage(null);
    }
  };

  useEffect(() => {}, [getData, avatar, file, selectedImage, fileInputRef]);
  return (
    <>
      <section id="form">
        <div className="container">
          <div className="row">
            <LoginComponent />
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
                  <div style={{}}>
                    <input
                      className="customFileInput"
                      type="file"
                      name="avatar"
                      onChange={(event) => {
                        handleUserInputFile(event);
                        setSelectedImage(event.target.files[0]);
                      }}
                      id="uploadBtn"
                      ref={fileInputRef}
                    />
                    <label id="labelUploadBtn" htmlFor="uploadBtn">
                      Choose Image {"<"} 1MB{" "}
                    </label>
                  </div>
                  <div
                    className="showAvatar"
                    // minWidth={"360px"}
                    // minHeight={"200px"}
                  >
                    {selectedImage && (
                      <div>
                        <img
                          id="imgShowavatar"
                          alt="not found"
                          width={"250px"}
                          src={URL.createObjectURL(selectedImage)}
                        />
                        <button
                          onClick={() => {
                            setSelectedImage(null);
                            if (fileInputRef.current.value) {
                              fileInputRef.current.value = "";
                            }
                          }}
                          id="btnRemove"
                        >
                          Remove
                        </button>
                      </div>
                    )}
                  </div>
                  <input
                    type="text"
                    placeholder="Level"
                    onChange={getValueInput}
                    value={getData.level}
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
