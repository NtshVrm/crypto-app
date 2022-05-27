function getRankData(dataList, rank) {
  switch (rank) {
    case "LOW_TO_HIGH": {
      return dataList.sort((a, b) => a.rank - b.rank);
    }
    case "HIGH_TO_LOW": {
      return dataList.sort((a, b) => b.rank - a.rank);
    }
    default:
      return dataList;
  }
}
function getPriceData(dataList, price) {
  switch (price) {
    case "LOW_TO_HIGH": {
      return dataList.sort((a, b) => a.price - b.price);
    }
    case "HIGH_TO_LOW": {
      return dataList.sort((a, b) => b.price - a.price);
    }
    default:
      return dataList;
  }
}
function getVolumeData(dataList, volume) {
  switch (volume) {
    case "LOW_TO_HIGH": {
      return dataList.sort((a, b) => a.volume - b.volume);
    }
    case "HIGH_TO_LOW": {
      return dataList.sort((a, b) => b.volume - a.volume);
    }
    default:
      return dataList;
  }
}
function getSupplyData(dataList, availableSupply) {
  switch (availableSupply) {
    case "LOW_TO_HIGH": {
      return dataList.sort((a, b) => a.availableSupply - b.availableSupply);
    }
    case "HIGH_TO_LOW": {
      return dataList.sort((a, b) => b.availableSupply - a.availableSupply);
    }
    default:
      return dataList;
  }
}
function getMarketCapData(dataList, marketCap) {
  switch (marketCap) {
    case "LOW_TO_HIGH": {
      return dataList.sort((a, b) => a.marketCap - b.marketCap);
    }
    case "HIGH_TO_LOW": {
      return dataList.sort((a, b) => b.marketCap - a.marketCap);
    }
    default:
      return dataList;
  }
}

function getDayChangeData(dataList, priceChange1d) {
  switch (priceChange1d) {
    case "LOW_TO_HIGH": {
      return dataList.sort((a, b) => a.priceChange1d - b.priceChange1d);
    }
    case "HIGH_TO_LOW": {
      return dataList.sort((a, b) => b.priceChange1d - a.priceChange1d);
    }
    default:
      return dataList;
  }
}

function getHourChangeData(dataList, priceChange1h) {
  switch (priceChange1h) {
    case "LOW_TO_HIGH": {
      return dataList.sort((a, b) => a.priceChange1h - b.priceChange1h);
    }
    case "HIGH_TO_LOW": {
      return dataList.sort((a, b) => b.priceChange1h - a.priceChange1h);
    }
    default:
      return dataList;
  }
}
function getWeekChangeData(dataList, priceChange1w) {
  switch (priceChange1w) {
    case "LOW_TO_HIGH": {
      return dataList.sort((a, b) => a.priceChange1w - b.priceChange1w);
    }
    case "HIGH_TO_LOW": {
      return dataList.sort((a, b) => b.priceChange1w - a.priceChange1w);
    }
    default:
      return dataList;
  }
}

export {
  getDayChangeData,
  getHourChangeData,
  getMarketCapData,
  getPriceData,
  getRankData,
  getSupplyData,
  getVolumeData,
  getWeekChangeData,
};
