import React from 'react';
import { ThemeProvider } from 'react-jss';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CarListPage from './pages/CarListPage';
import CarDetailPage from './pages/CarDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import theme from './theme';
import store from './store';
import './server';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Route path="/" exact component={CarListPage} />
          <Route path="/car/:id" component={CarDetailPage} />
          <Route component={NotFoundPage} />
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
