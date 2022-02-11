import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="div-footer">
      <div className="elipse">
        <h5>Hello</h5>
      </div>
      <div className="footer-body">
        <div float="left">
          <img src="" alt="background" />
          <h5>foliofix is a product of 2DRUMAB</h5>
          <h5>
            <span>&copy; 2022</span>
          </h5>
          <p>www.gmccohort6.com.ng</p>
        </div>
        <div float="left">
          <h3>Contact</h3>
          <p>+234-812-345-4566</p>
          <p>Email: velox@gmail.com</p>
        </div>
        <div float="left">
          <h3>Product</h3>
          <p>Pages</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
