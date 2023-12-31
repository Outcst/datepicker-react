import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import ErrorBoundaryComp from "components/error-boundary.comp";
import AppRoutes from "app.routes";

import './app.css';

function App() {
  return (
    <ErrorBoundaryComp>
      <Router>
        <AppRoutes />
      </Router>
    </ErrorBoundaryComp>
  );
}

export default App;
