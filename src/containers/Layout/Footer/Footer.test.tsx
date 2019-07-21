import React from 'react';
import { ThemeProvider } from 'react-jss';
import { cleanup, render, RenderResult } from '@testing-library/react';
import theme from './../../../theme';
import Footer from './Footer';

describe('<Footer />', () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    cleanup();
    renderResult = render(
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>,
    );
  });

  test('should render "©Auto1 Group 2019"', async () => {
    const textNode = await renderResult.queryByTestId('footerText');
    expect(textNode.textContent).toBe('©Auto1 Group 2019');
  });
});

export default undefined;
