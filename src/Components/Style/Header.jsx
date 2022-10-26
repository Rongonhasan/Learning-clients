import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <p className="btn btn-ghost normal-case text-xl">
          Learning Platfrom
        </p>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/home">Home</Link>
          </li>

          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <ul className="p-2 bg-base-100"></ul>

          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
