import React, { useState } from "react";
import "./App.css";

const App = () => {
  const initialData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ];

  const [data, setData] = useState(initialData);
  const [sortBy, setSortBy] = useState(null);

  const handleSortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      const dateComparison = new Date(b.date) - new Date(a.date);
      if (dateComparison === 0) {
        return b.views - a.views;
      }
      return dateComparison;
    });
    setData(sortedData);
    setSortBy("date");
  };

  const handleSortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      const viewsComparison = b.views - a.views;
      if (viewsComparison === 0) {
        return new Date(b.date) - new Date(a.date);
      }
      return viewsComparison;
    });
    setData(sortedData);
    setSortBy("views");
  };

  return (
    <div className="XTable">
      <h1>Date and Views Table</h1>
      <div className="buttons-container">
        <button onClick={handleSortByDate}>Sort by Date</button>
        <button onClick={handleSortByViews}>Sort by Views</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.views}</td>
              <td>{row.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
