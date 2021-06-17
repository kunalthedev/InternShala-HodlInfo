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
        class={`${
          darkMode ? "table-data-row data-cont" : "table-data-row data-cont-light"
        }`}
        key={id}
      >
        <td class="left-childs">
          <span class="data">{id}</span>
        </td>
        <td>
          <span className="icon">
            <img src={platformIcon} alt={platform} />
          </span>
          <span class="data">{platform}</span>
        </td>
        <td>
          <span class="data">₹ {lastTradedPrice}</span>
        </td>
        <td>
          <span class="data">
            ₹ {buyPrice} / ₹ {sellPrice}
          </span>
        </td>
        <td>
          <span
            class={`${diffrence > 0 ? "data percent" : "data percent-down"}`}
          >
            {diffrence} %
          </span>
        </td>
        <td class="right-childs">
          <span class={`${diffrence > 0 ? "data price" : "data price-down"}`}>
            {diffrence > 0 ? "▲" : "▼"}₹ {saving}
          </span>
        </td>
      </tr>
    );
}

export default Table
