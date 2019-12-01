import React, { Component } from "react";
import { useState } from "react";

import "./AddItem.scss";

class AddItem extends Component {
  state = {
    totalSum: 0,
    rows: [{ food: "", quantity: 0, price: 0 }]
  };

  handleChange = idx => e => {
    const { name, value } = e.target;
    const rows = [...this.state.rows];

    rows[idx] = {
      [name]: value
    };
    this.setState({
      rows
    });
    console.log(rows);
  };

  onChange = (index, cost) => {
    this.setState({
      rows: this.state.rows.map((product, i) =>
        i === index ? { ...product, price: cost } : product
      )
    });
  };

  handleAddRow = () => {
    const item = {
      name: "",
      moblie: ""
    };
    this.setState(
      {
        rows: [...this.state.rows, item]
      },
      () => {
        console.log("added!", this.state.rows);
      }
    );
  };

  handleRemoveRow = () => {
    this.setState({
      rows: this.state.rows.slice(0, -1)
    });
  };

  handleRemoveSpecificRow = idx => () => {
    const rows = [...this.state.rows];
    rows.splice(idx, 1);
    this.setState({ rows });
  };

  render() {
    return (
      <div>
        <div className="header">
          <h2>Your Grocery</h2>
        </div>
        <div className="container">
          <div className="row clear-fix">
            <div className="col-md-12 column">
              <table
                className="table table-bordered table-hover"
                id="tab_logic"
              >
                <thead>
                  <tr>
                    <th className="text-center">#</th>
                    <th className="text-center">Food</th>
                    <th className="text-center">Quantity</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Expiration Date</th>
                    <th />
                  </tr>
                </thead>

                <tbody>
                  {this.state.rows.map((item, idx) => (
                    <tr id="addr0" key={idx}>
                      <td>{idx}</td>
                      <td>
                        <input
                          type="text"
                          name="food"
                          value={this.state.rows[idx].food}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="quantity"
                          value={this.state.rows[idx].quantity}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="price"
                          value={this.state.rows[idx].price}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="expiration"
                          value={this.state.rows[idx].expiration}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={this.handleRemoveSpecificRow(idx)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                onClick={this.handleAddRow}
                className="btn btn-primary float-left"
              >
                Add
              </button>
              <button
                onClick={this.handleRemoveRow}
                className="btn btn-danger float-right"
              >
                Delete Last Row
              </button>

              <div>
                <Total products={this.state.rows} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const Total = ({ products }) => (
  <h5>
    Total Price:
    {products.reduce((sum, i) => (sum += i.quantity * i.price), 0)}
  </h5>
);

export default AddItem;
