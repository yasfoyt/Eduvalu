import React, { useState } from "react";
import "./Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Menu from "@mui/icons-material/Menu";

const Navbar = () => {
  const [isNavVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    console.log("Menu clicked");
    setNavVisible((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo-container">
            <Menu className="menu" onClick={toggleNav} />
            <h3 className="logo">Eduvalu</h3>
          </div>
          <ul className="nav-links">
            <li>
              <a href="/">الرئيسية</a>
            </li>
            <li>
              <a href="/">المواد</a>
            </li>
            <li>
              <a href="/">المدرسين</a>
            </li>
            <li>
              <a href="/">الكتب</a>
            </li>
            <li>
              <a href="/">الحصص</a>
            </li>
            <li>
              <a href="/">الامتحانات الشاملة</a>
            </li>
          </ul>
          {isNavVisible && (
            <div className="responsive-nav">
              <ul>
                <li>
                  <a href="/">الرئيسية</a>
                </li>
                <li>
                  <a href="/">المواد</a>
                </li>
                <li>
                  <a href="/">المدرسين</a>
                </li>
                <li>
                  <a href="/">الكتب</a>
                </li>
                <li>
                  <a href="/">الحصص</a>
                </li>
                <li>
                  <a href="/">الامتحانات الشاملة</a>
                </li>
              </ul>
            </div>
          )}
          <div className="sign-form">
            <a href="/" className="outline-btn">
              تسجيل الدخول
            </a>
            <a href="/" className="filled-btn">
              انشاء حساب
            </a>
            <a href="/" style={{ display: "flex", alignItems: "center" }}>
              <ShoppingCartIcon
                style={{
                  fontSize: 28,
                  color: "white",
                  verticalAlign: "middle",
                }}
              />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
