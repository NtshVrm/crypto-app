import axios from "axios";
import { useEffect, useState } from "react";
import { CoinItem } from "../../components";
import { useData } from "../../context/data-context";
import "./home.css";

export default function Home() {
  //   const [coinData, setCoinData] = useState([]);
  const { dispatch, finalData } = useData();
  const [parameters, setParameters] = useState([
    {
      id: 0,
      name: "RANK",
      status: false,
    },
    {
      id: 1,
      name: "NAME",
      status: false,
    },
    {
      id: 2,
      name: "PRICE",
      status: false,
    },
    {
      id: 3,
      name: "MARKET CAP",
      status: false,
    },
    {
      id: 4,
      name: "VOLUME",
      status: false,
    },
    {
      id: 5,
      name: "SUPPLY",
      status: false,
    },
    {
      id: 6,
      name: "PRICE CHANGE(1H)",
      status: false,
    },
    {
      id: 7,
      name: "PRICE CHANGE(1D)",
      status: false,
    },
    {
      id: 8,
      name: "PRICE CHANGE(1W)",
      status: false,
    },
    // "Rank",
    // "Name",
    // "Price",
    // "Market Cap",
    // "Volume",
    // "Supply",
    // "Price Change(1H)",
    // "Price Change(1D)",
    // "Price Change(1W)",
  ]);

  useEffect(() => {
    async function getCoinData() {
      try {
        const response = await axios.get(
          "https://api.coinstats.app/public/v1/coins?skip=0&limit=40&currency=USD"
        );
        // setCoinData(response.data.coins);
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
