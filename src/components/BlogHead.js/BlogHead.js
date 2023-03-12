import React from 'react'
import { Link } from "react-router-dom";
import images from "../../constants/images";
import "./BlogHead.scss";

const BlogHead = () => {
  return (
    <div className="app__blogHead">
      <div className="app__bloglist-title">
        <div className="app__bloglist-title-logo">
          <Link to="/">
            <img src={images.logo_footer} alt=""></img>
          </Link>
        </div>
        <hr className="horizontal-line"></hr>
        <Link to='/blog'>
          <h1 className="app__heading-h1">BLOG</h1>
        </Link>
      </div>
      <div className="app__blogList-author">
        <div className="app__blogList-author-img">
          <img src={images.blog} alt="" />
        </div>
        <div className="app__blogList-author-name">
          <h2>Joanna Ejsmont</h2>
          <p>
            Magister Fizjoterapii
            <br />
            Uniwersytet Medyczny w Białymstoku 2018
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogHead