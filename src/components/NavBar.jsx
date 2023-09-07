import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import {UserContext} from "../context/user-context"


const NavBar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const { user } = useContext(UserContext);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  }
  return (
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li  className={`dropdown ${isDropdownOpen ? "open" : ""}`}
        onMouseEnter={toggleDropdown}
        onMouseLeave={toggleDropdown}>
            <Link to="/topics">Topics</Link>
            <div className={`dropdown-content ${isDropdownOpen ? "show" : ""}`}>
            <Link to="/topics/football">Football</Link>
            <Link to="/topics/cooking">Cooking</Link>
            <Link to="/topics/coding">Coding</Link>
            </div>
      </li>
        <li>
          <Link to="/users">Users</Link>
          
        </li>
        <li><h5 className="login">Logged in as {user}</h5></li>
      </ul>
  );
};

export default NavBar;