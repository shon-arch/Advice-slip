import React from 'react';
import ReactDOM from 'react-dom/client';
import { AdviceCard } from './AdviceCard';
import './Index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AdviceCard />
  </React.StrictMode>
);