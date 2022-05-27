import "./coin-item.css";

export default function CoinItem({ coin }) {
  return (
    <tr>
      <td>{coin.rank}</td>
      <td className="coin-name">
        <img alt="coin-icon" className="coin-icon" src={coin.icon} />
        {coin.name}
      </td>
      <td>{coin.price.toFixed(2)}</td>
      <td>{`$${(coin.marketCap / 1000000000).toFixed(2)}b`}</td>
      <td>{`$${(coin.volume / 1000000000).toFixed(2)}b`}</td>
      <td>{`${(coin.availableSupply / 1000000).toFixed(2)}m`}</td>
      <td>{`${coin.priceChange1h}%`}</td>
      <td>{`${coin.priceChange1d}%`}</td>
      <td>{`${coin.priceChange1w}%`}</td>
    </tr>
  );
}
