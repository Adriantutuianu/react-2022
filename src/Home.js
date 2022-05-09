import React, { useState } from "react";

function Home() {
  const [name, setName] = useState("mario");
  // let name = "mario";

  const handleClick = () => {
    setName("luigi");
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name}</p>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
}

export default Home;
