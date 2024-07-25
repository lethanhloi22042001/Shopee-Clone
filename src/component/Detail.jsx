/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "../axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [data, setData] = useState("");
  const [comment, setComment] = useState("");
  const [idRely, setIdRely] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost/laravel8/public/api/blog/detail/${id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {});
  }, [id]);
  return (
    <>
      <div className="col-sm-9">
        <div className="blog-post-area">
          <h2 className="title text-center">{data?.title}</h2>
          <div className="single-blog-post">
            <h3>{data?.description}</h3>
            <div className="post-meta">
              <ul>
                <li>
                  <i className="fa fa-user"></i> Mac Doe
                </li>
                <li>
                  <i className="fa fa-clock-o"></i> 1:33 pm
                </li>
                <li>
                  <i className="fa fa-calendar"></i> DEC 5, 2013
                </li>
              </ul>
              <span>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
              </span>
            </div>
            <a href="">
              <img src="images/blog/blog-one.jpg" alt="" />
            </a>
            {/*  */}
            <div dangerouslySetInnerHTML={{ __html: data.content }}/>
            <div className="pager-area">
              <ul className="pager pull-right">
                <li>
                  <a href="#">Pre</a>
                </li>
                <li>
                  <a href="#">Next</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

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
            <img
              className="media-object"
              src="images/blog/man-one.jpg"
              alt=""
            />
          </a>
          <div className="media-body">
            <h4 className="media-heading">Annie Davis</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
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
                <textarea name="message" rows="11"></textarea>
                <a className="btn btn-primary" href="">
                  post comment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
