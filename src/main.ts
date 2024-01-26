import "./style.css";

import van from "vanjs-core";

import { Chart } from "./chart";

const { div, h1, p, button } = van.tags;
const app = document.querySelector<HTMLDivElement>("#app")!;

const Main = () => {
  const uiShowDebugData = van.state(false);
  // initialize with some random data
  const chartData = van.state<[number,number][]>((() => {
    const data: [number, number][] = [];
    for (let i = 0; i < 10; i++) {
      const next: [number, number] = [
        i,
        Math.random() * 100
      ];
      data.push(next);
    }
    return data;
  })());

  const RandomizeData = () => {
    chartData.val = []
    for (let i = 0; i < 10; i++) {
      const next: [number, number] = [
        i,
        Math.random() * 100
      ];
      chartData.val = [...chartData.val, next];
    }
  };

  return div(
    h1(
      "vanjs-graph-render"
    ),
    p(
      { class: "title-text" },
      "An example of a Chart.js graph rendered with Van.js. Press the randomize button to generate new data."
    ),
    p(),
    button(
      { onclick: RandomizeData },
      "Randomize"
    ),
    /* our beautiful chart! -- see Chart.js docs to learn how its config works */
    () => Chart({
      type: "line",
      data: {
        labels: chartData.val.map(([x, _y]) => x),
        datasets: [
          {
            label: "Global Market Cap ($T)",
            backgroundColor: "#0eee8c",
            borderColor: "#0eee8c",
            data: chartData.val.map(([_x, y]) => y),
          },
        ],
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: "Day",
            },
          },
          y: {
            title: {
              display: true,
              text: "Market Cap ($T)"
            },
            beginAtZero: false,
            ticks: {
              // Include a dollar sign in the ticks
              callback: function(value, _index, _ticks) {
                // we want value to be rounded to 3 decimal places
                // 1.23456789 -> 1.235
                return "$" + (value as number).toFixed(3) + "T";
              },
            },
          },
        },
      },
    }),
    p(),
    /* debug data, in case you want to look at chartData's contents */
    div(
      button(
        { onclick: () => uiShowDebugData.val = !uiShowDebugData.val },
        () => (((uiShowDebugData.val) ? "- Hide" : "+ Show") + " Debug Data"),
      ),
      p(),
      div(
        {
          style: () => (
            `display: ${uiShowDebugData.val ? "block" : "none"}; ` +
            "background-color: #eee; " +
            "padding: 1rem; " +
            "border-radius: 0.5rem; " +
            "font-family: monospace; " +
            "white-space: pre;" +
            "overflow: auto;"
          )
        },
        () => "chartData = " + JSON.stringify(chartData.val)
      ),
    ),
  );
};

van.add(app, Main());
