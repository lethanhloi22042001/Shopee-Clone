import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { Rating } from "react-simple-star-rating";
import { userImageUrl } from "../../constants/image";
import { getUserImg } from "../../helper";
function DetailComment({
  idBlog,
  dataCommentParent,
  setComments,
  getDataTestFNC,
}) {
  const { id } = useParams();
  const containerRef = useRef(null);
  const dataLocalStorage = localStorage.getItem("login");
  const convertDataLocal = JSON.parse(dataLocalStorage);
  const [isSubmitedData, setISubmitedData] = useState(null);
  const [valueComment, setValueComment] = useState("");
  const [rating, setRating] = useState(0);
  const [idReply, setIdReply] = useState(Number);
  let navigate = useNavigate();

  let config = {
    headers: {
      Authorization: "Bearer " + convertDataLocal?.token,
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
  };

  const handleRating = (rate) => {
    setRating(rate);
    getDataTestFNC(rate);
  };
  const handleReply = (idParent) => {
    containerRef.current.focus();
    setIdReply(idParent);
  };
  const handleOnchangeCommnet = (value) => {
    setValueComment(value);
  };
  const handleSubmitComment = (dataLocalStorage) => {
    let convertDataLocal = JSON.parse(dataLocalStorage);
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
        id_comment: idReply ? idReply : 0,
        comment: valueComment,
        image_user: convertDataLocal?.Auth.avatar,
        // image_user: `http://localhost/laravel/../public/upload/Blog/image/${convertDataLocal?.Auth.avatar}`,
      };
      api
        .post(`/blog/comment/${idBlog}`, dataSubmit, config)
        .then((result) => {
          toast("Đã Comment Thành Công");
          setValueComment("");
          api
            .get(`/blog/detail/${id}`)
            .then((res) => {
              setComments(res.data.comment);
              console.log(res);
            })
            .catch((err) => {});
        })
        .catch((err) => {});
    }
  };
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
        <a className="pull-left" href="#/">
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
        <h2>{dataCommentParent.length} RESPONSES</h2>
        <ul className="media-list">
          {dataCommentParent ? (
            dataCommentParent?.map((itemParent, index) => {
              return (
                <>
                  {itemParent.id_comment === 0 && (
                    <li className="media">
                      <a className="pull-left" href="#">
                        <img
                          className="media-object"
                          src={getUserImg(itemParent.image_user)}
                          alt="Waiting img"
                        />
                      </a>
                      <div className="media-body">
                        <ul className="sinlge-post-meta">
                          <li>
                            <i className="fa fa-user"></i>
                            {itemParent.name_user}
                          </li>
                          <li>
                            <i className="fa fa-clock-o"></i> 1:33 pm
                          </li>
                          <li>
                            <i className="fa fa-calendar"></i> DEC 5, 2013
                          </li>
                        </ul>
                        <p>{itemParent.comment}</p>
                        <a
                          className="btn btn-primary"
                          href="#/"
                          onClick={() => {
                            handleReply(itemParent.id);
                          }}
                        >
                          <i className="fa fa-reply"></i>
                          Replay
                        </a>
                      </div>
                    </li>
                  )}

                  {dataCommentParent
                    .filter(
                      (itemChild) => itemParent.id === itemChild.id_comment
                    )
                    .map((item) => (
                      <>
                        <li className="media second-media">
                          <a
                            className="pull-left"
                            href="#/"
                            style={{ height: "200px" }}
                          >
                            <img
                              className="media-object"
                              src={getUserImg(item.image_user)}
                              alt=""
                            />
                          </a>
                          <div className="media-body">
                            <ul className="sinlge-post-meta">
                              <li>
                                <i className="fa fa-user"></i>
                                {item.name_user}
                              </li>
                              <li>
                                <i className="fa fa-clock-o"></i> 1:33 pm
                              </li>
                              <li>
                                <i className="fa fa-calendar"></i> DEC 5, 2013
                              </li>
                            </ul>
                            <p>{item.comment}</p>
                            <a
                              className="btn btn-primary"
                              onClick={() => {
                                handleReply(item.id);
                              }}
                              href="/"
                            >
                              <i className="fa fa-reply"></i>
                              Replay
                            </a>
                          </div>
                        </li>
                      </>
                    ))}
                </>
              );
            })
          ) : (
            <></>
          )}
        </ul>
      </div>
      <div className="replay-box">
        <div className="row">
          <div className="col-sm-12">
            <h2>Leave a replay</h2>

            <div className="text-area">
              <div className="blank-arrow">
                <label>{convertDataLocal?.Auth.name}</label>
              </div>
              <span>*</span>
              <Rating onClick={handleRating} />
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
                ref={containerRef}
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
