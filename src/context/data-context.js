import { createContext, useContext, useReducer, useState } from "react";
import { dataReducer } from "../reducer/data-reducer";
import {
  getDayChangeData,
  getHourChangeData,
  getMarketCapData,
  getPriceData,
  getRankData,
  getSupplyData,
  getVolumeData,
  getWeekChangeData,
} from "../utils/utils";

const DataContext = createContext(null);

const DataProvider = ({ children }) => {
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
  ]);
  const [state, dispatch] = useReducer(dataReducer, {
    data: [],
    rank_sort: null,
    price_sort: null,
    market_sort: null,
    dayChange_sort: null,
    hourChange_sort: null,
    weekChange_sort: null,
  });

  const sortedData = getRankData(state.data, state.rank_sort);
  const priceData = getPriceData(sortedData, state.price_sort);
  const marketCapData = getMarketCapData(priceData, state.market_sort);
  const dayChangeData = getDayChangeData(marketCapData, state.dayChange_sort);
  const hourChangeData = getHourChangeData(
    dayChangeData,
    state.hourChange_sort
  );
  const weekChangeData = getWeekChangeData(
    hourChangeData,
    state.weekChange_sort
  );
  const volumeData = getVolumeData(weekChangeData, state.volume_sort);
  const supplyData = getSupplyData(volumeData, state.supply_sort);
  const finalData = supplyData;
  return (
    <DataContext.Provider
      value={{ parameters, setParameters, dispatch, finalData }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
