import React from "react";
// import { Link } from "react-router-dom";
import Link from "next/link";
import "./Blog.scss";
import blogData from "../../constants/blogData";

const Blog = () => {
  const threeLastPost = blogData.slice(0, 3);
  return (
    <div id="blog" className="app__blog section__padding">
      <div className="app__blog-title">
        <h1 className="app__heading-h1">Mój Blog</h1>
        <h3 className="app__blog-title-last-posts app__heading-h3">
          Ostatnio dodane posty...
        </h3>
      </div>
      <div className="app__blog-posts">
        {threeLastPost.map((post) => (
          <div className="app__blog-post" key={post.id.toString()}>
            <div className="app__blog-post-head">
              <span className="overlay"></span>
              <div className="app__blog-post-date">
                <p>{post.date}</p>
              </div>
              <div className="app__blog-post-title">
                <h3 className="app__heading-h3">{post.title}</h3>
              </div>
            </div>
            <div className="app__blog-post-text">
              <p>{post.description}</p>
              <Link
                href="/blog-post"
                state={{ from: post }}
                className="app__blog-post-btn"
              >
                Czytaj cały post
              </Link>
            </div>
          </div>
        ))}
      </div>
        <Link href="/blog" className="app__blog-button-link">
      <button className="app__blog-button p__cormorant">
          Zobacz wszystkie posty
      </button>
        </Link>
    </div>
  );
};

export default Blog;
