import React from "react";

export default props => {
  const { idx, item, handleChange, handleRemoveSpecificRow } = props;
  return (
    <tr id="addr0" key={idx}>
      <td>{idx >= 0 ? idx + 1 : " "}</td>
      <td>
        <input
          type="text"
          name="food"
          value={item.food}
          onChange={e => handleChange(e, "food", idx)}
          className="form-control"
        />
      </td>
      <td>
        <input
          type="text"
          name="quantity"
          value={item.quantity}
          onChange={e => handleChange(e, "quantity", idx)}
          className="form-control"
        />
      </td>
      <td>
        <input
          type="text"
          name="price"
          value={item.price}
          onChange={e => handleChange(e, "price", idx)}
          className="form-control"
        />
      </td>
      <td>
        {idx >= 0 && (
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={handleRemoveSpecificRow(idx)}
          >
            Remove
          </button>
        )}
      </td>
    </tr>
  );
};
