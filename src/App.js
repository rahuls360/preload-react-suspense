import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles.css';

const ReactLazyPreload = importStatement => {
  const Component = React.lazy(importStatement);
  Component.preload = importStatement;
  return Component;
};

const DataTable = ReactLazyPreload(() => import('./DataTable'));
const DataChart = ReactLazyPreload(() => import('./DataChart'));

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      DataChart.preload();
    }, 3000);
  }, []);
  return (
    <BrowserRouter>
      <div className='App'>
        <h1>Welcome to Coderbook</h1>
        <Switch>
          <Route
            path='/'
            exact
            component={() => (
              <Suspense fallback={<div>Loading.....</div>}>
                <DataTable />
              </Suspense>
            )}
          />
          <Route
            path='/data/:user'
            component={() => (
              <Suspense fallback={<div>Loading.....</div>}>
                <DataChart />
              </Suspense>
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
