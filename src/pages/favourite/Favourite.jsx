import { FavItem, Navbar } from "../../components";
import { useData } from "../../context/data-context";

import "../home/home.css";
import "./favourite.css";
export default function Favourite() {
  const { favData, parameters } = useData();

  return (
    <div className="page-container">
      <Navbar />
      <div>
        <table className="table">
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
                >
                  {param.name}
                </th>
              );
            })}
          </tr>
          {favData.map((coin) => {
            return <FavItem coin={JSON.parse(coin)} />;
          })}
        </table>
      </div>
      <div className="footer-container">Made by Nitish Varma</div>
    </div>
  );
}
