import React from "react";
import PropTypes from "prop-types";
import Header from "../header/Header";
// import Footer from "../footer/Footer";
import SideBar from "../sidebar/SideBar";
import "../../styles/main.css";

const PageTemplate = ({ children, currentPage = "" }) => {
  return (
    <div className="PageTemplate">
      <Header />
      <div className="page-flex">
        <SideBar currentPage={currentPage} />
        <div className="page-container">{children}</div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

PageTemplate.propTypes = {
  children: PropTypes.node,
  //   className: PropTypes.string,
};
export default PageTemplate;
