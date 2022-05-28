import { faBars, faCoins, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const navItems = ["Favourites", "Latest News"];
  const [navState, setNavState] = useState(false);
  return (
    <div className="navbar-container">
      <div className="logo">
        <FontAwesomeIcon icon={faCoins} />
        CoinStream
      </div>
      <div className={`item-container ${navState ? "" : "hidden"}`}>
        {navItems.map((item) => {
          return <div className="item">{item}</div>;
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
