import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'react-jss';
import get from 'lodash/get';
import theme from './../../../theme';
import Footer from './Footer';

describe('<Footer />', () => {
  it('should render "©Auto1 Group 2019"', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>,
    );

    const json = component.toJSON();
    const text = get(json, ['children', 0, 'children', 0]);
    expect('©Auto1 Group 2019').toBe(text);
  });
});

export default undefined;
