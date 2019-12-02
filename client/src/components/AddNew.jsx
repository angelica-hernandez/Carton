import React, { Component } from "react";
import { useState } from "react";

import "./AddItem.scss";
import Item from "./Item";

class AddNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [
        {
          food: "butter",
          quantity: 2,
          price: 2,
          expirationDate: new Date()
        }
      ],
      newRow: {
        food: "",
        quantity: 0,
        price: 0,
        expirationDate: ""
      }
    };
    this.handleAddRow = this.handleAddRow.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleNewChange = this.handleNewChange.bind(this);
    this.handleRemoveRow = this.handleRemoveRow.bind(this);
    this.handleRemoveSpecificRow = this.handleRemoveSpecificRow.bind(this);
  }

  render() {
    const { rows, newRow } = this.state;
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
                    <th />
                  </tr>
                </thead>

                <tbody>
                  {rows.map((item, idx) => (
                    <Item
                      key={idx}
                      idx={idx}
                      item={item}
                      handleChange={this.handleChange}
                      handleRemoveSpecificRow={this.handleRemoveSpecificRow}
                    />
                  ))}
                  <Item
                    idx={-1}
                    item={newRow}
                    handleChange={this.handleNewChange}
                    handleRemoveSpecificRow={() => ({})}
                  />
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
                <h5>
                  Total Price:{" "}
                  {rows.length === 0
                    ? 0
                    : rows.reduce((sum, i) => (sum += i.quantity * i.price), 0)}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleNewChange = (e, field) => {
    const newRow = this.state.newRow;
    switch (field) {
      case "quantity":
      case "price":
        const val = parseInt(e.target.value);
        if (!isNaN(val)) {
          newRow[field] = val;
          this.setState({ ...this.state, newRow });
        }
        break;
      case "expiration":
      case "food":
        newRow[field] = e.target.value;
        this.setState({ ...this.state, newRow });
        break;
      default:
        console.log("Not a valid field");
        break;
    }
  };

  handleChange = (e, field, idx) => {
    const rows = this.state.rows;
    const row = rows[idx];
    switch (field) {
      case "quantity":
      case "price":
        const val = parseInt(e.target.value);
        if (!isNaN(val)) {
          row[field] = val;
          rows[idx] = row;
          this.setState({ ...this.state, rows });
        }
        break;
      case "expiration":
      case "food":
        row[field] = e.target.value;
        rows[idx] = row;
        this.setState({ ...this.state, rows });
        break;
      default:
        console.log("Not a valid field");
        break;
    }
  };

  handleAddRow = () => {
    const rowToAdd = this.state.newRow;
    this.setState({
      rows: [...this.state.rows, rowToAdd],
      newRow: {
        food: "",
        quantity: "",
        price: "",
        expirationDate: ""
      }
    });
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
}

export default AddNew;
