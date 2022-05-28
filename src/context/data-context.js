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
      status: 1,
    },
    {
      id: 1,
      name: "NAME",
      status: 1,
    },
    {
      id: 2,
      name: "PRICE",
      status: 1,
    },
    {
      id: 3,
      name: "MARKET CAP",
      status: 1,
      mobile: true,
    },
    {
      id: 4,
      name: "VOLUME",
      status: 1,
      mobile: true,
    },
    {
      id: 5,
      name: "SUPPLY",
      status: 1,
      mobile: true,
      tab: true,
    },
    {
      id: 6,
      name: "PRICE CHANGE(1H)",
      status: 1,
      mobile: true,
      tab: true,
    },
    {
      id: 7,
      name: "PRICE CHANGE(1D)",
      status: 1,
    },
    {
      id: 8,
      name: "PRICE CHANGE(1W)",
      status: 1,
      mobile: true,
      tab: true,
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
    favList: [],
    favType: null,
    remove: null,
  });

  function getFavData(favList, favType) {
    if (favType !== null && !favList.includes(JSON.stringify(favType))) {
      favList.push(JSON.stringify(favType));
    }
    return favList;
  }

  function removeData(favList, remove) {
    const index = favList.indexOf(JSON.stringify(remove));
    if (index > -1) {
      favList.splice(index, 1);
    }
    return favList;
  }

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

  const output = getFavData(state.favList, state.favType);
  const favData = removeData(output, state.remove);

  const finalData = supplyData;
  return (
    <DataContext.Provider
      value={{
        parameters,
        setParameters,
        dispatch,
        finalData,
        favData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
