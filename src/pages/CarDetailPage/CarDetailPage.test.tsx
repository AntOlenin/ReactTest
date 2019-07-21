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
import CarDetailPage from './CarDetailPage';

const initialState = { ...reduxStateMock, error: 404 };
const store = createStore(reducer, initialState, applyMiddleware(thunk));

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
          <Route component={CarDetailPage} />
        </Router>
      </ThemeProvider>,
    );
  });

  test('should render 404 if error', async () => {
    const welcomeText = await renderResult.queryByText('Welcome!');
    expect(welcomeText).toBeNull();
  });
});

export default undefined;
