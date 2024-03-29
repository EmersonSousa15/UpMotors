import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MainRoutes } from './pages/MainRoutes'
import './App.css';

export const App = () => {
  return (
   <Router basename={process.env.PUBLIC_URL}>
      <MainRoutes />
   </Router>
  );
}

