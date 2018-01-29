import React from "react";
import ReactDOM from "react-dom";
import Highcharts from "highcharts";
import highstock from "highcharts/highstock";
import exporting from "highcharts/modules/exporting";

//http://jkunst.com/highcharts-themes-collection/

console.log(Highcharts);
console.log(highstock);
console.log(exporting);

import avocado from "highcharts/themes/avocado.js";
import darkBlue from "highcharts/themes/dark-blue.js";
import darkGreen from "highcharts/themes/dark-green.js";
import darkUnica from "highcharts/themes/dark-unica.js";
import gray from "highcharts/themes/gray.js";
import grid from "highcharts/themes/grid.js";
import gridLight from "highcharts/themes/grid-light.js";
import sandSignika from "highcharts/themes/sand-signika.js";
import sunset from "highcharts/themes/sunset.js";
import skies from "highcharts/themes/skies.js";

class HC extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    darkUnica(Highcharts);
    exporting(Highcharts);
    var chart = new Highcharts.Chart({
      chart: {
        renderTo: "container",
        type: "line",
        zoomType: "x"
      },
      tooltip: {
        crosshairs: [true, false]
      },
      plotOptions: {
        series: {
          allowPointSelect: true
        }
      },
      title: {
        text: "Fruit Consumption"
      },
      series: [
        {
          dataLabels: {
            enabled: true
          },
          data: [
            29.9,
            71.5,
            106.4,
            129.2,
            144.0,
            176.0,
            135.6,
            148.5,
            { y: 216.4, marker: { fillColor: "#BF0B23", radius: 10 } },
            194.1,
            95.6,
            54.4
          ]
        },
        {
          dataLabels: {
            enabled: true
          },
          data: [
            15,
            35,
            53,
            60,
            72,
            65,
            70,
            74,
            { y: 108.4, marker: { fillColor: "#BF0B23", radius: 10 } },
            95,
            50,
            24
          ]
        }
      ]
    });
  }
  render() {
    return <div id="container" style={{ width: "100%", height: "400px" }} />;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <HC />;
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
