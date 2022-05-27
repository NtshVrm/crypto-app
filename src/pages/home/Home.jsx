import axios from "axios";
import { useEffect, useState } from "react";
import { CoinItem } from "../../components";
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
  return (
    <div className="page-container">
      <div className="navbar-container">NAVBAR</div>
      <div className="main-container">
        <div>
          <div onClick={() => dispatch({ type: "CLEAR" })}>CLEAR</div>
        </div>
        <table className="table">
          <tr className="table-header">
            {parameters.map((param) => {
              return (
                <th
                  onClick={() => {
                    const newParam = parameters.map((item) => {
                      if (item.id === param.id) {
                        return { ...item, status: !param.status };
                      }
                      return item;
                    });
                    setParameters(newParam);
                    dispatch({
                      type: "SORT",
                      payload: param.name,
                      sortType: param.status ? "HIGH_TO_LOW" : "LOW_TO_HIGH",
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
