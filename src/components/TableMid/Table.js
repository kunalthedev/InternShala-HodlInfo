import React from 'react'
import { GlobalContext } from '../../Context/GlobalContext';
const Table = ({tableData}) => {
    const { darkMode} = React.useContext(GlobalContext);
    const {
      id,
      platform,
      platformIcon,
      lastTradedPrice,
      buyPrice,
      sellPrice,
      diffrence,
      saving,
    } = tableData;
    return (
      <tr
        className={`${
          darkMode
            ? "table-data-row data-cont"
            : "table-data-row data-cont-light"
        }`}
        key={id}
      >
        <td className="left-childs">
          <span className="data">{id}</span>
        </td>
        <td>
          <span className="icon">
            <img src={platformIcon} alt={platform} />
          </span>
          <span className="data">{platform}</span>
        </td>
        <td>
          <span className="data">₹ {lastTradedPrice}</span>
        </td>
        <td>
          <span className="data">
            ₹ {buyPrice} / ₹ {sellPrice}
          </span>
        </td>
        <td>
          <span
            className={`${
              diffrence > 0 ? "data percent" : "data percent-down"
            }`}
          >
            {diffrence} %
          </span>
        </td>
        <td className="right-childs">
          <span
            className={`${diffrence > 0 ? "data price" : "data price-down"}`}
          >
            {diffrence > 0 ? "▲" : "▼"}₹ {saving}
          </span>
        </td>
      </tr>
    );
}

export default Table
