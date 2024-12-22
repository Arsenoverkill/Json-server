import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="container">
        <div className="header">
          <h1>Akada</h1>
          <div>
            <a onClick={() => navigate("/")}>Home</a>
            <a onClick={() => navigate("/admin")}>Admin</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
