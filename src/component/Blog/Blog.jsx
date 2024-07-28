import React, { useEffect, useState } from "react";
import { Blog1 } from "../../images";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import BlogContaint from "./BlogContaint";

function Blog() {
  const [data, setData] = useState([]);
  const [image, setImage] = useState(null);
  useEffect(() => {
    api
      .get("/blog")
      .then((result) => {
        setData(result?.blog?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <div className="blog-post-area">
              {data ? (
                data.map((pro, index) => {
                  // Tạo component
                  return <BlogContaint props={pro} index={index} />;
                })
              ) : (
                <></>
              )}
              <div className="pagination-area">
                <ul className="pagination">
                  <li>
                    <a href="" className="active">
                      1
                    </a>
                  </li>
                  <li>
                    <a href="">2</a>
                  </li>
                  <li>
                    <a href="">3</a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-angle-double-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
