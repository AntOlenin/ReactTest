import React from 'react';
import { ThemeProvider } from 'react-jss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CarListPage from './pages/CarListPage';
import CarDetailPage from './pages/CarDetailPage';
import theme from './theme';
import './server';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route path="/" exact component={CarListPage} />
        <Route path="/car/:id" component={CarDetailPage} />
      </Router>
    </ThemeProvider>
  );
};

export default App;
