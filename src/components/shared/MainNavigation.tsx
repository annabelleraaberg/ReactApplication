import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faSearch } from "@fortawesome/free-solid-svg-icons";

const MainNavigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
      <div className="" id="navbarNav">
        <ul className="nav mr-auto mt-2 mt-lg-0 ">
          <li className="nav-item ">
            <Link className="nav-link" to="/">
              <FontAwesomeIcon icon={faHouse} />
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="finddriver">
              Find driver
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="editdriver">
              Edit driver
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="game">
              Game
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="search">
              Search
              <FontAwesomeIcon icon={faSearch} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNavigation;
