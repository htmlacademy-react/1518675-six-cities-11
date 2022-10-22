import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const mockPrices = [
  { id: 1, price: 100 },
  { id: 2, price: 789 },
  { id: 3, price: 122 },
  { id: 4, price: 32 },
  { id: 5, price: 666 },
  { id: 6, price: 69 }
];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App prices={mockPrices}/>
  </React.StrictMode>,
);
