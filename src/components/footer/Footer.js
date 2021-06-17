import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="f-right">
        <div>Copyright © 2019</div>
        <div>HodlInfo.com</div>
        <div>
          Developed By <a href="/">QuadBTech</a>
        </div>
      </div>
      <div className="f-left">
        <a href="#">support</a>
      </div>
    </div>
  );
};

export default Footer;
