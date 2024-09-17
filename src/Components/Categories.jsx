import React, { useState } from 'react';
import data from '../utils/dashboardData.json';
import Widgets from './Widgets';

const Categories = () => {
  const [dashData, setDashData] = useState(data[0].dashBoard.categories);

  const updateDashoboard = (newWidget) => {
    setDashData((prevData) => {
      return prevData.map((category) => {
        if (category.categoryName === newWidget.categoryName) {
          // Add the new widget to the correct category
          return {
            ...category,
            widgets: [...category.widgets, newWidget]
          };
        }
        return category; // Return other categories unchanged
      });
    });
  };

  return (
    <div>
      {dashData.map((dashboard, index) => (
        <Widgets key={index} data={dashboard} addWidget={updateDashoboard} />
      ))}
    </div>
  );
};

export default Categories;
