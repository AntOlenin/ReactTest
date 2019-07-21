import React from 'react'
import '@testing-library/react/cleanup-after-each'
import { cleanup, render, RenderResult } from '@testing-library/react'
import { ThemeProvider } from 'react-jss';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './../../../theme';
import Header from './Header';

describe('<Header />', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    cleanup();
    renderResult = render(
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
        </Router>
      </ThemeProvider>,
    );
  });

  test('should render <Logo />', async () => {
    const logoNode = await renderResult.queryByTestId('logo');
    expect(logoNode).not.toBeNull()
  });

  test('should render "My Orders" <Link to="/favorites" />', async () => {
    const linkNode = await renderResult.queryByTestId('myOrdersLink');
    const href = linkNode.getAttribute('href');
    expect(href).toBe('/favorites')
  });
});


