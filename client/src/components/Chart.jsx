import React, { Component } from "react";
import "./Chart.scss";
import { Doughnut } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        datasets: [
          {
            data: this.props.foodBreakdown,
            labels: [
              "Fruits",
              "Vegetables",
              "Proteins",
              "Dairy",
              "Drinks",
              "Carbohydrates",
              "Others"
            ],
            backgroundColor: [
              "rgba(255, 0, 0, 0.4)",
              "rgba(11, 156, 49, 0.4)",
              "rgba(245, 137, 102, 1)",
              "rgba(102, 171, 245, 1)",
              "rgba(102, 106, 245, 1)",
              "rgba(252, 224, 202, 1)",
              "rgba(206, 198, 192, 1)"
            ]
          }
        ],
        labels: [
          "Fruits",
          "Vegetables",
          "Proteins",
          "Dairy",
          "Drinks",
          "Carbohydrates",
          "Others"
        ]
      }
    };
  }

  render() {
    return (
      <div className="chart-container">
        <Doughnut
          data={this.state.chartData}
          width={100}
          height={40}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1,
            title: {
              display: true,
              text: this.props.title,
              fontSize: 25,
              text: "Weekly Grocery Breakdown"
            },
            legend: {
              display: true,
              position: "left",
              align: "center"
            }
          }}
        />
      </div>
    );
  }
}

// Chart.defaultProps = {
//   title:
// };

export default Chart;
