import React from 'react';
import { cleanup, render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'react-jss';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import theme from '../../theme';
import reducer from '../../reducer';
import { reduxStateMock } from '../../test/mocks';
import SortBar from './SortBar';

const store = createStore(reducer, reduxStateMock, applyMiddleware(thunk));

function renderWithRedux(ui: any) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  }
}

describe('<SortBar />', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    cleanup();
    renderResult = renderWithRedux(
      <ThemeProvider theme={theme}>
        <SortBar filter={{ }} onChange={() => {}} />
      </ThemeProvider>,
    );
  });

  test('should render "10 of 222 results"', async () => {
    const textNode = await renderResult.queryByTestId('resultsRange');
    expect(textNode.textContent).toBe('Showing 10 of 222 results');
  });

  test('should render sortBy select', async () => {
    const select = await renderResult.queryByTestId('sortBySelect');
    expect(select).not.toBeNull();
  });
});

export default undefined;
