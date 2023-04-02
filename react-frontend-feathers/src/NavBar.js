import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import AllBirds from "./AllBirds";
import AddBirdForm from "./AddBirdForm";
const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="nav">
        <li className="f nav-item ">Feathers🐦</li>
        <li className="nav-item heading line">
          <Link to="/" element={<AllBirds />}>
            All-Birds
          </Link>
        </li>
        <li className="heading nav-item line">
          <Link to="/addbirds" element={<AddBirdForm />}>
            Add-Birds
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
