import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
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
            {filters.length >= 1 ? "Filtering By:" : ""}
            {filters.map((item) => {
              return (
                <div>
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
            CLEAR
          </div>
        </div>
        <table className="table">
          <tr className="table-header">
            {parameters.map((param) => {
              return (
                <th
                  onClick={() => {
                    const newParam = parameters.map((item) => {
                      if (item.id === param.id) {
                        // return { ...item, status: !param.status };
                        return { ...item, status: param.status + 1 };
                      }
                      return item;
                    });
                    setParameters(newParam);
                    dispatch({
                      type: "SORT",
                      payload: param.name,
                      sortType:
                        param.status % 2 === 0 ? "HIGH_TO_LOW" : "LOW_TO_HIGH",
                    });
                    console.log(param.name, param.status);
                  }}
                >
                  {param.name}
                </th>
              );
            })}
          </tr>
          {finalData.map((coin) => {
            return <CoinItem coin={coin} />;
          })}
        </table>
      </div>
      <div className="footer-container">FOOTER</div>
    </div>
  );
}
