import React from 'react';
import { ThemeProvider } from 'react-jss';
import { cleanup, render, RenderResult } from '@testing-library/react';
import theme from '../../theme';
import { reduxStateMock } from '../../test/mocks';
import CarContent from './CarContent';
import { Resource } from '../../types';

const car = reduxStateMock.entity[Resource.cars][0];

describe('<CarContent />', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    cleanup();
    renderResult = render(
      <ThemeProvider theme={theme}>
        <CarContent car={car} isFavorite={false} onRemove={() => {}} onSave={() => {}} />
      </ThemeProvider>,
    );
  });

  test('should render car title (Manufacturer, Model)', async () => {
    const title = await renderResult.queryByTestId('carDetailTitle');
    expect(title.textContent).toBe('Chrysler GTS');
  });

  test('should render car info (Stock number, Mileage, Fuel type, Color)', async () => {
    const info = await renderResult.queryByTestId('carDetailInfo');
    expect(info.textContent).toBe('Stock # 50 - 37081 km - Diesel - blue');
  });

  test('should render "Save" favorites <Button />', async () => {
    const button = await renderResult.queryByTestId('carDetailSaveButton');
    expect(button).not.toBeNull();
  });
});

export default undefined;
