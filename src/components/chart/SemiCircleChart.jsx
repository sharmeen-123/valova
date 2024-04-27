import React, { Component } from 'react';
import ApexCharts from 'apexcharts';

class SemiCirclePieChart extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    const chartOptions = {
      series: [30, 10, 10],
      colors: ["#CB3CFF", "#0038FF", "#00C2FF"],
      chart: {
        height: 270,
        width: "100%",
        type: "donut",
      },
      stroke: {
        colors: ["transparent"],
        lineCap: "",
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          donut: {
            labels: {
              show: true,
              name: {
                show: true,
                fontFamily: "Nunito",
                offsetY: 10,
              },
              total: {
                showAlways: true,
                show: true,
                label: "Users by device",
                fontFamily: "Nunito",
                fontSize: "14px",
                color:"#7E89AC",
                formatter: (w) => {
                  const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                  return sum;
                },
              },
              value: {
                show: true,
                fontFamily: "Nunito",
                fontSize: "36px",
                color: "white",
                offsetY: -30,
                formatter: (value) => value,
              },
            },
            size: "90%",
          },
        },
      },
      grid: {
        padding: {
          top: -2,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
    };

    const chart = new ApexCharts(this.chartRef.current, chartOptions);
    chart.render();
  }

  render() {
    return <div ref={this.chartRef}/>;
  }
}

export default SemiCirclePieChart;
