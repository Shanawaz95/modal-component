import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/modal1">
        <button className="btn">Click to open modal !</button>
      </Link>
    </div>
  );
}

export default Home;
