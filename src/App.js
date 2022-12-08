import './App.css';
import React from 'react';
import { Chart } from './MultilineChart/Chart';
import {
  generateDataChart1,
  generateDataChart2,
  generateDataChart3
} from './MultilineChart/generateRandomData';

const data1 = {
  color: '#ffffff',
  items: generateDataChart1().map((d) => ({ ...d, date: new Date(d.date) }))
};
const data2 = {
  color: '#d53e4f',
  items: generateDataChart2().map((d) => ({ ...d, date: new Date(d.date) }))
};
const data3 = {
  color: '#5e4fa2',
  items: generateDataChart3().map((d) => ({ ...d, date: new Date(d.date) }))
};

const dimensions = {
  width: 830,
  height: 500,
  margin: {
    top: 30,
    right: 30,
    bottom: 30,
    left: 30
  }
};

function App() {
  const chartData = [data1, data2, data3];

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.85)'
      }}>
      <Chart data={chartData} dimensions={dimensions} />
    </div>
  );
}

export default App;
