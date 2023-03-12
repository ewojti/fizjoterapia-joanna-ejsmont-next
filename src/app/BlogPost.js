import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BlogHead from "../components/BlogHead.js/BlogHead";
import NavigateBtn from "../components/NavigateBtn/NavigateBtn";

const BlogPost = () => {
  const location = useLocation();
  const { from } = location.state;
  return (
    <div className="app__blogPage section__padding">
      <NavigateBtn />
      <BlogHead />
      <h1 className="app__heading-h1-blog">{from.title}</h1>
      <h2 className="app__heading-h2-blog">{from.description}</h2>
      <h3 className="app__heading-h3-blog">{from.date}</h3>
      <p className="p__lato">{from.text}</p>
    </div>
  );
};

export default BlogPost;
