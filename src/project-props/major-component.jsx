import React from "react";

const MajorComponent = (props) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <p>{props.count}</p>
      <h1>
        this is {props.pageNumber == 1 && "Home"}
        {props.pageNumber == 2 && "My Progress"}
        {props.pageNumber == 3 && "Contact U"} component
      </h1>
    </div>
  );
};

export default MajorComponent;
