import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {
  const { id } = useParams();
  return (
    <div className="blog-details">
      <h2>BlogDetails - {id}</h2>
    </div>
  );
};

export default BlogDetails;
