/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "../../axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import DetailComment from "./DetailComment";
function Detail() {
  const { id } = useParams();
  const [data, setData] = useState("");
  const [comment, setComment] = useState("");
  const [idRely, setIdRely] = useState("");

  useEffect(() => {
    api
      .get(`/blog/detail/${id}`)
      .then((res) => {
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
              <img
                src={`http://localhost/laravel8/public/upload/Blog/image/${data.image}`}
                alt="Không có hình ảnh"
              />
            </a>
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
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

        <DetailComment idBlog={id}  ></DetailComment>
      </div>
    </>
  );
}

export default Detail;
