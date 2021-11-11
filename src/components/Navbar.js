import React from "react";

const Navbar = () => (
  <ul style={style.navbarUl}>
    <li style={style.navbarLi}>
      <a href="/" style={style.navbarLiA}>
        Home
      </a>
    </li>
    <li style={style.navbarLi}>
      <a href="/currencyexchange" style={style.navbarLiA}>
        Currency Exchange
      </a>
    </li>
    <li style={style.navbarLi}>
      <a href="/qrmaker" style={style.navbarLiA}>
        QR code maker
      </a>
    </li>
  </ul>
);

const style = {
  navbarUl: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    backgroundColor: "#333",
  },
  navbarLi: {
    float: "left",
  },
  navbarLiA: {
    display: "block",
    color: "white",
    textAlign: "center",
    padding: "14px 16px",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "#111",
    },
  },
};

export default Navbar;
