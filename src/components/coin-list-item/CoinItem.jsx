import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faOut } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./coin-item.css";
import { useState } from "react";
import { useData } from "../../context/data-context";

export default function CoinItem({ coin }) {
  // eslint-disable-next-line no-unused-vars
  const [favourite, setFavourite] = useState(false);
  const { dispatch, favData } = useData();
  localStorage.setItem("fav", favData);
  return (
    <tr>
      <td className="favourite">
        <div className="favourite-item">
          {localStorage.getItem("fav").includes(JSON.stringify(coin)) ? (
            <FontAwesomeIcon
              onClick={() => {
                setFavourite((prev) => !prev);
                dispatch({ type: "DELETE", payload: coin });
              }}
              className="favourite-icon"
              icon={faStar}
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => {
                setFavourite((prev) => !prev);
                dispatch({ type: "FILTER", payload: coin });
              }}
              className="favourite-icon"
              icon={faOut}
            />
          )}

          {coin.rank}
        </div>
      </td>
      <td className="coin-name">
        <img alt="coin-icon" className="coin-icon" src={coin.icon} />
        {coin.name}
      </td>
      <td>{coin.price.toFixed(2)}</td>
      <td className="mobile-hidden">
        {`$${(coin.marketCap / 1000000000).toFixed(2)}B`}
      </td>
      <td className="mobile-hidden">{`$${(coin.volume / 1000000000).toFixed(
        2
      )}B`}</td>
      <td className="mobile-hidden tab-hidden">{`${(
        coin.availableSupply / 1000000
      ).toFixed(2)}M`}</td>
      <td
        className={`${
          coin.priceChange1h < 0 ? "red" : "green"
        } mobile-hidden tab-hidden`}
      >{`${coin.priceChange1h}%`}</td>
      <td
        className={`${coin.priceChange1d < 0 ? "red" : "green"}`}
      >{`${coin.priceChange1d}%`}</td>
      <td
        className={`${
          coin.priceChange1w < 0 ? "red" : "green"
        } mobile-hidden tab-hidden`}
      >{`${coin.priceChange1w}%`}</td>
    </tr>
  );
}
