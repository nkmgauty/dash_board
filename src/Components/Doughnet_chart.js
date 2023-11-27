import React, { Component } from "react";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";
class Donut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {},
      series: [44, 55, 41, 17, 15],
      labels: [
        "New",
        "Customer",
        "New Enquiry",
        "Not Interested",
        "Lost Leads",
      ],
    };
  }

  render() {
    return (
      <div className="donut">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width="380"
        />
      </div>
    );
  }
}

// const Donut = () =>{
//     const options = {
//         chart: {
//           type: 'donut',
//         },
//         labels: ['New', 'Customer', 'New Enquiry', 'Not Interested', 'Lost Leads'],
//         series: [30, 40, 25, 20, 15],
//         legend: {
//           position: 'right', // Move the legend to the right corner
//           horizontalAlign: 'left', // Align the legend items to the left horizontally
//         },
//         responsive: [
//           {
//             breakpoint: 480,
//             options: {
//               chart: {
//                 width: 200,
//               },
//               legend: {
//                 position: 'bottom',
//               },
//             },
//           },
//         ],
//       };

// }
export default Donut;
