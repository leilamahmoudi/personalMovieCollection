import React from "react";
import { Link } from "react-router-dom";
import "./sideBar.css";

export default function SideBar({ currentPage }) {
  return (
    <div className="SideBar">
      <Link
        to="/add-new-movie"
        className={`sidebar--link ${
          currentPage === "add-new-movie" && "active"
        }`}
      >
        Add New Movie
      </Link>

      <Link
        to="/"
        className={`sidebar--link ${currentPage === "watch-list" && "active"}`}
      >
        Watch Later
      </Link>

      <Link
        to="/watched"
        className={`sidebar--link ${currentPage === "watched" && "active"}`}
      >
        Rated
      </Link>

      <Link
        to="/my-collection"
        className={`sidebar--link ${
          currentPage === "my-collection" && "active"
        }`}
      >
        My Collection
      </Link>
    </div>
  );
}
