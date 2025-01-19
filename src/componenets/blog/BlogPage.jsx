import React, { useState, useEffect } from "react";
import "./BlogPage.css"

function BlogPage() {


  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch blog data from API
  useEffect(() => {
    fetch("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=3d0723dec2fd4f39902115b219e4588e") // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data.articles); // Assuming the data has an "articles" array
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="blog-page">
      <h1 className="page-title">Latest News Blog Posts</h1>
      <div className="blog-container">
        {loading && <p className="loading-message">Loading blogs...</p>}
        {!loading &&
          blogs.length === 0 && (
            <p className="no-blogs-message">No blogs available at the moment.</p>
          )}
        {!loading &&
          blogs.length > 0 &&
          blogs.map((blog, index) => (
            <div key={index} className="blog-post">
              <img
                src={blog.urlToImage || "/placeholder-image.jpg"}
                alt={blog.title}
                className="blog-image"
              />
              <div className="blog-content">
                <h2 className="blog-title">{blog.title}</h2>
                <p className="blog-author">
                  By {blog.author || "Unknown"} -{" "}
                  {new Date(blog.publishedAt).toLocaleString()}
                </p>
                <p className="blog-description">{blog.description}</p>
                <a
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="read-more"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default BlogPage;
