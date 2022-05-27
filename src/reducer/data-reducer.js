/* eslint-disable no-fallthrough */
const dataReducer = (state, action) => {
  switch (action.type) {
    case "DATA": {
      return { ...state, data: action.payload };
    }
    case "SORT": {
      // eslint-disable-next-line default-case
      switch (action.payload) {
        case "RANK": {
          return { ...state, rank_sort: action.sortType };
        }
        case "PRICE": {
          return { ...state, price_sort: action.sortType };
        }
        case "VOLUME": {
          return { ...state, volume_sort: action.sortType };
        }
        case "SUPPLY": {
          return { ...state, supply_sort: action.sortType };
        }
        case "MARKET CAP": {
          return { ...state, market_sort: action.sortType };
        }
        case "PRICE CHANGE(1D)": {
          return { ...state, dayChange_sort: action.sortType };
        }
        case "PRICE CHANGE(1H)": {
          return { ...state, hourChange_sort: action.sortType };
        }
        case "PRICE CHANGE(1W)": {
          return { ...state, weekChange_sort: action.sortType };
        }
      }
    }
    case "CLEAR": {
      return {
        data: [],
        rank_sort: "LOW_TO_HIGH",
        price_sort: null,
        market_sort: null,
        dayChange_sort: null,
        hourChange_sort: null,
      };
    }
    default:
      return state;
  }
};

export { dataReducer };
