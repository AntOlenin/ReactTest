import React from 'react';
import { ThemeProvider } from 'react-jss';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CarListPage from './pages/CarListPage';
import CarDetailPage from './pages/CarDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import theme from './theme';
import store from './store';
import './server';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/cars" exact component={CarListPage} />
            <Route path="/cars/:id" component={CarDetailPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
