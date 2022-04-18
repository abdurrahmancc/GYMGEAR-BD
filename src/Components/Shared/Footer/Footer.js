import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer  w-100 ">
        <p className="text-center nvaber-color m-0 text-white py-3">
          {" "}
          Copyright &copy; Abdur Rahman {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
};

export default Footer;
