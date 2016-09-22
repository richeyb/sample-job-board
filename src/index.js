import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { Provider } from 'react-redux';
import Store from './lib/Store';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  appBar: {
    color: '#00B2A9',
  },
  palette: {
    primary: '#00B2A9',
  }
});

ReactDOM.render(
  <Provider store={Store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
