import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles.css';
const DataTable = lazy(() => import('./DataTable'));
const DataChart = lazy(() => import('./DataChart'));

export default function App() {
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
