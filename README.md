# vanjs-chartjs-example

This is a lightweight example that showcases creating a custom Van component as a wrapper for an external library -- in this case, the `Chart` component from [Chart.js](https://www.chartjs.org/).

- See [`chart.ts`](https://github.com/csm-kb/vanjs-chartjs-example/src/chart.ts) for the wrapper.
- See [`main.ts`](https://github.com/csm-kb/vanjs-chartjs-example/src/main.ts) for the wrapper.

The chart is connected to state that re-renders when it changes.

This repository was spawned from the `vite-vanjs-ts` template.

---

### vite-vanjs-ts

[Vite](https://vitejs.dev) + [VanJS](https://vanjs.org) with TypeScript template.
This Vite template uses:

- TypeScript
- VanJS core (vanjs-core)
- VanX (vanjs-ext)

### How to use:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/csm-kb/vanjs-chartjs-example.git
   ```
2. **Navigate to cloned directory**:
   ```bash
   cd vanjs-chartjs-example
   ```
3. **Install the dependencies**:
   ```bash
   yarn install
   ```
4. **Start development server**:
   ```bash
   yarn dev
   ```
---