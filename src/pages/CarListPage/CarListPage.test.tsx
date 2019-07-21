import React from 'react';
import { cleanup, render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'react-jss';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import theme from '../../theme';
import reducer from '../../reducer';
import { reduxStateMock } from '../../test/mocks';
import CarListPage from './CarListPage';

const store = createStore(reducer, reduxStateMock, applyMiddleware(thunk));

function renderWithRedux(ui: React.ReactElement<any>) {
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

  test('should render <NavFilter />', async () => {
    const navFilter = await renderResult.queryByTestId('navFilter');
    expect(navFilter).not.toBeNull();
  });

  test('should render <CarList />', async () => {
    const carList = await renderResult.queryByTestId('carList');
    expect(carList).not.toBeNull();
  });

  test.skip('should render favorite cars first', async () => {
    const favoriteCarsId = 51;
    const carItems = await renderResult.queryAllByTestId('carItem');
    const firstCarId = Number(carItems[0].dataset.id);

    expect(firstCarId).toBe(favoriteCarsId);
  });
});

export default undefined;
