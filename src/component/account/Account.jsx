import React, { useEffect, useState } from "react";

function Account() {
  const dataLocal = localStorage.getItem("login");
  const converUserLocal = JSON.parse(dataLocal);
  // const [isSelectedPicture, setIsSelectedPicture] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  console.log(selectedImage);
  const [avatar, setAvatar] = useState("");
  const [file, setFile] = useState("");
  const [userInf, setUserInf] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    avatar: "",
    level: "",
  });

  const getValueInput = (e) => {
    const { name, value } = e.target;
    setUserInf((preState) => ({ ...preState, [name]: value }));
  };
  const handleIMG = (e) => {
    setSelectedImage(e.target.files);
  };
  useEffect(() => {
    setUserInf({
      ...converUserLocal?.Auth,
      avatar: `http://localhost/public/upload/Blog/image/${converUserLocal?.Auth?.avatar}`,
    });
  }, []);
  return (
    <section id="form">
      <div className="container">
        <div className="col-sm-6">
          <div className="signup-form">
            <h2>New User Signup!</h2>
            <form action="#/">
              <input
                value={userInf.name}
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
                value={userInf.email}
                name="email"
                readOnly
              />
              <input
                type="password"
                placeholder="Password"
                onChange={getValueInput}
                value={userInf.password}
                name="password"
              />
              <input
                type="text"
                placeholder="Address"
                onChange={getValueInput}
                value={userInf.address}
                name="address"
              />
              <input
                type="text"
                placeholder="Phone Number"
                onChange={getValueInput}
                value={userInf.phone}
                name="phone"
              />
              {/* IMAGE */}
              <div>
                <input
                  className="customFileInput"
                  type="file"
                  name="avatar"
                  id="uploadBtn"
                  onChange={(event) => {

                  }}
                />
                <label id="labelUploadBtn" htmlFor="uploadBtn">
                  Choose Image {"<"} 1MB{" "}
                </label>
              </div>
              <div className="showAvatar">
                <div>
                  {selectedImage}
                  <img
                    id="imgShowavatar"
                    alt="not found"
                    style={{ minHeight: "250px" }}
                  />
                  <button id="btnRemove">Remove</button>
                </div>
              </div>
              <input
                type="text"
                placeholder="Level"
                onChange={getValueInput}
                value={userInf.level}
                name="level"
              />
              <button
                type="submit"
                className="btn btn-default"
                // onClick={handleSubmit}
              >
                Signup
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Account;
