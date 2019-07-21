import React from 'react';
import { cleanup, render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'react-jss';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import theme from '../../theme';

import CarListPage from './CarListPage';
import { applyMiddleware, createStore } from 'redux';
import reducer from '../../reducer';
import thunk from 'redux-thunk';
import { IReduxState } from '../../types';

const initialState: IReduxState = {
  entity: {
    colors: ['red'],
    manufacturers: [{ name: 'Audi', uuid: '324dw', models: [] }],
    cars: [
      {
        color: 'blue',
        fuelType: 'Diesel',
        manufacturerName: 'Chrysler',
        mileage: { number: 37081, unit: 'km' },
        modelName: 'GTS',
        pictureUrl: '/images/car.png',
        stockNumber: 50,
      }, {
        color: 'red',
        fuelType: 'Petrol',
        manufacturerName: 'BMW',
        mileage: { number: 50104, unit: 'km' },
        modelName: '4er',
        pictureUrl: '/images/car.png',
        stockNumber: 51,
      }
    ],
  },
  meta: {
    totalCarsCount: 222,
    totalPageCount: 22,
  },
  progress: {},
  error: null,
  localStorage: {
    favoriteCars: [ 51 ],
  }
};

const store = createStore(reducer, initialState, applyMiddleware(thunk));

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

  test('should render <NavFilter />', async () => {
    const navFilter = await renderResult.queryByTestId('navFilter');
    expect(navFilter).not.toBeNull();
  });

  test('should render <CarList />', async () => {
    const carList = await renderResult.queryByTestId('carList');
    expect(carList).not.toBeNull();
  });
});

export default undefined;
