import React from "react";
import blogData from "../constants/blogData";
import "./BlogList.scss";
import BlogHead from "../components/BlogHead.js/BlogHead";
import { Link } from "react-router-dom";
import NavigateBtn from "../components/NavigateBtn/NavigateBtn";

const BlogList = () => {
  return (
    <div className="app__blogList app__blogPage section__padding">
      <NavigateBtn />
      <BlogHead />
      <div className="app__blogList-items">
        {blogData.map((post) => (
          <div className="app__blogList-item">
            <Link to="/blog-post" state={{ from: post }}>
              <h1 className="app__heading-h1-blog">{post.title}</h1>
              <h3 className="app__heading-h3-blog">{post.date}</h3>
              <p className="p__lato">{post.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
