import React, { Component } from "react";
import "./AddItem.scss";

class Add extends Component {
  state = {
    rows: [{}],
    currentQuantity: 1,
    currentFood: "",
    totalSum: 0
  };

  foodChange = e => {
    this.setState(
      {
        currentFood: e.target.value
      },
      () => {
        console.log("Food: ", this.state.currentFood);
      }
    );
  };

  quantityChange = e => {
    this.setState(
      {
        currentQuantity: e.target.value
      },
      () => {
        console.log("Quantity: ", this.state.currentQuantity);
      }
    );
  };

  onChange = (index, val) => {
    this.setState({
      rows: this.state.rows.map((product, i) =>
        i === index ? { ...product } : product
      )
    });
    // console.log(this.state.rows);
  };

  render() {
    return (
      <div>
        <List
          products={this.state.rows}
          onChange={this.onChange}
          quantityChange={this.quantityChange}
        />
        <Total
          products={this.state.rows}
          currentQuantity={this.state.currentQuantity}
        />
      </div>
    );
  }
}

const List = ({ products, onChange, quantityChange, foodChange }) => (
  <div>
    <div className="header">
      <h2>Your Grocery</h2>
    </div>
    <div className="container">
      <div className="row clear-fix">
        <div className="col-md-12 column">
          <table className="table table-bordered table-hover" id="tab_logic">
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

            {products.map((item, idx) => (
              <tbody>
                <tr id="addr0" key={idx}>
                  <td>{idx}</td>
                  <td>
                    <input
                      type="text"
                      name="food"
                      className="form-control"
                      value={item.food}
                      onChange={foodChange}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="quantity"
                      className="form-control"
                      value={item.quantity}
                      onChange={quantityChange}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="price"
                      className="form-control"
                      value={item.price}
                      onChange={e => onChange(idx, e.target.value)}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="expiration"
                      className="form-control"
                      value={item.expiration}
                      onChange={e => onChange(idx, e.target.value)}
                    ></input>
                  </td>
                  <td>
                    <button className="btn btn-outline-danger btn-sm">
                      Remove
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
          <button className="btn btn-primary float-left">Add</button>
          <button className="btn btn-danger float-right">
            Delete Last Row
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Total = ({ products, currentQuantity }) => (
  <h5>
    Total Price:
    {products.reduce((sum, i) => (sum += currentQuantity * i.price), 0)}
  </h5>
);

export default Add;
