
import "./BlogPage.css"
import { useQuery } from "@tanstack/react-query";
import { getAllBlogs } from "../../api/dataApi";

function BlogPage() {


 const { data, isLoading, isError, error } = useQuery({
      queryKey: ["blogs"],
      queryFn: getAllBlogs,
      staleTime: 300000
 })

  return (
    <div className="blog-page">
      <h1 className="page-title">Latest News Blog Posts</h1>
      <div className="blog-container">
        {isLoading && <p className="loading-message">Loading blogs...</p>}
        {isError &&(
           <div className="error-main">
           <h1>Error: {error || "an Error occurs"}</h1>
           <h1>or Internet problem</h1>

           </div>
          )}
        {!isLoading && !isError && data?.length === 0 &&  data?.map((blog, index) => (
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
