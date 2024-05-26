import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactSearch from '../src';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <ReactSearch />
  </React.StrictMode>
);
