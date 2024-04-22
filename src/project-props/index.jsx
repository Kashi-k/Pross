import React, { useState } from "react";
import Navbar from "./navbar";
import Home from "./home";
import ContactUs from "./contact-us";
import MyProgress from "./my-progress";
import RateButton from "./rate-button";
import MajorComponent from "./major-component";
import Login from "../login";
import Signup from "../sign-up";

// ? navbar
// ? component
// ? logo
// ? userImage
// ? counterButton

const ProjectProps = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [count, setCount] = useState(0);
  return (
    <div className="h-screen">
      <Navbar setPageNumber={(argu) => setPageNumber(argu)} />
      {/* {pageNumber === 1 && <Home count={count} />}
      {pageNumber === 2 && <MyProgress count={count} />}
      {pageNumber === 3 && <ContactUs count={count} />} */}
      <MajorComponent pageNumber={pageNumber} count={count} />
      <RateButton setCount={() => setCount(count + 1)} />
    </div>
  );
};

export default ProjectProps;
