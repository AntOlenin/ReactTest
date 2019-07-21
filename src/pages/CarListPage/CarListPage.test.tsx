import React from 'react';
import { cleanup, render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'react-jss';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import theme from '../../theme';
import store from '../../store';

import CarListPage from './CarListPage';

function renderWithRedux(ui: any) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  }
}

describe('<CarListPage />', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    cleanup();
    renderResult = renderWithRedux(
      <ThemeProvider theme={theme}>
        <Router>
          <Route component={CarListPage} />
        </Router>
      </ThemeProvider>,
    );
  });

  test('should not render Welcome!', async () => {
    const welcomeText = await renderResult.queryByText('Welcome!');
    expect(welcomeText).toBeNull();
  });

  test('should render <Header />', async () => {
    const header = await renderResult.queryByTestId('header');
    expect(header).not.toBeNull();
  });

  test('should render <Footer /> at the bottom', async () => {
    const footer = await renderResult.queryByTestId('footer');
    expect(footer).not.toBeNull();
  });
});

export default undefined;
