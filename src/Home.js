import React from "react";

function Home() {
  const handleClick = () => {
    console.log("hello");
  };

  const handleClickAgain = (name) => {
    console.log("hello" + name);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me!</button>
      <button
        onClick={() => {
          handleClickAgain(" Mario");
        }}
      >
        Click me again!
      </button>
    </div>
  );
}

export default Home;
