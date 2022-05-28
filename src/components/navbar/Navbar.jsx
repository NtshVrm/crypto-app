import { faBars, faCoins, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router";
import "./Navbar.css";

export default function Navbar() {
  const navItems = ["Favourite", "Latest News"];
  const [navState, setNavState] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="navbar-container">
      <div className="logo" onClick={() => navigate("/Home")}>
        <FontAwesomeIcon icon={faCoins} />
        CoinStream
      </div>
      <div className={`item-container ${navState ? "" : "hidden"}`}>
        {navItems.map((item) => {
          return (
            <div className="item" onClick={() => navigate(`/${item}`)}>
              {item}
            </div>
          );
        })}
      </div>
      <div className="toggle" onClick={() => setNavState((prev) => !prev)}>
        {navState ? (
          <FontAwesomeIcon icon={faX} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </div>
    </div>
  );
}
