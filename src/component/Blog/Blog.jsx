import React, { useEffect, useState } from "react";
import { Blog1 } from "../../images";
import { Link } from "react-router-dom";
import axios from "../../axios";

function Blog() {
  const [data, setData] = useState([]);
  const [image, setImage] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost/laravel8/public/api/blog")
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
                data.map((pro) => {
                  return (
                    <>
                      <h2 className="title text-center">{pro.title}</h2>
                      <div className="single-blog-post">
                        <h3>{pro.description}</h3>
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
                          <img src={pro?.image} alt="Không có hình ảnh" />
                        </a>
                        <p dangerouslySetInnerHTML={{ __html: pro.content }} />
                        <Link
                          to={`/blog/detail/${pro.id}`}
                          className="btn btn-primary"
                          href=""
                        >
                          Read More
                        </Link>
                      </div>
                    </>
                  );
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
