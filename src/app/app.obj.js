import React, { Fragment } from 'react';
import AppMouse from './app.mouse';
import AppRouter from './app.router';
import './app.style.desktop.scss';
import './app.style.mobile.scss';
import './app.style.general.scss';

export default function App() {
  return (
    <Fragment>
      {/* <div className="mouse">
        <AppMouse />
      </div> */}
      <div className="app app__theme__blue">
        <AppRouter />
      </div>
    </Fragment>
  )
}