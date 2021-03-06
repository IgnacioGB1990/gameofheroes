import React, { Component } from "react";
import { Radar, Line, Pie } from 'react-chartjs-2';

class Minichart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat"],
        datasets: [
          {
            label: false,
            data: [
              props.int,
              props.str,
              props.spe,
              props.dur,
              props.pow,
              props.com
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],

            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          },
        ]
      }

    }
  }

  render() {

    return (

      <div key="key" className="minichart">
        <Radar

          data={this.state.chartData}
          width={50}
          height={200}
          options={{
            maintainAspectRatio: false, legend: false, scaleFontColor: 'red', pointLabels: {
            },
            scales: {
              yAxes: [{
                display: true,
                ticks: {
                  suggestedMin: 0,
                  suggestedMax: 100
                }
              }]
            },
            scaleFontColor: 'red',
            responsive: true,
            tooltips: {
              mode: 'single',
            },
            scales: {
              xAxes: [{
                gridLines: {
                  display: false,
                },
                ticks: {
                  fontColor: "#CCC",
                  fontSize: 14
                },
              }],
              yAxes: [{
                display: true,
                gridLines: {
                  display: false,
                },
                ticks: {
                  fontColor: "#CCC",
                  fontSize: 14,
                  suggestedMin: 0,
                  suggestedMax: 100
                },
              }],
            }
          }}
        />
      </div>
    )
  }
}

export default Minichart;