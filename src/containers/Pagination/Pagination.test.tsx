import React from 'react';
import { cleanup, render, RenderResult } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'react-jss';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import theme from '../../theme';
import reducer from '../../reducer';
import { reduxStateMock } from '../../test/mocks';
import Pagination from './Pagination';

const store = createStore(reducer, reduxStateMock, applyMiddleware(thunk));

function renderWithRedux(ui: React.ReactElement<any>) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  }
}

describe('<Pagination />', () => {
  describe('on first page', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      cleanup();
      renderResult = renderWithRedux(
        <ThemeProvider theme={theme}>
          <Router>
            <Pagination filter={{ page: '1' }} />
          </Router>
        </ThemeProvider>,
      );
    });

    test('should render "First" page link', async () => {
      const el = await renderResult.queryByTestId('paginationFirst');
      expect(el).not.toBeNull();
    });

    test('should render "Previous" page link', async () => {
      const el = await renderResult.queryByTestId('paginationPrevious');
      expect(el).not.toBeNull();
    });

    test('should render "1 of 22"', async () => {
      const el = await renderResult.queryByTestId('paginationMiddle');
      expect(el.textContent).toBe('Page 1 of 22');
    });

    test('should render "Next" page link', async () => {
      const el = await renderResult.queryByTestId('paginationNext');
      expect(el).not.toBeNull();
    });

    test('should render "Last" page link', async () => {
      const el = await renderResult.queryByTestId('paginationLast');
      expect(el).not.toBeNull();
    });

    test('should disable "First" page link', async () => {
      const el = await renderResult.queryByTestId('paginationFirst');
      expect(el.tagName).toBe('SPAN');
    });

    test('should disable "Previous" page link', async () => {
      const el = await renderResult.queryByTestId('paginationPrevious');
      expect(el.tagName).toBe('SPAN');
    });

    test('should enable "Next" page link', async () => {
      const el = await renderResult.queryByTestId('paginationNext');
      expect(el.tagName).toBe('A');
    });

    test('should enable "Last" page link', async () => {
      const el = await renderResult.queryByTestId('paginationLast');
      expect(el.tagName).toBe('A');
    });
  });

  describe('on not last page and not first page', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      cleanup();
      renderResult = renderWithRedux(
        <ThemeProvider theme={theme}>
          <Router>
            <Pagination filter={{ page: '2' }} />
          </Router>
        </ThemeProvider>,
      );
    });

    test('should enable "First" page link', async () => {
      const el = await renderResult.queryByTestId('paginationFirst');
      expect(el.tagName).toBe('A');
    });

    test('should enable "Previous" page link', async () => {
      const el = await renderResult.queryByTestId('paginationPrevious');
      expect(el.tagName).toBe('A');
    });

    test('should enable "Next" page link', async () => {
      const el = await renderResult.queryByTestId('paginationNext');
      expect(el.tagName).toBe('A');
    });

    test('should enable "Last" page link', async () => {
      const el = await renderResult.queryByTestId('paginationLast');
      expect(el.tagName).toBe('A');
    });
  });

  describe('on last page', () => {
    let renderResult: RenderResult;

    beforeEach(() => {
      cleanup();
      renderResult = renderWithRedux(
        <ThemeProvider theme={theme}>
          <Router>
            <Pagination filter={{ page: '23' }} />
          </Router>
        </ThemeProvider>,
      );
    });

    test('should enable "First" page link', async () => {
      const el = await renderResult.queryByTestId('paginationFirst');
      expect(el.tagName).toBe('A');
    });

    test('should enable "Previous" page link', async () => {
      const el = await renderResult.queryByTestId('paginationPrevious');
      expect(el.tagName).toBe('A');
    });

    test('should disable "Next" page link', async () => {
      const el = await renderResult.queryByTestId('paginationNext');
      expect(el.tagName).toBe('SPAN');
    });

    test('should disable "Last" page link', async () => {
      const el = await renderResult.queryByTestId('paginationLast');
      expect(el.tagName).toBe('SPAN');
    });
  });
});

export default undefined;
