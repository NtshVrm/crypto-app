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
          <thead>
            <tr className="table-header">
              {parameters.map((param) => {
                return (
                  <th
                    key={param.id}
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
          </thead>
          <tbody>
            {favData.length > 0 ? (
              favData.map((coin) => {
                return (
                  <FavItem key={JSON.parse(coin).id} coin={JSON.parse(coin)} />
                );
              })
            ) : (
              <tr className="primary error">
                <td>"Oops, the list is empty"</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="footer-container">Made by Nitish Varma</div>
    </div>
  );
}
