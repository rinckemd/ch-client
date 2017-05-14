/* @flow */

import React from 'react';
import app from '../styles/App.scss'

export default class App extends React.Component {
  render() {
    return (
      <div className={app.App}>
        <h1>Hello World</h1>
      </div>
    );
  }
}
