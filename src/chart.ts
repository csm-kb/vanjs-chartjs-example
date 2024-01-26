import van from "vanjs-core";
import LibChart from "chart.js/auto";
import type { ChartConfiguration } from "chart.js/auto";

const { div, canvas } = van.tags;

/**
 * A Van.js chart component that wraps the Chart.js library.
 */
export const Chart = (config: ChartConfiguration) => {
  const chart = new LibChart(canvas(), config);

  return div(
    chart.canvas,
  );
}
