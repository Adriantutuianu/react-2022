import React, { useState, useEffect } from "react";
import Bloglist from "./Bloglist";
function Home() {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  const [name, setName] = useState("mario");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("useeffect ran");
    console.log(name);
  }, [name]);

  return (
    <div className="home">
      <Bloglist blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <button onClick={() => setName("luigi")}>change name</button>
      <p>{name}</p>
    </div>
  );
}

export default Home;
