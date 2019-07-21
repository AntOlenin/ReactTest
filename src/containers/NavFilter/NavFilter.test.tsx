import React from 'react';
import { cleanup, render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'react-jss';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import theme from '../../theme';
import reducer from '../../reducer';
import { reduxStateMock } from '../../test/mocks';
import NavFilter from './NavFilter';

const store = createStore(reducer, reduxStateMock, applyMiddleware(thunk));

function renderWithRedux(ui: any) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  }
}

describe('<NavFilter />', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    cleanup();
    renderResult = renderWithRedux(
      <ThemeProvider theme={theme}>
        <NavFilter filter={{ color: 'red' }} onChange={() => {}} />
      </ThemeProvider>,
    );
  });

  test('should render "Color" <Label />', async () => {
    const colorSelectLabel = await renderResult.queryByTestId('colorSelectLabel');
    expect(colorSelectLabel).not.toBeNull();
  });

  test('should render colors <Select />', async () => {
    const colorSelect = await renderResult.queryByTestId('colorSelect');
    expect(colorSelect).not.toBeNull();
  });

  test('should render "Manufacturer" <Label />', async () => {
    const manufacturerSelectLabel = await renderResult.queryByTestId('manufacturerSelectLabel');
    expect(manufacturerSelectLabel).not.toBeNull();
  });

  test('should render manufacturers <Select />', async () => {
    const manufacturerSelect = await renderResult.queryByTestId('manufacturerSelect');
    expect(manufacturerSelect).not.toBeNull();
  });

  test('should render "Filter" <Button />', async () => {
    const filterButton = await renderResult.queryByTestId('filterButton');
    expect(filterButton).not.toBeNull();
  });
});

export default undefined;
