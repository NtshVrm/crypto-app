import {
  faArrowDown,
  faArrowUp,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect } from "react";
import { CoinItem, Navbar } from "../../components";
import { useData } from "../../context/data-context";
import "./home.css";

export default function Home() {
  const { dispatch, finalData, parameters, setParameters } = useData();

  useEffect(() => {
    async function getCoinData() {
      try {
        const response = await axios.get(
          "https://api.coinstats.app/public/v1/coins?skip=0&limit=40&currency=USD"
        );
        dispatch({ type: "DATA", payload: response.data.coins });
      } catch (error) {
        console.log(error);
      }
    }
    getCoinData();
  });
  let filters = parameters.filter((item) => item.status !== 1);

  return (
    <div className="page-container">
      <Navbar />
      <div className="main-container">
        <div className="filter-container">
          <div className="filters">
            {filters.length >= 1
              ? "Sorting By:"
              : "Click on any of the headings to sort "}
            {filters.map((item) => {
              return (
                <div className="filter-item">
                  {item.name}{" "}
                  {item.status % 2 === 0 ? (
                    <FontAwesomeIcon icon={faArrowDown} />
                  ) : (
                    <FontAwesomeIcon icon={faArrowUp} />
                  )}
                </div>
              );
            })}
          </div>
          <div
            className="filter-clear"
            onClick={() => {
              dispatch({ type: "CLEAR" });
              parameters.map((item) => (item.status = 1));
            }}
          >
            <FontAwesomeIcon icon={faTrashCan} />
            CLEAR
          </div>
        </div>
        <table className="table">
          <thead>
            <tr className="table-header">
              {parameters.map((param) => {
                return (
                  <th
                    className={`header-item ${
                      param.mobile
                        ? param.tab
                          ? "tab-hidden mobile-hidden"
                          : "mobile-hidden"
                        : ""
                    }`}
                    onClick={() => {
                      const newParam = parameters.map((item) => {
                        if (item.id === param.id) {
                          return { ...item, status: param.status + 1 };
                        }
                        return item;
                      });
                      setParameters(newParam);
                      dispatch({
                        type: "SORT",
                        payload: param.name,
                        sortType:
                          param.status % 2 === 0
                            ? "HIGH_TO_LOW"
                            : "LOW_TO_HIGH",
                      });
                      console.log(param.name, param.status);
                    }}
                  >
                    {param.name}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {finalData.map((coin) => {
              return <CoinItem coin={coin} />;
            })}
          </tbody>
        </table>
      </div>
      <div className="footer-container">Made by Nitish Varma</div>
    </div>
  );
}
