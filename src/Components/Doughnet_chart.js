import React, { Component } from "react";
import ApexCharts from "apexcharts";
import Chart from "react-apexcharts";
import "../Asset/CSS/donut.css";

class Donut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {},
      series: [44, 55, 41, 17, 15, ],
      labels: {
        show: false,
        name: {
          show: true,
          fontSize: '22px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 600,
          color: undefined,
          offsetY: -10,
          formatter: function (val) {
            return val
          }
        },
      },
      value: {
        show: true,
        fontSize: '16px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 400,
        color: undefined,
        offsetY: 16,
        formatter: function (val) {
          return val
        }
      },
      dataLabels:[1,2,3,4,5],
    };
  }

  render() {
    return (
      <div className="donut">
        <Chart
          options={this.state.options}
          series={this.state.series}
          labels={this.state.labels}
          dataLabels={this.state.dataLabels}
          type="donut"
          width="380"
        />
      </div>
    );
  }
}

export default Donut;
