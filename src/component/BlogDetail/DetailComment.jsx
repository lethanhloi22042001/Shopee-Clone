import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
function DetailComment({ idBlog }) {
  let dataLocalStorage = localStorage.getItem("login");
  let convertDataLocal = JSON.parse(dataLocalStorage);
  let navigate = useNavigate();
  let config = {
    headers: {
      Authorization: "Bearer " + convertDataLocal?.token,
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
  };

  const [valueComment, setValueComment] = useState("");

  const handleOnchangeCommnet = (value) => {
    setValueComment(value);
  };
  const handleSubmitComment = (dataLocalStorage) => {
    let convertDataLocal = JSON.parse(dataLocalStorage);
    console.log(convertDataLocal);
    if (!convertDataLocal?.token) {
      toast("Vui lòng đăng nhập");
      navigate("/login");
    } else {
      if (!valueComment) {
        toast("Vui lòng nhập bình luận");
      }
      let dataSubmit = {};
      dataSubmit = {
        ...dataSubmit,
        id_blog: idBlog,
        id_user: convertDataLocal?.Auth.id,
        name_user: convertDataLocal?.Auth.name,
        id_comment: convertDataLocal?.Auth.level,
        comment: valueComment,
        image_user: `http://localhost/laravel/../public/upload/Blog/image/${convertDataLocal?.Auth.avatar}`,
      };
      console.log("dataSubmit", dataSubmit, config);
      api
        .post(`/blog/comment/${idBlog}`, dataSubmit)
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {});
    }
  };

  useEffect(() => {}, []);
  return (
    <>
      <div className="rating-area">
        <ul className="ratings">
          <li className="rate-this">Rate this item:</li>
          <li>
            <i className="fa fa-star color"></i>
            <i className="fa fa-star color"></i>
            <i className="fa fa-star color"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </li>
          <li className="color">(6 votes)</li>
        </ul>
        <ul className="tag">
          <li>TAG:</li>
          <li>
            <a className="color" href="">
              Pink <span>/</span>
            </a>
          </li>
          <li>
            <a className="color" href="">
              T-Shirt <span>/</span>
            </a>
          </li>
          <li>
            <a className="color" href="">
              Girls
            </a>
          </li>
        </ul>
      </div>

      <div className="socials-share">
        <a href="">
          <img src="images/blog/socials.png" alt="" />
        </a>
      </div>

      <div className="media commnets">
        <a className="pull-left" href="#">
          <img className="media-object" src="images/blog/man-one.jpg" alt="" />
        </a>
        <div className="media-body">
          <h4 className="media-heading">Annie Davis</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="blog-socials">
            <ul>
              <li>
                <a href="">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-dribbble"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-google-plus"></i>
                </a>
              </li>
            </ul>
            <a className="btn btn-primary" href="">
              Other Posts
            </a>
          </div>
        </div>
      </div>
      <div className="response-area">
        <h2>3 RESPONSES</h2>
        <ul className="media-list">
          <li className="media">
            <a className="pull-left" href="#">
              <img
                className="media-object"
                src="images/blog/man-two.jpg"
                alt=""
              />
            </a>
            <div className="media-body">
              <ul className="sinlge-post-meta">
                <li>
                  <i className="fa fa-user"></i>Janis Gallagher
                </li>
                <li>
                  <i className="fa fa-clock-o"></i> 1:33 pm
                </li>
                <li>
                  <i className="fa fa-calendar"></i> DEC 5, 2013
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <a className="btn btn-primary" href="">
                <i className="fa fa-reply"></i>Replay
              </a>
            </div>
          </li>
          <li className="media second-media">
            <a className="pull-left" href="#">
              <img
                className="media-object"
                src="images/blog/man-three.jpg"
                alt=""
              />
            </a>
            <div className="media-body">
              <ul className="sinlge-post-meta">
                <li>
                  <i className="fa fa-user"></i>Janis Gallagher
                </li>
                <li>
                  <i className="fa fa-clock-o"></i> 1:33 pm
                </li>
                <li>
                  <i className="fa fa-calendar"></i> DEC 5, 2013
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <a className="btn btn-primary" href="">
                <i className="fa fa-reply"></i>Replay
              </a>
            </div>
          </li>
          <li className="media second-media">
            <a className="pull-left" href="#">
              <img
                className="media-object"
                src="images/blog/man-three.jpg"
                alt=""
              />
            </a>
            <div className="media-body">
              <ul className="sinlge-post-meta">
                <li>
                  <i className="fa fa-user"></i>Janis Gallagher
                </li>
                <li>
                  <i className="fa fa-clock-o"></i> 1:33 pm
                </li>
                <li>
                  <i className="fa fa-calendar"></i> DEC 5, 2013
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <a className="btn btn-primary" href="">
                <i className="fa fa-reply"></i>Replay
              </a>
            </div>
          </li>
          <li className="media second-media">
            <a className="pull-left" href="#">
              <img
                className="media-object"
                src="images/blog/man-three.jpg"
                alt=""
              />
            </a>
            <div className="media-body">
              <ul className="sinlge-post-meta">
                <li>
                  <i className="fa fa-user"></i>Janis Gallagher
                </li>
                <li>
                  <i className="fa fa-clock-o"></i> 1:33 pm
                </li>
                <li>
                  <i className="fa fa-calendar"></i> DEC 5, 2013
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <a className="btn btn-primary" href="">
                <i className="fa fa-reply"></i>Replay
              </a>
            </div>
          </li>
          <li className="media">
            <a className="pull-left" href="#">
              <img
                className="media-object"
                src="images/blog/man-four.jpg"
                alt=""
              />
            </a>
            <div className="media-body">
              <ul className="sinlge-post-meta">
                <li>
                  <i className="fa fa-user"></i>Janis Gallagher
                </li>
                <li>
                  <i className="fa fa-clock-o"></i> 1:33 pm
                </li>
                <li>
                  <i className="fa fa-calendar"></i> DEC 5, 2013
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <a className="btn btn-primary" href="">
                <i className="fa fa-reply"></i>Replay
              </a>
            </div>
          </li>
          <li className="media second-media">
            <a className="pull-left" href="#">
              <img
                className="media-object"
                src="images/blog/man-three.jpg"
                alt=""
              />
            </a>
            <div className="media-body">
              <ul className="sinlge-post-meta">
                <li>
                  <i className="fa fa-user"></i>Janis Gallagher
                </li>
                <li>
                  <i className="fa fa-clock-o"></i> 1:33 pm
                </li>
                <li>
                  <i className="fa fa-calendar"></i> DEC 5, 2013
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <a className="btn btn-primary" href="">
                <i className="fa fa-reply"></i>Replay
              </a>
            </div>
          </li>
          <li className="media second-media">
            <a className="pull-left" href="#">
              <img
                className="media-object"
                src="images/blog/man-three.jpg"
                alt=""
              />
            </a>
            <div className="media-body">
              <ul className="sinlge-post-meta">
                <li>
                  <i className="fa fa-user"></i>Janis Gallagher
                </li>
                <li>
                  <i className="fa fa-clock-o"></i> 1:33 pm
                </li>
                <li>
                  <i className="fa fa-calendar"></i> DEC 5, 2013
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <a className="btn btn-primary" href="">
                <i className="fa fa-reply"></i>Replay
              </a>
            </div>
          </li>
          <li className="media second-media">
            <a className="pull-left" href="#">
              <img
                className="media-object"
                src="images/blog/man-three.jpg"
                alt=""
              />
            </a>
            <div className="media-body">
              <ul className="sinlge-post-meta">
                <li>
                  <i className="fa fa-user"></i>Janis Gallagher
                </li>
                <li>
                  <i className="fa fa-clock-o"></i> 1:33 pm
                </li>
                <li>
                  <i className="fa fa-calendar"></i> DEC 5, 2013
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <a className="btn btn-primary" href="">
                <i className="fa fa-reply"></i>Replay
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div className="replay-box">
        <div className="row">
          <div className="col-sm-12">
            <h2>Leave a replay</h2>

            <div className="text-area">
              <div className="blank-arrow">
                <label>Your Name</label>
              </div>
              <span>*</span>
              <textarea
                name="message"
                rows="11"
                value={valueComment}
                onChange={(e) => {
                  handleOnchangeCommnet(e.target.value);
                }}
              ></textarea>
              <a
                className="btn btn-primary"
                onClick={() => handleSubmitComment(dataLocalStorage)}
                href="#/"
              >
                Post Comment
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailComment;
