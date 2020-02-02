import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './styles.css';

const ReactLazyPreload = importStatement => {
  const Component = lazy(importStatement);
  Component.preload = importStatement;
  return Component;
};

const DataTable = ReactLazyPreload(() => import('./DataTable'));
const DataChart = ReactLazyPreload(() => import('./DataChart'));

export default function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <h1>Welcome to Coderbook</h1>
        <Switch>
          <Route
            path='/users'
            exact
            component={() => (
              <Suspense fallback={<div>Loading.....</div>}>
                <DataTable preloadChart={DataChart.preload} />
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
          <Redirect from='/' to='/users' />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
