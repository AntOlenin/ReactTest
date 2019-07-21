import React from 'react'
import '@testing-library/react/cleanup-after-each'
import { cleanup, render, RenderResult } from '@testing-library/react'
import { ThemeProvider } from 'react-jss';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './../../theme';
import { reduxStateMock } from '../../test/mocks';
import { Resource } from '../../types';
import CarItem from './CarItem';

const car = reduxStateMock.entity[Resource.cars][0];

describe('<Header />', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    cleanup();
    renderResult = render(
      <ThemeProvider theme={theme}>
        <Router>
          <CarItem car={car} />
        </Router>
      </ThemeProvider>,
    );
  });

  test('should render cars manufacturer and model name', async () => {
    const title = await renderResult.queryByTestId('carItemTitle');
    expect(title.textContent).toBe('Chrysler GTS');
  });

  test('should render cars stock number, mileage, fuel type and color', async () => {
    const info = await renderResult.queryByTestId('carItemInfo');
    expect(info.textContent).toBe('Stock # 50 - 37081 km - Diesel - blue');
  });

  test('when click on "View details" should navigate to show car page', async () => {
    const link = await renderResult.queryByTestId('carItemLink');
    const href = link.getAttribute('href');
    expect(href).toBe('/cars/50');
  });
});
