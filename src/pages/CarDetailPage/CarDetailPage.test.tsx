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
import CarDetailPage, { IProps } from './CarDetailPage';

const store = createStore(reducer, reduxStateMock, applyMiddleware(thunk));

function renderWithRedux(ui: React.ReactElement<any>) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  }
}

describe.only('<CarListPage />', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    cleanup();
    renderResult = renderWithRedux(
      <ThemeProvider theme={theme}>
        <Router>
          <Route component={(props: IProps) => <CarDetailPage {...{...props, match: {...props.match, params: { id: '124532' } }}}/>} />
        </Router>
      </ThemeProvider>,
    );
  });

  test.only('should render 404 if error', async () => {
    const notFoundText = await renderResult.queryByTestId('notFoundText');
    expect(notFoundText).not.toBeNull();
  });
});

export default undefined;
