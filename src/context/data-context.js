import { createContext, useContext, useReducer } from "react";
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
    <DataContext.Provider value={{ dispatch, finalData }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
