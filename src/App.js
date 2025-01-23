import React, { useState } from "react";
import './App.scss';

const App = () => {
  // List of chart options
  const charts = [
    { id: "2024", label: "Total Orders 2024", file: "/charts/total_orders_2024.html" },
    { id: "2023", label: "Total Orders 2023", file: "/charts/total_orders_2023.html" },
    { id: "2022", label: "Total Orders 2022", file: "/charts/total_orders_2022.html" },
    { id: "2021", label: "Total Orders 2021", file: "/charts/total_orders_2021.html" },
    { id: "2020", label: "Total Orders 2020", file: "/charts/total_orders_2020.html" },
    { id: "2019", label: "Total Orders 2019", file: "/charts/total_orders_2019.html" },
    { id: "2018", label: "Total Orders 2018", file: "/charts/total_orders_2018.html" },
    { id: "Total", label: "Total Orders", file: "/charts/tota_orders.html" },
    { id: "average", label: "Average Orders Each Month", file: "/charts/average_orders_each_month.html" },
    { id: "Total Party", label: "Total Orders Each Party", file: "/charts/combined_charts.html" },
  ];

  const [selectedChart, setSelectedChart] = useState(charts[0]);

  return (
    <div className="app">
      <nav className="navbar">
        <ul>
          {charts.map((chart) => (
            <li key={chart.id}>
              <button
                className={selectedChart.id === chart.id ? "active" : ""}
                onClick={() => setSelectedChart(chart)}
              >
                {chart.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <main className="chart-container">
        <h1>{selectedChart.label}</h1>
        <iframe
          src={selectedChart.file}
          title={selectedChart.label}
          style={{ width: "100%", height: "500px", border: "1px solid #ddd" }}
        />
      </main>
    </div>
  );
};

export default App;
