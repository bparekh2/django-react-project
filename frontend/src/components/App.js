// frontend/src/components/App.js

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));