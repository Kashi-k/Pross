import React from "react";

const Home = (props) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      {props.count} Home
    </div>
  );
};

export default Home;
