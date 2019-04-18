import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { HashRouter } from 'react-router-dom';

cosnt render = (Component) => {
  ReactDOM.render (
    <AppContainer>
      <HashRouter>
        <Component/>
      </HashRouter>
    </AppContainer>
    document.getElementById('react-app-root')
  );
};
