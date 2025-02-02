import { NavLink } from "react-router-dom";
import "./style.css";

const menuList = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Watch List",
    path: "/watch-list",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "contact",
    path: "/contact",
  },
];

const NavBar = () => {
  return (
    <nav className="navbar-container">
      <div className="nav-left-container">
        <NavLink
          className={({ isActive }) => (isActive ? "nav-link-active" : "")}
          to="/"
        >
          <span className="nav-title">Imdb Moview</span>
        </NavLink>
      </div>
      <div className="nav-right-container">
        <ul className="nav-link-container">
          {menuList.map((list) => (
            <li key={list.path}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link-active" : ""
                }
                to={list.path}
              >
                {list.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
