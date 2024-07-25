import React from "react";
import { Link } from "react-router-dom";

function BlogContaint({ props }) {
  const pro = { ...props };
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
          <img
            src={`http://localhost/laravel8/public/upload/Blog/image/${pro.image}`}
            alt="Không có hình ảnh"
          />
        </a>
        <p dangerouslySetInnerHTML={{ __html: pro.content }} />
        <Link to={`/blog/detail/${pro.id}`} className="btn btn-primary" href="">
          Read More
        </Link>
      </div>
    </>
  );
}

export default BlogContaint;
